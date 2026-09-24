"use client";
import { useContext, useState } from "react";
import Link from "next/link";
import Summary from "@/components/MyPlan/Summary";
import { FitLogContext } from "@/context/FitLogcontext";
import Listcard from "@/components/MyPlan/Listcard";
import { Exercise } from "@/types/type";

export default function MyPlanPage() {
  const { today, save } = useContext(FitLogContext) as {
    today: Exercise[];
    save: Exercise[];
  };

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");
  const [sortBy, setSortBy] = useState<string>("Duration");

  // 1. Select list based on active tab
  const rawList = activeTab === "today" ? today || [] : save || [];

  // 2. Sort the active list based on the dropdown choice
  const sortedList = [...rawList].sort((a, b) => {
    if (sortBy === "Duration") return (b.duration || 0) - (a.duration || 0);
    if (sortBy === "Calories") return (b.caloriesBurned || b.calories || 0) - (a.caloriesBurned || a.calories || 0);
    if (sortBy === "Rating") return (b.rating || 0) - (a.rating || 0);
    return 0;
  });

  return (
    <main className="min-h-screen bg-[#07080a] text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-2">
            MY PLAN
          </h1>
          <p className="text-gray-400 text-sm sm:text-base font-medium">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Stats Summary Box */}
      <div>
        {
         activeTab === "today" ? <Summary exercise={today} /> : <Summary exercise={save}  />
        }
      </div>
        

        {/* Navigation Tabs & Sorting Controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Interactive Today's Plan / Saved Tab Switcher */}
          <div className="bg-[#12141c] border border-gray-800/80 p-1.5 rounded-2xl flex items-center">
            <button
              onClick={() => setActiveTab("today")}
              className={`cursor-pointer mr-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                activeTab === "today"
                  ? "bg-[#a3e635] text-black shadow-lg shadow-[#a3e635]/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/40"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`cursor-pointer px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                activeTab === "saved"
                  ? "bg-[#a3e635] text-black shadow-lg shadow-[#a3e635]/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-800/40"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-medium text-gray-400">
              Sort By
            </span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#12141c] border border-gray-800/80 text-white text-xs sm:text-sm font-bold py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:border-[#a3e635] cursor-pointer"
              >
                <option value="Duration">Duration</option>
                <option value="Calories">Calories</option>
                <option value="Rating">Rating</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

        </div>

        {/* Tab Content Area */}
        {sortedList.length > 0 ? (
          /* Cards View: Full-width stack with vertical gap */
          <div className="flex flex-col gap-4 w-full">
            {sortedList.map((exc, ind) => (
              <Listcard key={exc.id || ind} exercise={exc} />
            ))}
          </div>
        ) : (
          /* Empty State View: Dashed container centered */
          <div className="bg-[#0e1017]/60 border border-dashed border-gray-800/90 rounded-3xl p-10 sm:p-20 flex flex-col items-center justify-center text-center min-h-[340px]">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white mb-2">
              {activeTab === "today" ? "TODAY'S WORKOUT PLAN" : "NOTHING HERE YET"}
            </h2>
            
            <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6">
              {activeTab === "today"
                ? "Complete your daily targets to hit your fitness goals."
                : "Browse the library and add a lift to get today moving."}
            </p>

            <Link
              href="/"
              className="bg-[#a3e635] hover:bg-[#8ee025] text-black font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-[#a3e635]/10 active:scale-95"
            >
              {activeTab === "today" ? "Start Workout" : "Go to workouts"}
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}
