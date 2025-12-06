import React from 'react';
import { Sparkles, Zap, TrendingUp, ChevronDown } from 'lucide-react';

const Hero = () => {
  // useEffect(() => {
  //   // Parallax effect
  //   const handleScroll = () => {
  //     const scrolled = window.scrollY;
  //     const heroContent = document.querySelector('.hero-content');
  //     if (heroContent) {
  //       heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
  //       heroContent.style.opacity = 1 - scrolled / 600;
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const ctaButtons = [
    {
      label: 'INNOVATE',
      icon: Sparkles,
      color: '#FCF2FF',
      subtitle: 'Stay ahead with smart insights',
      href: '#innovate',
    },
    {
      label: 'DIFFERENTIATE',
      icon: TrendingUp,
      color: '#FFF2E8',
      subtitle: 'Stand out in crowded markets',
      href: '#differentiate',
    },
    {
      label: 'MOVE FAST',
      icon: Zap,
      color: '#FFFDE3',
      subtitle: 'Beat competition to market',
      href: '#move-fast',
    },
  ];

  return (
    <section id="hero" className="lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Collage elements (Innocent style) - more prominent
      #BE2026
      style={{ backgroundColor: '#FFF9F5' }} */}
      {/* <div
        className="collage-block"
        style={{
          width: '400px',
          height: '300px',
          backgroundColor: '#FFB74D',
          top: '15%',
          left: '8%',
          transform: 'rotate(-15deg)',
          opacity: 0.2,
        }}
      />
      <div
        className="collage-block"
        style={{
          width: '300px',
          height: '350px',
          backgroundColor: '#EF5350',
          bottom: '10%',
          right: '10%',
          transform: 'rotate(12deg)',
          opacity: 0.15,
        }}
      />
      <div
        className="collage-block"
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#BE2026',
          top: '40%',
          right: '5%',
          transform: 'rotate(-8deg)',
          opacity: 0.1,
        }}
      /> */}

      {/* Hero Content */}
      <div className="hero-content z-10 text-center px-4 sm:px-6 lg:px-0 lg:max-w-full lg:mx-auto pt-20 sm:pt-40 lg:py-32">
        <h1
          className="text-5xl sm:text-6xl xl:text-7xl font-bold text-black mb-8 leading-tight tracking-tighter"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          You discovered us for a reason.<h1 className='bg-gradient-to-r from-[#EE2524] via-[#BE2026] to-black bg-clip-text text-transparent'>Which one is it?</h1>
        </h1>  
        
        

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
          {ctaButtons.map((cta, index) => {
            const Icon = cta.icon;
            return (
              <a
                key={index}
                href={cta.href}
                className="group relative w-full sm:w-64 p-6 rounded-3xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-sm"
                style={{
                  backgroundColor: cta.color,
                  color: '#FFFFFF',
                  border: '3px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <div className="flex flex-col">
                  <div className='flex justify-between'>
                    <h2 className='text-left text-black'>{cta.label}</h2>
                    <Icon size={32} className="mb-2 text-black" />
                  </div>
                  <span className="text-left text-black text-xs font-normal mt-2 opacity-90">{cta.subtitle}</span>
                </div>
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{
                    boxShadow: `0 0 30px ${cta.color}`,
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>

      {/* Scroll Indicator - Fixed positioning */}
      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown size={40} style={{ color: '#BE2026' }} />
        <p className="text-sm mt-2" style={{ color: '#636E72' }}>Scroll to explore</p>
      </div> */}
    </section>
  );
};

export default Hero;
