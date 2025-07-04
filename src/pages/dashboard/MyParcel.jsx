import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Loader } from "../../components";
import ParcelTable from "./ParcelTable";

export const MyParcel = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], isPending } = useQuery({
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
