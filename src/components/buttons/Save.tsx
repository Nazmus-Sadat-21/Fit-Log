"use client";
import { FitLogContext } from "@/context/FitLogcontext";
import { Exercise } from "@/types/type";
import React, { useContext } from "react";
import {  toast } from "react-toastify";

export interface ExerciseCardProps {
  exercise: Exercise;
}
const Save = ({ exercise }: ExerciseCardProps) => {
  const { save, setSave } = useContext(FitLogContext);

  const handleButton = () => {
    const chk = save.find((e) => e.id === exercise.id);
    if (chk != null) {
      return toast.error(`${exercise.name} is already exist in saved list`);
    }

    setSave([...save, exercise]);
    toast.success(`${exercise.name} is saved`);
  };
  return (
    <div>
      <button
        onClick={() => handleButton()}
        className="cursor-pointer border border-gray-700/80 hover:border-gray-500 hover:bg-gray-800/40 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2.5 transition-all duration-200 active:scale-95"
      >
        <svg
          className="w-4 h-4 text-gray-300"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        <span>Save for later</span>
      </button>
    </div>
  );
};

export default Save;
