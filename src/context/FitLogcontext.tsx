"use client";
import { Exercise } from "@/types/type";
import React, { createContext, ReactNode, useState } from "react";


interface FitLogContextPrpos {
  today: Exercise[];
  setToday: React.Dispatch<React.SetStateAction<Exercise[]>>;
  save: Exercise[];
  setSave: React.Dispatch<React.SetStateAction<Exercise[]>>;
}

export const FitLogContext = createContext<FitLogContextPrpos>({
  today: [],
  setToday: () => {},
  save: [],
  setSave: () => {}
});

const FitLogProvider = ({children}:{children:ReactNode}) => {

    const [today,setToday] = useState<Exercise[]>([])
    const [save,setSave] = useState<Exercise[]>([])

    const sharedData = {
        today,
        setToday,
        save,
        setSave
    }

  return (
    <>
        <FitLogContext.Provider value={sharedData}>{children}</FitLogContext.Provider>
    </>
  );
};

export default FitLogProvider;
