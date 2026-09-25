"use client"
import { FitLogContext } from '@/context/FitLogcontext';
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';

export default function NotFound() {
  const {setActiveTab} = useContext(FitLogContext);
  return (
    <main className="min-h-screen bg-[#07080a] text-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        
        {/* Error Badge */}
        <span className="inline-block bg-[#a3e635]/10 text-[#a3e635] border border-[#a3e635]/30 text-[11px] sm:text-xs font-black tracking-widest uppercase px-3.5 py-1 rounded-full mb-6">
          ERROR 404
        </span>

        {/* Big 404 Header with Neon Glow Effect */}
        <div className="relative mb-2">
          <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-700 tracking-tighter leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 bg-[#a3e635]/15 blur-3xl rounded-full -z-10" />
        </div>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
          EXERCISE NOT FOUND
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-8">
          The lift or page you are searching for doesn't exist, was removed, or was typed incorrectly.
        </p>

        {/* Action Button */}
        <Link
         onClick={()=>setActiveTab("workouts")}
          href="/"
          className="bg-[#a3e635] hover:bg-[#8ee025] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg shadow-[#a3e635]/10 active:scale-95"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <span>RETURN TO LIBRARY</span>
        </Link>

      </div>
    </main>
  );
}