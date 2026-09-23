import { Exercise } from "@/types/type";
import FitCard from "./shared/FitCard";

export interface ExerciseCardProps {
  exercise: Exercise[];
}

const data = async (): Promise<Exercise[]> => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data as Exercise[];
};

const FitLogs = async () => {
  const FitData: Exercise[] = await data();

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#07080a] min-h-screen">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-block bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/30 text-[11px] sm:text-xs font-black tracking-widest uppercase px-3.5 py-1 rounded-full mb-3">
            EXERCISE CATALOG
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-3">
            THE LIBRARY
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-medium max-w-md">
            Twelve lifts covering every major muscle group
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
          {FitData.map((exercise: Exercise) => (
            <FitCard key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FitLogs;
