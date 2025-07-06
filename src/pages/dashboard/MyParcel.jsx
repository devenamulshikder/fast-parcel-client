import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Loader } from "../../components";
import ParcelTable from "./ParcelTable";
import Swal from "sweetalert2";

export const MyParcel = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
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
  console.log(parcels);
  if (isPending) {
    return <Loader />;
  }
  const handleView = (parcel) => {
    console.log("View Details:", parcel);
  };

  const handlePay = (parcel) => {
    console.log("Initiate Payment:", parcel);
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
    console.log("Delete Parcel ID:", id);
  };
  return (
    <div className="max-w-7xl mx-auto p-4">
      <ParcelTable
        parcels={parcels}
        onView={handleView}
        onPay={handlePay}
        onDelete={handleDelete}
      />
    </div>
  );
};
