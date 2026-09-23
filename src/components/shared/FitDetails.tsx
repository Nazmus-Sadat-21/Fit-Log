import { Exercise } from "@/types/type";
import Image from "next/image";
import React from "react";

export interface ExerciseCardProps {
  exercise: Exercise;
}

const FitDetails = ({ exercise }: ExerciseCardProps) => {
  // Construct specs array directly from the exercise JSON object
  const specs = [
    { label: "EQUIPMENT", value: exercise.equipment },
    { label: "DIFFICULTY", value: exercise.difficulty },
    { label: "SETS", value: exercise.sets },
    { label: "REPS", value: exercise.reps },
    { label: "DURATION", value: `${exercise.duration} min` },
    { label: "CALORIES", value: `${exercise.caloriesBurned} kcal` },
    { label: "RATING", value: exercise.rating },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-[#07080a] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Exercise Media Preview */}
        <div className="lg:col-span-6 w-full relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#12141c] border border-gray-800/80 shadow-2xl">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>

        {/* Right Side: Details & Actions */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Header & Title */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {exercise.name}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-2">
              {exercise.description}
            </p>
          </div>

          {/* Muscle Group Badges */}
          <div className="flex flex-wrap gap-2">
            {exercise.muscleGroups?.map((muscle, idx) => (
              <span
                key={idx}
                className="bg-[#a3e635] text-black font-black text-xs tracking-wider uppercase px-3.5 py-1 rounded-full"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Specs Table */}
          <div className="bg-[#12141c] border border-gray-800/80 rounded-2xl overflow-hidden divide-y divide-gray-800/60 shadow-lg">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-5 py-3 text-xs sm:text-sm"
              >
                <span className="text-gray-400 uppercase font-bold tracking-wider">
                  {item.label}
                </span>
                <span className="text-white font-bold tracking-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Instructions Section */}
          <div className="mt-2">
            <h2 className="text-lg font-black uppercase tracking-wider text-white mb-3">
              INSTRUCTIONS
            </h2>
            <ol className="space-y-3 text-gray-300 text-sm leading-relaxed">
              {exercise.instructions?.map((step, idx) => (
                <li key={idx} className="flex gap-3 items-start">
                  <span className="font-bold text-gray-500 min-w-[20px]">
                    {idx + 1}.
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800/60">
            {/* Add to today's plan Button */}
            <button className="bg-[#a3e635] hover:bg-[#8ee025] text-black font-extrabold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2.5 transition-all duration-200 shadow-lg shadow-[#a3e635]/10 active:scale-95">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
              </svg>
              <span>Add to today's plan</span>
            </button>

            {/* Save for later Button */}
            <button className="border border-gray-700/80 hover:border-gray-500 hover:bg-gray-800/40 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2.5 transition-all duration-200 active:scale-95">
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

        </div>

      </div>
    </section>
  );
};

export default FitDetails;