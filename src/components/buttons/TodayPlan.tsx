"use client";
import { FitLogContext } from "@/context/FitLogcontext";
import { Exercise } from "@/types/type";
import React, { useContext } from "react";
import { toast } from "react-toastify";
export interface ExerciseCardProps {
  exercise: Exercise;
}
const TodayPlan = ({ exercise }: ExerciseCardProps) => {
  const { today, setToday } = useContext(FitLogContext);

  const handleButton = () => {
    const chk = today.find((e) => e.id === exercise.id);
    if (chk != null) {
      return toast.error(`${exercise.name} is already added in plan list `);
    }
    setToday([...today, exercise]);
    toast.success(`${exercise.name} is added in plan list `);
  };
  return (
    <div>
      <button
        onClick={() => handleButton()}
        className="bg-[#a3e635] cursor-pointer hover:bg-[#8ee025] text-black font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2.5 transition-all duration-200 shadow-lg shadow-[#a3e635]/10 active:scale-95"
      >
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
        </svg>
        <span>Add to today's plan</span>
      </button>
    </div>
  );
};

export default TodayPlan;
