"use client"
import { FitLogContext } from "@/context/FitLogcontext";
import { Exercise } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
export interface ExerciseCardProps {
  exercise: Exercise;
}
function FitCard({ exercise }: ExerciseCardProps) {
  const {setActiveTab } = useContext(FitLogContext);
  return (
    <Link
    onClick={()=>setActiveTab("")}
      href={`/FitLogs/${exercise.id}`}
      className="group bg-[#12141c] border border-gray-800/80 hover:border-[#a3e635] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col w-full max-w-sm mx-auto cursor-pointer"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0a0b0f]">
        <Image
          src={exercise.image}
          alt={exercise.name}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow justify-between text-white">
        <div>
          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {exercise.muscleGroups.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#a3e635] text-black font-black text-[11px] tracking-wider uppercase px-3 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-black tracking-tight text-white uppercase leading-snug group-hover:text-[#a3e635] transition-colors duration-300">
            {exercise.name}
          </h3>

          <p className="text-xs text-gray-400 font-medium mt-1">
            {exercise.equipment}
          </p>
        </div>

        <div className="mt-5 py-2.5 px-3.5 border border-gray-800/90 rounded-lg bg-[#181a24]/50 flex items-center justify-between text-xs text-gray-300 font-semibold">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-[#a3e635]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
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

          {/* Calories Burned */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-[#a3e635]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 23c-4.97 0-9-3.58-9-8 0-4.19 3.25-7.79 6.25-10.79.41-.41 1.09-.41 1.5 0 .2.2.3.47.3.75 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.28.1-.55.3-.75.41-.41 1.09-.41 1.5 0C18.75 7.21 22 10.81 22 15c0 4.42-4.03 8-9 8z" />
            </svg>
            <span>{exercise.caloriesBurned} kcal</span>
          </div>

          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-[#a3e635]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>{exercise.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FitCard;
