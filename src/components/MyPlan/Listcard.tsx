import { Exercise } from '@/types/type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export interface ExerciseCardProps {
  exercise: Exercise;
}
const Listcard = ({exercise}:ExerciseCardProps) => {

    return (
    <div className="w-full bg-[#0e1017] border border-gray-800/80 hover:border-gray-700/80 rounded-2xl p-3.5 sm:p-4 md:p-5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 transition-all duration-200 shadow-xl">
      
      {/* Left Section: Thumbnail & Info */}
      <div className="flex items-center gap-3.5 sm:gap-5 flex-1 min-w-0">
        
        {/* Exercise Thumbnail */}
        <div className="relative w-24 h-16 sm:w-28 sm:h-20 flex-shrink-0 rounded-xl overflow-hidden bg-[#181a24] border border-gray-800/90">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            sizes="(max-width: 640px) 96px, 112px"
            className="object-cover"
          />
        </div>

        {/* Text & Stats */}
        <div className="flex flex-col justify-center min-w-0 flex-1">
          <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white truncate">
            {exercise.name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-gray-400 mt-0.5">
            {exercise.equipment}
          </p>

          {/* Stats Bar */}
          <div className="flex items-center gap-3 sm:gap-4 mt-2 text-xs font-semibold text-gray-300">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#a3e635]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
              <span>{exercise.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#a3e635]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 23c-4.97 0-9-3.58-9-8 0-4.19 3.25-7.79 6.25-10.79.41-.41 1.09-.41 1.5 0 .2.2.3.47.3.75 0 2.21 1.79 4 4 4s4-1.79 4-4c0-.28.1-.55.3-.75.41-.41 1.09-.41 1.5 0C18.75 7.21 22 10.81 22 15c0 4.42-4.03 8-9 8z" />
              </svg>
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5 text-[#a3e635]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Action Controls */}
      <div className="flex items-center justify-end gap-2.5 sm:gap-3 pt-3 md:pt-0 border-t md:border-t-0 border-gray-800/60 flex-shrink-0">
        
        {/* View Details Button */}
       <Link href={`/FitLogs/${exercise.id}`}>
        <button
        //   onClick={onViewDetails}
          className="border border-gray-700/80 hover:border-gray-500 hover:bg-gray-800/40 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap active:scale-95"
        >
          View Details
        </button>
       </Link>

        {/* Mark as Done Button */}
        <button
        //   onClick={onMarkAsDone}
          className="bg-[#a3e635] hover:bg-[#8ee025] text-black font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full flex items-center gap-1.5 transition-all duration-200 shadow-md shadow-[#a3e635]/10 whitespace-nowrap active:scale-95"
        >
          <svg className="w-4 h-4 text-black stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>Mark as Done</span>
        </button>

        {/* Delete / Dismiss Button */}
        <button
        //   onClick={onRemove}
          className="p-1.5 sm:p-2 text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
          aria-label="Remove item"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

      </div>

    </div>
  );
};

export default Listcard;