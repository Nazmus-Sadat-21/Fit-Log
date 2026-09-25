"use client";
import { Exercise } from "@/types/type";
import React, { createContext, ReactNode, useState } from "react";


interface FitLogContextPrpos {
  today: Exercise[];
  setToday: React.Dispatch<React.SetStateAction<Exercise[]>>;
  save: Exercise[];
  setSave: React.Dispatch<React.SetStateAction<Exercise[]>>;
  activeTab : "workouts" | "myplan" | "";
  setActiveTab : React.Dispatch<React.SetStateAction<"workouts" | "myplan" | "">>;
}

export const FitLogContext = createContext<FitLogContextPrpos>({
  today: [],
  setToday: () => {},
  save: [],
  setSave: () => {},
  activeTab: "workouts",
  setActiveTab: () => {}
});

const FitLogProvider = ({children}:{children:ReactNode}) => {

    const [today,setToday] = useState<Exercise[]>([])
    const [save,setSave] = useState<Exercise[]>([])
    const [activeTab,setActiveTab] = useState<"workouts" | "myplan" | "">("workouts")

    const sharedData = {
        today,
        setToday,
        save,
        setSave,
        activeTab,
        setActiveTab
    }

  return (
    <>
        <FitLogContext.Provider value={sharedData}>{children}</FitLogContext.Provider>
    </>
  );
};

export default FitLogProvider;
