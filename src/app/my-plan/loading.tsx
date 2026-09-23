import React from 'react';
 function loading() {
  return (
    <main className="min-h-screen bg-[#07080a] text-white px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-7xl mx-auto space-y-8 animate-pulse">
        
        {/* Header Skeleton */}
        <div>
          <div className="h-10 sm:h-12 w-48 sm:w-64 bg-gray-800/70 rounded-xl mb-3" />
          <div className="h-4 sm:h-5 w-72 sm:w-96 bg-gray-800/50 rounded-lg" />
        </div>

        {/* Stats Summary Box Skeleton */}
        <div className="bg-[#0e1017] border border-gray-800/80 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800/70 gap-6 md:gap-0">
            
            {/* Exercises Stat */}
            <div className="md:pr-8 flex flex-col justify-center">
              <div className="h-4 w-20 bg-gray-800/60 rounded-md mb-3" />
              <div className="h-14 sm:h-16 w-12 bg-[#a3e635]/20 rounded-xl" />
            </div>

            {/* Minutes Stat */}
            <div className="md:px-8 pt-4 md:pt-0 flex flex-col justify-center">
              <div className="h-4 w-16 bg-gray-800/60 rounded-md mb-3" />
              <div className="h-14 sm:h-16 w-20 bg-gray-800/70 rounded-xl" />
            </div>

            {/* Calories Stat */}
            <div className="md:pl-8 pt-4 md:pt-0 flex flex-col justify-center">
              <div className="h-4 w-16 bg-gray-800/60 rounded-md mb-3" />
              <div className="h-14 sm:h-16 w-24 bg-gray-800/70 rounded-xl" />
            </div>

          </div>
        </div>

        {/* Navigation Tabs & Sorting Controls Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Tab Switcher Skeleton */}
          <div className="bg-[#12141c] border border-gray-800/80 p-1.5 rounded-2xl flex items-center gap-2">
            <div className="h-9 w-28 bg-[#a3e635]/20 border border-[#a3e635]/30 rounded-xl" />
            <div className="h-9 w-20 bg-gray-800/50 rounded-xl" />
          </div>

          {/* Sort Selector Skeleton */}
          <div className="flex items-center gap-3">
            <div className="h-4 w-14 bg-gray-800/50 rounded-md" />
            <div className="h-10 w-32 bg-[#12141c] border border-gray-800/80 rounded-xl" />
          </div>

        </div>

        {/* Content Area Skeleton */}
        <div className="bg-[#0e1017]/60 border border-dashed border-gray-800/90 rounded-3xl p-10 sm:p-20 flex flex-col items-center justify-center text-center min-h-[340px]">
          <div className="h-7 w-56 bg-gray-800/70 rounded-lg mb-3" />
          <div className="h-4 w-72 sm:w-80 bg-gray-800/50 rounded-md mb-6" />
          <div className="h-11 w-36 bg-[#a3e635]/30 rounded-full" />
        </div>

      </div>
    </main>
  );
}

export default loading