import React from "react";

const loading = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#07080a] min-h-screen">
      {/* Header Skeleton */}
      <div className="flex flex-col items-center text-center mb-10 animate-pulse">
        {/* Pill Tag */}
        <div className="h-6 w-36 bg-[#a3e635]/20 border border-[#a3e635]/30 rounded-full mb-3" />

        {/* Title */}
        <div className="h-10 sm:h-14 lg:h-16 w-64 sm:w-80 bg-gray-800/70 rounded-2xl mb-3" />

        {/* Subtitle */}
        <div className="h-4 sm:h-5 w-72 sm:w-96 bg-gray-800/50 rounded-lg" />
      </div>

      {/* Exercise Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center animate-pulse">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-[#12141c] border border-gray-800/80 rounded-2xl overflow-hidden flex flex-col w-full max-w-sm"
          >
            {/* Image Skeleton */}
            <div className="w-full aspect-[16/10] bg-gray-800/60" />

            {/* Content Skeleton */}
            <div className="p-5 flex flex-col flex-grow justify-between">
              <div>
                {/* Badges Skeleton */}
                <div className="flex gap-2 mb-3">
                  <div className="h-5 w-16 bg-[#a3e635]/20 border border-[#a3e635]/30 rounded-full" />
                  <div className="h-5 w-14 bg-[#a3e635]/20 border border-[#a3e635]/30 rounded-full" />
                </div>

                {/* Title Skeleton */}
                <div className="h-6 w-3/4 bg-gray-800/70 rounded-md mb-2" />

                {/* Subtitle / Equipment Skeleton */}
                <div className="h-3.5 w-1/2 bg-gray-800/50 rounded-md" />
              </div>

              {/* Bottom Info Bar Skeleton */}
              <div className="mt-5 py-3 px-3.5 border border-gray-800/90 rounded-lg bg-[#181a24]/50 flex items-center justify-between">
                <div className="h-3.5 w-14 bg-gray-800/60 rounded-md" />
                <div className="h-3.5 w-16 bg-gray-800/60 rounded-md" />
                <div className="h-3.5 w-10 bg-gray-800/60 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default loading;
