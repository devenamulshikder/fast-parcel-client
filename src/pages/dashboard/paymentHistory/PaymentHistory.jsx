import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { use } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../provider/AuthProvider";
import { Loader } from "../../../components";

const PaymentHistory = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], isPending } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-primary">Payment History</h2>
      <div className="overflow-x-auto shadow rounded-lg border border-gray-100">
        <table className="table table-zebra w-full">
          <thead className="bg-base-200 text-base-content">
            <tr>
              <th>SL</th>
              <th>Transaction ID</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Paid At</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={payment._id}>
                  <td>{index + 1}</td>
                  <td className="text-sm break-all text-green-700 font-medium">
                    {payment.transactionId}
                  </td>
                  <td>৳{payment.amount}</td>
                  <td>{payment.paymentMethod?.join(", ")}</td>
                  <td>{format(new Date(payment.paid_at), "PPP p")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No payment records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
