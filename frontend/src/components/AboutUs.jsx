import React from 'react';

export default function AboutSection() {
  return (
    <section className="w-full bg-white pt-8 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full h-[400px] sm:h-[500px] lg:min-h-screen rounded-2xl overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-contain sm:bg-cover sm:bg-center"
            style={{
              backgroundImage: `url('/images/About_Us_Panda.webp')`,
            }}
          >
         </div>

          {/* Text Content - Bottom Right */}
          <div className="absolute -bottom-[7.6rem] sm:bottom-8 sm:right-8 max-w-sm lg:max-w-2xl bg-white sm:bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="space-y-3 text-gray-800">
              <p className="text-lg leading-relaxed flex items-start gap-3">
                <span className="text-black font-bold text-xl flex-shrink-0">→</span>
                <p><span className="font-semibold">5 year young Innovation Startup</span> (with unfair energies & curiosity)</p>
              </p>
              <p className="text-lg leading-relaxed flex items-start gap-3">
                <span className="text-black font-bold text-xl flex-shrink-0">→</span>
                <span className="font-semibold">80+ Projects</span> with Fortune 500
              </p>
              <p className="text-lg leading-relaxed flex items-start gap-3">
                <span className="text-black font-bold text-xl flex-shrink-0">→</span>
                Rubbing shoulders with <span className="font-semibold">Busy/Ambitious Heroes</span>
              </p>
              <p className="text-base leading-relaxed text-gray-600 italic">
                (these are Researchers, Marketers and Directors with dangerous thoughts and unlimited energies/brain power)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-16 lg:mt-20 sm:ms-6 xl:ms-8">
        <p className="text-xl font-semibold" style={{ color: '#2D3436' }}>
            The amazing brands that work with us have discovered us for one (often more) of these 3 reasons ··· <br /> Like you, when they had to
        </p>
        <div className="space-y-3 lg:space-y-0 my-4 lg:mb-8 flex flex-col lg:flex-row lg:items-center lg:gap-6">
            <div className="flex items-start gap-3">
            <div
                className="border-s-4 border-black bg-gray-100 flex items-center justify-center flex-shrink-0 px-3 py-1">
                <p className="text-lg text-black">
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
          <div className="lg:flex lg:flex-row items-center gap-2 lg:gap-4">
            <p className="text-2xl xl:text-3xl font-semibold" style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}>
              At the end of the day - it is all about{' '}
              <span style={{ color: '#BE2026' }}>adapting (fast)</span>
            </p>
            <a
            href="#contact"
            className="inline-block mt-2 sm:mt-4 text-[#BE2026] border border-[#BE2026] lg:mt-0 px-3 lg:px-8 py-2 text-center rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg">
              Tell me more...
            </a>
          </div>
        </div>
    </section>
  );
}