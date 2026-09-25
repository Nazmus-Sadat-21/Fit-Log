"use client";
import { FitLogContext } from "@/context/FitLogcontext";
import { Exercise } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

export interface ExerciseCardProps {
  exercise: Exercise;
  isButton?: "today" | "saved";
}

const Listcard = ({ exercise, isButton }: ExerciseCardProps) => {
  const { today, setToday, save, setSave } = useContext(FitLogContext);
  const [mark, setmark] = useState<boolean>(false);
 const handleMark = (e:boolean)=>{
  setmark(e)
  toast.success(`${exercise.name} is completed`)
 }
  const onRemove = () => {
    if (isButton === "today") {
      if (today?.some((e) => String(e.id) === String(exercise.id))) {
        setToday((prevToday: Exercise[]) =>
          prevToday.filter((e) => String(e.id) !== String(exercise.id)),
        );
        return toast.success(`${exercise.name} removed successfully`);
      }
    }

    if (isButton === "saved") {
      if (save?.some((e) => String(e.id) === String(exercise.id))) {
        setSave((prevSave: Exercise[]) =>
          prevSave.filter((e) => String(e.id) !== String(exercise.id)),
        );
        return toast.success(`${exercise.name} removed successfully`);
      }
    }
  };

  return (
    <div className="w-full bg-[#0e1017] border border-gray-800/80 hover:border-gray-700/80 rounded-2xl p-3.5 sm:p-4 md:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 transition-all duration-200 shadow-xl">
      {/* Left Section: Thumbnail & Info */}
      <div className="flex items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
        <div className="relative w-24 h-16 sm:w-28 sm:h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#181a24] border border-gray-800/90">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white truncate">
            {exercise.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-gray-400 mt-0.5">
            {exercise.equipment}
          </p>

          <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs font-semibold text-gray-300">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#a3e635]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6l4 2"
                />
              </svg>
              <span>{exercise.duration} min</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#a3e635]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 23c-4.97 0-9-3.58-9-8 0-4.19 3.25-7.79 6.25-10.79.41-.41 1.09-.41 1.5 0 .2.2.3.47.3.75 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.28.1-.55.3-.75.41-.41 1.09-.41 1.5 0C18.75 7.21 22 10.81 22 15c0 4.42-4.03 8-9 8z" />
              </svg>
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            <div className="flex items-center gap-1.5">
              <svg
                className="w-3.5 h-3.5 text-[#a3e635]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Action Controls */}
      <div className="flex items-center justify-end gap-2.5 sm:gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-gray-800/60 flex-shrink-0">
        <Link href={`/FitLogs/${exercise.id}`}>
          <span className="inline-block cursor-pointer border border-gray-700/80 hover:border-gray-500 hover:bg-gray-800/40 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap active:scale-95">
            View Details
          </span>
        </Link>



        {/* Mark as Done Button - Rendered ONLY if NOT saved */}
        {isButton === "today" && (
          <button
          disabled={mark}
          onClick={()=>handleMark(true)}
            className={` flex items-center gap-1.5 text-xs sm:text-sm font-extrabold px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap active:scale-95 ${
              mark == false
                ? "cursor-pointer bg-[#a3e635] hover:bg-[#8ee025] text-black shadow-md shadow-[#a3e635]/10 "
                : "cursor-not-allowed bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 "
            }`}
          >
            <svg
              className="w-4 h-4 stroke-[3]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{mark ? "Completed" : "Mark as Done"}</span>
          </button>
        )}

        {/* Delete / Dismiss Button */}
        <button
          onClick={onRemove}
          className="cursor-pointer p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
          aria-label="Remove item"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Listcard;
