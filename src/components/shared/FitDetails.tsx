import { Exercise } from "@/types/type";
import Image from "next/image";
import React from "react";
import TodayPlan from "../buttons/TodayPlan";
import Save from "../buttons/Save";

export interface ExerciseCardProps {
  exercise: Exercise;
}

const FitDetails = ({ exercise }: ExerciseCardProps) => {
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

        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              {exercise.name}
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-2">
              {exercise.description}
            </p>
          </div>

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

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-800/60">
            {/* Add to today's plan Button */}
            <TodayPlan exercise={exercise}></TodayPlan>

            <Save exercise={exercise}></Save>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitDetails;
