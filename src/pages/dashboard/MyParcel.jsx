import { useQuery } from "@tanstack/react-query";
import { use, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Loader } from "../../components";
import ParcelTable from "./ParcelTable";
import Swal from "sweetalert2";
import UpdateParcelModal from "../../modal/UpdateParcelModal";
import { useNavigate } from "react-router";

export const MyParcel = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [selectedParcel, setSelectedParcel] = useState(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const navigate = useNavigate()
  const {
    data: parcels = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    return <Loader />;
  }

  const handleView = (parcel) => {
    setSelectedParcel(parcel);
    setIsUpdateModalOpen(true);
  };

  const handlePay = (parcel) => {
    navigate(`/dashboard/payment/${parcel._id}`);

  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this parcel deletion!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3342f",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/parcels/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "The parcel has been deleted.",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });
            refetch();
          }
        } catch (err) {
          console.error("Delete error:", err);
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      }
    });
  };

  const handleUpdate = async (updatedData) => {
    try {
      const res = await axiosSecure.patch(
        `/parcels/${selectedParcel._id}`,
        updatedData
      );
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Updated!",
          text: "Parcel information has been updated.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
        refetch();
        setIsUpdateModalOpen(false);
      }
    } catch (err) {
      console.error("Update error:", err);
      Swal.fire("Error!", "Failed to update parcel.", "error");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <ParcelTable
        parcels={parcels}
        onView={handleView}
        onPay={handlePay}
        onDelete={handleDelete}
      />

      {isUpdateModalOpen && (
        <UpdateParcelModal
          parcel={selectedParcel}
          onClose={() => setIsUpdateModalOpen(false)}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};
