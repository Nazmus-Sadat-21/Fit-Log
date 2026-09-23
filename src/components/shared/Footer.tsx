import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#08090c] border-t border-gray-800/60 py-6 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
        
        {/* Logo Section */}
        <Link 
          href="/" 
          className="flex items-center gap-2.5 font-black text-xl tracking-wider text-white hover:opacity-90 transition-opacity"
        >
          {/* Neon Dumbbell Icon */}
          <Image src="/logo.png" alt='logo' width={30} height={30} className='mr-1'></Image>
          <span>FITLOG</span>
        </Link>

        {/* Copyright & Tagline */}
        <p className="text-gray-400 text-xs sm:text-sm font-normal text-center sm:text-right tracking-normal">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
}