'use client';

import React from 'react';

export function BrandLogo() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
        <div className="flex flex-col items-center">
          <div className="relative h-28 w-40 sm:h-32 sm:w-44 md:h-40 md:w-56 lg:h-44 lg:w-64">
            <img src="/ca-logo.png" alt="CA India" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="h-px w-28 bg-[#a34e24] md:h-36 md:w-px lg:h-40" />

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1
            className="font-[var(--font-body)] font-black leading-none text-[#a34e24]"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 4.5rem)', letterSpacing: '0.04em' }}
          >
            AVPC &amp; CO LLP
          </h1>
          <h2
            className="mt-6 font-[var(--font-body)] font-black leading-none text-[#a34e24]"
            style={{ fontSize: 'clamp(1.35rem, 4.8vw, 3rem)', letterSpacing: '0.12em' }}
          >
            CHARTERED ACCOUNTANTS
          </h2>
        </div>
      </div>

      <div
        className="mt-14 text-center font-[var(--font-body)] text-[1rem] font-medium uppercase text-[#a34e24] sm:text-[1.15rem] md:mt-20 md:text-[1.45rem] lg:text-[1.75rem]"
        style={{ letterSpacing: '0.16em' }}
      >
        PUNE | KOLHAPUR
      </div>
    </div>
  );
}
