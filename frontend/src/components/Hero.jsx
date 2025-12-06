import React from 'react';
import { Sparkles, Zap, TrendingUp } from 'lucide-react';
import Navbar from './Header';

const Hero = () => {
  
  const ctaButtons = [
    {
      label: 'INNOVATE',
      icon: Sparkles,
      color: '#FCF2FF',
      //subtitle: 'Stay ahead with smart insights',
      href: '#innovate',
    },
    {
      label: 'DIFFERENTIATE',
      icon: TrendingUp,
      color: '#FFF2E8',
      //subtitle: 'Stand out in crowded markets',
      href: '#differentiate',
    },
    {
      label: 'MOVE FAST',
      icon: Zap,
      color: '#FFFDE3',
      //subtitle: 'Beat competition to market',
      href: '#move-fast',
    },
  ];

  return (
    <section id="hero" className="flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#ffe8e8] via-[#ffe2d6] via-50% to-70% to-[#ffeada]">
      <Navbar />
      {/* Collage elements (Innocent style) - more prominent
      #BE2026
      style={{ backgroundColor: '#FFF9F5' }} */}
      
      {/* Hero Content */}
      <div className="px-4 sm:px-6 lg:px-0 lg:max-w-full lg:mx-auto py-28 sm:py-32 lg:py-40">
        <h1 className='text-xl lg:text-3xl mt-8 mb-2 text-[#BE2026] font-semibold text-left'>There are no accidents..</h1>
        <h1
          className="text-5xl sm:text-6xl xl:text-7xl font-bold text-black sm:leading-tight tracking-tighter"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          You discovered us for a reason,</h1>  
        <h1 className='text-5xl sm:text-6xl xl:text-7xl font-bold text-black sm:leading-tight tracking-tighter pb-2 max-w-max bg-gradient-to-r from-[#EE2524] via-[#BE2026] to-black bg-clip-text text-transparent'>
            and it must be one of these..</h1>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center mt-12">
          {ctaButtons.map((cta, index) => {
            const Icon = cta.icon;
            return (
              <a
                key={index}
                href={cta.href}
                className="group w-full sm:w-64 p-6 border border-orange-200 rounded-3xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-sm"
                style={{
                  backgroundColor: cta.color,
                  color: '#FFFFFF',
                  //border: '3px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div className="flex flex-col">
                  <div className='flex justify-between'>
                    <h2 className='text-left text-black'>{cta.label}</h2>
                    <Icon size={32} className=" text-black" />
                  </div>
                  {/* <span className="text-left text-black text-xs font-normal mt-2 opacity-90">{cta.subtitle}</span> */}
                </div>
                
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
