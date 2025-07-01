import { useState } from "react";
import { regionData } from "../pages/sendParcel/data/regionData";

export const useRegionWarehouses = () => {
  const [senderWarehouses, setSenderWarehouses] = useState([]);
  const [receiverWarehouses, setReceiverWarehouses] = useState([]);

  const handleSenderRegionChange = (region) => {
    const filtered = regionData.filter((item) => item.region === region);
    const allWarehouses = filtered.flatMap((item) => item.warehouses);
    setSenderWarehouses(allWarehouses);
  };

  const handleReceiverRegionChange = (region) => {
    const filtered = regionData.filter((item) => item.region === region);
    const allWarehouses = filtered.flatMap((item) => item.warehouses);
    setReceiverWarehouses(allWarehouses);
  };

  return {
    senderWarehouses,
    receiverWarehouses,
    handleSenderRegionChange,
    handleReceiverRegionChange,
  };
};
