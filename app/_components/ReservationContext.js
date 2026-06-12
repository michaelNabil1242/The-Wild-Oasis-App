"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ReservationProvider({ children }) {
  const [range, setRangeInternal] = useState(initialState);

  const resetRange = () => setRangeInternal(initialState);

  // Intercept state changes to ensure range always has an object shape
  const setRange = (newRange) => {
    if (!newRange) {
      setRangeInternal(initialState);
    } else {
      setRangeInternal(newRange);
    }
  };

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { ReservationProvider, useReservation };
