import React from 'react';
// import { Sparkles, Zap, TrendingUp } from 'lucide-react';
import Navbar from './Header';
import SmoothScrollText from './ScrollTextAnimation';


const Hero = () => {
const ctaButtons = [
{ label: 'INNOVATE'},
{ label: 'DIFFERENTIATE' },
{ label: 'MOVE FAST' },
// { label: 'INNOVATE', icon: Sparkles },
// { label: 'DIFFERENTIATE', icon: TrendingUp },
// { label: 'MOVE FAST', icon: Zap },
];


return (
  <section id="hero" className="overflow-hidden">
  


  <div className="relative min-h-screen flex items-center justify-center">

    {/* Background image */}
    <div
      className="hidden lg:block absolute inset-0 bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/images/hero-minerva.webp')",
        backgroundSize: "100% 100%",     // full width, height adjusts
      }}
    />
    {/* Mobile/Tablet Image (below lg) */}
    <img
      src="/images/hero-minerva.webp"
      alt="hero-bg"
      className="lg:hidden absolute inset-0 w-fit h-full object-cover"
    />

    {/* Centered Content */}
    <div className="relative mb-32 lg:mb-20 z-10 flex flex-col justify-center text-left px-4 sm:px-6 lg:px-0 lg:max-w-xl mx-auto">
      <Navbar />
      <h1 className='text-xl sm:text-3xl text-[#BE2026] font-semibold'>
        There are no accidents..
      </h1>

      <h1 
        className="text-xl sm:text-3xl font-bold text-black sm:leading-tight tracking-tighter"
        style={{ fontFamily: "Space Grotesk" }}>
        You discovered us for a reason,
      </h1>

      <div className='flex flex-row items-center gap-2 sm:gap-6 mt-2 lg:mt-3 mb-4 lg:mb-6'>
        <h1 className='text-xl sm:text-3xl font-bold text-black pb-2 max-w-max'>
          Which one is it?
        </h1>

        <SmoothScrollText
          items={ctaButtons.map((cta, index) => (
            <>
              <h2 className="text-left text-[#BE2026] font-bold">{cta.label}</h2>
              {/* <cta.icon size={28} className="text-[#BE2026]" /> */}
            </>
          ))}
        />
      </div>
    </div>

  </div>

  </section>
);
};


export default Hero;