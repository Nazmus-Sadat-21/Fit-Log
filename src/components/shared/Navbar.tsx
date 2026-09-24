"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FitLogContext } from "@/context/FitLogcontext";

export default function Navbar() {
  const { today } = useContext(FitLogContext);
  const { save } = useContext(FitLogContext);
  const pathname = usePathname();
  // Internal state as fallback for active active toggle
  const [activeTab, setActiveTab] = useState<"workouts" | "myplan">("workouts");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync with route or fallback to state
  const isWorkoutsActive = pathname === "/workouts" || activeTab === "workouts";
  const isMyPlanActive = pathname === "/my-plan" || activeTab === "myplan";

  return (
    <header className="bg-[#0b0d11] border-b border-gray-800/60 sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-black text-2xl tracking-wider text-white"
            >
              {/* Dumbbell Icon */}
              <Image src="/logo.png" alt="logo" width={30} height={30}></Image>
              <span className="ml-[1px]">FITLOG</span>
            </Link>
          </div>

          {/* Center Navigation Pill Container (Desktop & Tablet) */}
          <div className="hidden md:flex items-center bg-[#171a21] p-1.5 rounded-full border border-gray-800/80">
            <Link
              href="/"
              onClick={() => setActiveTab("workouts")}
              className={`px-6 py-2 rounded-full text-sm font-extrabold transition-all duration-200 ${
                isWorkoutsActive
                  ? "bg-[#a3e635] text-black shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              onClick={() => setActiveTab("myplan")}
              className={`px-6 py-2 rounded-full text-sm font-extrabold transition-all duration-200 ${
                isMyPlanActive
                  ? "bg-[#a3e635] text-black shadow-md"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Right Badges Section */}
          <div className="hidden sm:flex items-center gap-6 text-sm font-bold text-gray-300">
            <Link href="/my-plan" onClick={() => setActiveTab("myplan")}>
              <div className="flex items-center gap-2 cursor-pointer">
                <span>Plan</span>
                <span className="flex items-center justify-center bg-[#a3e635] text-black text-xs font-black w-6 h-6 rounded-full">
                  {today.length}
                </span>
              </div>
            </Link>
            <Link href="/my-plan" onClick={() => setActiveTab("myplan")}>
              <div className="flex items-center gap-2 cursor-pointer">
                <span>Saved</span>
                <span className="flex items-center justify-center bg-[#1e222d] text-gray-300 text-xs font-black w-6 h-6 rounded-full border border-gray-700">
                  {save.length}
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#12141c] border-b border-gray-800 px-4 pt-3 pb-6 space-y-4">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => {
                setActiveTab("workouts");
                setIsMobileMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold ${
                isWorkoutsActive
                  ? "bg-[#a3e635] text-black"
                  : "text-gray-300 bg-[#1a1d26]"
              }`}
            >
              Workouts
            </Link>
            <Link
              href="/my-plan"
              onClick={() => {
                setActiveTab("myplan");
                setIsMobileMenuOpen(false);
              }}
              className={`px-4 py-2.5 rounded-lg text-sm font-bold ${
                isMyPlanActive
                  ? "bg-[#a3e635] text-black"
                  : "text-gray-300 bg-[#1a1d26]"
              }`}
            >
              My Plan
            </Link>
          </div>

          {/* Mobile Badges */}
          <div className="flex items-center gap-6 pt-2 text-sm font-bold text-gray-300 border-t border-gray-800">
            <Link href="/my-plan">
              <div className="flex items-center gap-2 cursor-pointer">
                <span>Plan</span>
                <span className="flex items-center justify-center bg-[#a3e635] text-black text-xs font-black w-6 h-6 rounded-full">
                  {today.length}
                </span>
              </div>
            </Link>

            <Link href="/my-plan">
              <div className="flex items-center gap-2 cursor-pointer">
                <button className="cursor-pointer">Saved</button>
                <span className="flex items-center justify-center bg-[#1e222d] text-gray-300 text-xs font-black w-6 h-6 rounded-full border border-gray-700">
                  {save.length}
                </span>
              </div>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
