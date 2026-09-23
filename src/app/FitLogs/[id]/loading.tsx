import React from 'react';

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#07080a] text-white flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start animate-pulse">
        
        {/* Left Column: Image Skeleton with Neon Spinner */}
        <div className="lg:col-span-6 w-full relative aspect-square sm:aspect-[4/3] lg:aspect-[4/5] rounded-3xl bg-[#12141c] border border-gray-800/80 overflow-hidden flex items-center justify-center shadow-2xl">
          <div className="relative flex items-center justify-center">
            {/* Glowing outer pulse ring */}
            <div className="absolute w-20 h-20 rounded-full border-2 border-[#a3e635]/30 animate-ping" />
            {/* Inner neon spinner */}
            <div className="w-12 h-12 rounded-full border-4 border-[#a3e635]/20 border-t-[#a3e635] animate-spin" />
          </div>
        </div>

        {/* Right Column: Details & Specs Table Skeleton */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Title & Description Skeleton */}
          <div className="space-y-3">
            <div className="h-10 sm:h-12 bg-gray-800/70 rounded-xl w-3/4" />
            <div className="h-4 bg-gray-800/50 rounded-lg w-full" />
            <div className="h-4 bg-gray-800/50 rounded-lg w-2/3" />
          </div>

          {/* Muscle Group Badges Skeleton */}
          <div className="flex gap-2.5">
            <div className="h-7 w-20 bg-[#a3e635]/20 border border-[#a3e635]/30 rounded-full" />
            <div className="h-7 w-20 bg-[#a3e635]/20 border border-[#a3e635]/30 rounded-full" />
          </div>

          {/* Specs Table Skeleton */}
          <div className="bg-[#12141c] border border-gray-800/80 rounded-2xl overflow-hidden divide-y divide-gray-800/60 p-1 shadow-lg">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3.5">
                <div className="h-3.5 bg-gray-800/60 rounded-md w-24" />
                <div className="h-3.5 bg-gray-700/60 rounded-md w-16" />
              </div>
            ))}
          </div>

          {/* Instructions List Skeleton */}
          <div className="space-y-3 mt-1">
            <div className="h-5 bg-gray-800/70 rounded-md w-32" />
            <div className="space-y-2.5">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-5 h-4 bg-gray-800/50 rounded-md" />
                  <div className="h-4 bg-gray-800/50 rounded-md flex-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800/60">
            <div className="h-12 w-48 bg-[#a3e635]/30 rounded-xl" />
            <div className="h-12 w-36 bg-gray-800/60 rounded-xl" />
          </div>

        </div>

      </div>
    </main>
  );
}
