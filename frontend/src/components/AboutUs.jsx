import React from 'react';
import { Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
     
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Main content with speech bubble */}
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
          {/* Speech bubble section */}
          <div></div>
          <div className="relative mt-20 lg:mt-0">
            {/* Large speech bubble */}
            <div
              className="relative bottom-20 lg:bottom-0 rounded-[40px] px-8 py-7 md:max-w-xs"
              style={{
                backgroundColor: '#F6CBCB',
                boxShadow: '0 10px 40px rgba(211, 47, 47, 0.1)',
              }}
            >
              <div className="text-white">
                <h3 className="text-3xl font-semibold text-black" style={{ fontFamily: 'Space Grotesk' }}>
                  Hi There!
                </h3>
                <p className="text-xl font-medium text-black">We are Minnerva</p>
              
              </div>
              {/* Speech bubble tail */}
              <div
                className="absolute -bottom-4 lg:-bottom-6 left-12"
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '30px solid transparent',
                  borderRight: '30px solid transparent',
                  borderTop: '30px solid #F6CBCB',
                }}
              />
            </div>
            {/* Small floating bubbles */}
            <div
              className="absolute bottom-10 lg:-bottom-12 left-8 w-6 h-6 rounded-full"
              style={{ backgroundColor: '#BE2026', opacity: 0.2 }}
            />
            <div
              className="absolute bottom-8 lg:-bottom-16 left-4 w-4 h-4 rounded-full"
              style={{ backgroundColor: '#BE2026', opacity: 0.1 }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-20">
          {/* Why amazing brands choose us */}
          <div className="space-y-6">
            <h1
              className="text-xl sm:text-3xl xl:text-4xl font-bold text-black mb-8 sm:leading-tight tracking-tighter bg-gradient-to-r from-[#EE2524] via-[#BE2026] to-black bg-clip-text text-transparent"
              style={{ fontFamily: 'Space Grotesk' }}
            >a bit about us
            </h1> 
            <p className="text-xl font-semibold" style={{ color: '#2D3436' }}>
              The amazing brands that work with us have discovered us for one (often more) of these 3 reasons ··· Like you, when they had to
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="border-s-4 border-black bg-gray-100 flex items-center justify-center flex-shrink-0 px-3 py-1"
                ><p className="text-lg text-black">
                  Do something incredible···
                </p>
                </div>
                
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="border-s-4 border-black bg-gray-100 flex items-center justify-center flex-shrink-0 px-3 py-1"
                ><p className="text-lg text-black">
                  Re-think like a Start-up and move fast
                </p>
                </div>
                
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="border-s-4 border-black bg-gray-100 flex items-center justify-center flex-shrink-0 px-3 py-1"
                ><p className="text-lg text-black">
                  Cut the noise and be relevant
                </p>
                </div>
                
              </div>
            </div>
          </div>
          <div></div>
        </div>
        

        {/* Company stats section with playful layout */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2"
              style={{ border: '3px solid #FFF3E0' }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#BE2026', fontFamily: 'Space Grotesk' }}>
                5+
              </div>
              <p className="text-lg font-semibold" style={{ color: '#2D3436' }}>Years Young</p>
              <p className="text-sm mt-2" style={{ color: '#636E72' }}>Innovation Startup with unfair energies and curiosity</p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2"
              style={{ border: '3px solid #FFF3E0' }}
            >
              <div className="text-5xl font-bold mb-2" style={{ color: '#EF5350', fontFamily: 'Space Grotesk' }}>
                80+
              </div>
              <p className="text-lg font-semibold" style={{ color: '#2D3436' }}>Projects</p>
              <p className="text-sm mt-2" style={{ color: '#636E72' }}>With Fortune 500 companies</p>
            </div>

            <div
              className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition-all hover:-translate-y-2"
              style={{ border: '3px solid #FFF3E0' }}
            >
              <div className="flex justify-center mb-2">
                <Sparkles size={48} style={{ color: '#FFB74D' }} />
              </div>
              <p className="text-lg font-semibold" style={{ color: '#2D3436' }}>Busy Heroes</p>
              <p className="text-sm mt-2" style={{ color: '#636E72' }}>Researchers, Marketers & Directors with dangerous thoughts</p>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 sm:text-center">
          <div
            className="lg:flex lg:flex-row items-center gap-2 lg:gap-4"
          >
            <p className="text-2xl xl:text-3xl text-center font-bold" style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}>
              At the end of the day - it is all about{' '}
              <span style={{ color: '#BE2026' }}>adapting (fast)</span>
            </p>
            <a
            href="#contact"
            className="inline-block mt-2 sm:mt-4 lg:mt-0 px-4 lg:px-8 py-4 text-center rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
            style={{ backgroundColor: '#BE2026', color: '#FFFFFF' }}
            >
              Tell me more...
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
