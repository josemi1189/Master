"use client";
import { ReservesContext } from "@/contexts/reservesContext";
import { useContext } from "react";

export const useContextReserved = () => {
  const context = useContext(ReservesContext);

  const { isReserve, handleReserves } = context;
  const getIsReserve = (houseId: string) => isReserve(houseId);
  const handleReserve = (houseId: string) => handleReserves(houseId);

  return { getIsReserve, handleReserve };
};
