import { FitLogContext } from "@/context/FitLogcontext";
import { Exercise } from "@/types/type";
import React, { useContext } from "react";
export interface ExerciseCardProps {
  exercise: Exercise[];
}
const Summary = ({exercise}:ExerciseCardProps) => {
  
  return (
    <div className="bg-[#0e1017] border border-gray-800/80 rounded-2xl p-6 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800/70 gap-6 md:gap-0">
        {/* Exercises Stat */}
        <div className="md:pr-8 flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">
            Exercises
          </span>
          <span className="text-5xl sm:text-6xl font-black text-[#a3e635]">
           {exercise.length}
          </span>
        </div>

        {/* Minutes Stat */}
        <div className="md:px-8 pt-4 md:pt-0 flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">
            Minutes
          </span>
          <span className="text-5xl sm:text-6xl font-black text-white">
            {
              exercise.reduce((total, item) => total + item.duration, 0)
            }
          </span>
        </div>

        {/* Calories Stat */}
        <div className="md:pl-8 pt-4 md:pt-0 flex flex-col justify-center">
          <span className="text-xs sm:text-sm font-semibold text-gray-400 mb-2">
            Calories
          </span>
          <span className="text-5xl sm:text-6xl font-black text-white">
            {
              exercise.reduce((total, item) => total + item.caloriesBurned, 0)
            }
          </span>
        </div>
      </div>
    </div>
  );
};

export default Summary;
