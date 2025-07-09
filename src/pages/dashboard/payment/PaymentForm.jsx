/* eslint-disable no-unused-vars */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { use, useState } from "react";
import { FiCreditCard, FiLock, FiCheckCircle, FiXCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Loader } from "../../../components";
import toast from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";

const PaymentForm = ({ onPaymentSuccess }) => {
  const { user } = use(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isPending, data: parcelInfo = {} } = useQuery({
    queryKey: ["parcels", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${id}`);
      return res.data;
    },
  });
  if (isPending) {
    <Loader />;
  }

  const amount = parcelInfo.totalCost;

  const amountInCents = amount * 100;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    try {
      const { error: stripeError, paymentMethod } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
        });

      if (stripeError) {
        setError(stripeError.message);
        setProcessing(false);
        return;
      }
      // Here you would typically send paymentMethod.id to your backend
      // payment intent
      const res = await axiosSecure.post("/create-payment-intent", {
        amountInCents,
        id,
      });
      const clientSecret = res.data.clientSecret;
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });

      if (result.error) {
        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          const paymentData = {
            id,
            email: user.email,
            amount,
            transactionId: result.paymentIntent.id,
            paymentMethod: result.paymentIntent.payment_method_types,
          };
          const paymentRes = await axiosSecure.post("/payments", paymentData);
          if (paymentRes.data.insertedId) {
            toast.success("payment successfully!");
          }
        }
      }

      // For this example, we'll simulate a successful payment
      setTimeout(() => {
        setProcessing(false);
        setSucceeded(true);
        if (onPaymentSuccess) onPaymentSuccess(paymentMethod);
      }, 1500);
    } catch (err) {
      setError(err.message);
      setProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
        iconColor: "#666ee8",
      },
      invalid: {
        color: "#9e2146",
        iconColor: "#ff5252",
      },
    },
    hidePostalCode: true,
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
      {/* Payment Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Payment Details</h2>
        <div className="flex items-center text-sm text-green-600">
          <FiLock className="mr-1" />
          <span>Secure Payment</span>
        </div>
      </div>

      {/* Amount Display */}
      {amount && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total Amount</span>
            <span className="text-xl font-semibold">${amount.toFixed(2)}</span>
          </div>
        </div>
      )}

      {/* Success Message */}
      {succeeded ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-6"
        >
          <FiCheckCircle className="mx-auto text-5xl text-green-500 mb-4" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Payment Successful!
          </h3>
          <p className="text-gray-600 mb-5">Thank you for your payment.</p>

          <Link
            to={"/dashboard/parcels"}
            className="text-secondary text-lg  bg-[#b5d654] rounded-3xl py-2 px-3"
          >
            Back to My Parcel
          </Link>
        </motion.div>
      ) : (
        <>
          {/* Payment Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Card Element */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center text-gray-500 mb-2">
                <FiCreditCard className="mr-2" />
                <span className="text-sm font-medium">Card Information</span>
              </div>
              <CardElement options={cardElementOptions} />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center text-red-500 text-sm p-3 bg-red-50 rounded-lg"
              >
                <FiXCircle className="mr-2" />
                {error}
              </motion.div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!stripe || processing}
              className={`w-full py-3 px-4 rounded-lg font-medium text-primary transition-colors ${
                processing
                  ? "bg-[#b5d654ca]"
                  : "bg-[#b5d654] hover:bg-[#b5d654ca]"
              } flex items-center justify-center`}
            >
              {processing ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                `Pay ${amount ? `$${amount.toFixed(2)}` : "Now"}`
              )}
            </button>

            {/* Security Info */}
            <div className="text-center text-xs text-gray-500">
              <p>Your payment is secured with 256-bit SSL encryption</p>
              <div className="flex justify-center space-x-4 mt-2">
                <span>Visa</span>
                <span>Mastercard</span>
                <span>AMEX</span>
                <span>Discover</span>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default PaymentForm;
