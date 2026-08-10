"use client";
import React, { useState, createContext } from "react";

interface ReservesInterface {
  handleReserves: (id: string) => void;
  isReserve: (id: string) => boolean;
}
export const ReservesContext = createContext<ReservesInterface>({
  handleReserves: () => {},
  isReserve: () => false,
});

export const ReservesProvider = ({ children }: React.PropsWithChildren) => {
  const [reservesId, setReservesId] = useState<string[]>([]);

  const isReserve = (id: string): boolean => reservesId.includes(id);

  const handleReserves = (id: string) => {
    if (reservesId.includes(id)) {
      setReservesId((prev) => prev.filter((element) => element !== id));
    } else {
      setReservesId((prev) => [...prev, id]);
    }
  };

  return (
    <ReservesContext.Provider value={{ handleReserves, isReserve }}>
      {children}
    </ReservesContext.Provider>
  );
};
