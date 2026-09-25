import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="bg-[#14161d] rounded-3xl p-6 sm:p-10 lg:p-14 border border-gray-800/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative overflow-hidden shadow-2xl">
        <div className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6">
          <span className="text-[#a3e635] text-xs sm:text-sm font-black uppercase tracking-wider">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.05]">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <Link
            href="/FitLogs"
            className="mt-2 inline-block bg-[#a3e635] text-black font-extrabold px-6 py-3.5 rounded-md text-xs sm:text-sm tracking-wider uppercase hover:bg-[#8ee025] transition-colors duration-200 shadow-lg shadow-[#a3e635]/10"
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <div className="relative w-full max-w-md aspect-square rounded-xl   p-6 flex items-center justify-center overflow-hidden ">
            {/* Banner image from public folder */}
            <Image
              src="/banner.png"
              alt="Preacher Curl Exercise Machine"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
              className="object-contain p-4 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
