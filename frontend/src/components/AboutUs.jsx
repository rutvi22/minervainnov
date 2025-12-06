import React from 'react';
import { Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Background decorative clouds */}
      <svg className="absolute top-10 left-10 opacity-20" width="120" height="80" viewBox="0 0 120 80">
        <path d="M20,60 Q10,40 30,30 Q40,20 50,30 Q60,25 70,30 Q80,35 85,45 Q90,55 80,60 Z" fill="none" stroke="#BE2026" strokeWidth="2"/>
      </svg>
      <svg className="absolute top-40 right-10 opacity-20" width="100" height="70" viewBox="0 0 100 70">
        <path d="M15,50 Q10,35 25,25 Q35,18 45,25 Q52,22 60,28 Q70,35 65,50 Z" fill="none" stroke="#FFB74D" strokeWidth="2"/>
      </svg>
      <svg className="absolute bottom-20 left-1/4 opacity-15" width="90" height="60" viewBox="0 0 90 60">
        <path d="M10,45 Q8,30 20,22 Q30,15 40,22 Q48,18 55,25 Q62,32 58,45 Z" fill="none" stroke="#EF5350" strokeWidth="2"/>
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with decorative lines */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-1" style={{ backgroundColor: '#BE2026', borderRadius: '2px' }}></div>
            <div className="w-8 h-1" style={{ backgroundColor: '#EF5350', borderRadius: '2px' }}></div>
            <div className="w-4 h-1" style={{ backgroundColor: '#FFB74D', borderRadius: '2px' }}></div>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
          >
            a bit about <span style={{ color: '#BE2026' }}>us</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-4 h-1" style={{ backgroundColor: '#FFB74D', borderRadius: '2px' }}></div>
            <div className="w-8 h-1" style={{ backgroundColor: '#EF5350', borderRadius: '2px' }}></div>
            <div className="w-16 h-1" style={{ backgroundColor: '#BE2026', borderRadius: '2px' }}></div>
          </div>
        </div>

        {/* Main content with speech bubble */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Speech bubble section */}
          <div className="relative">
            {/* Large speech bubble */}
            <div
              className="relative rounded-[40px] p-12"
              style={{
                backgroundColor: '#BE2026',
                boxShadow: '0 10px 40px rgba(211, 47, 47, 0.2)',
              }}
            >
              <div className="text-white">
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk' }}>
                  Hi There!
                </h3>
                <p className="text-xl font-semibold mb-2">We are Minnerva</p>
                <p className="text-lg opacity-90">
                  The intelligence partner for ambitious leaders who refuse to wait.
                </p>
              </div>
              {/* Speech bubble tail */}
              <div
                className="absolute -bottom-6 left-12"
                style={{
                  width: '0',
                  height: '0',
                  borderLeft: '30px solid transparent',
                  borderRight: '30px solid transparent',
                  borderTop: '30px solid #BE2026',
                }}
              />
            </div>
            {/* Small floating bubbles */}
            <div
              className="absolute -bottom-12 left-8 w-6 h-6 rounded-full"
              style={{ backgroundColor: '#BE2026', opacity: 0.6 }}
            />
            <div
              className="absolute -bottom-16 left-4 w-4 h-4 rounded-full"
              style={{ backgroundColor: '#BE2026', opacity: 0.4 }}
            />
          </div>

          {/* Why amazing brands choose us */}
          <div className="space-y-6">
            <p className="text-xl font-semibold" style={{ color: '#2D3436' }}>
              Amazing brands choose us because:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#BE2026' }}
                >
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-lg" style={{ color: '#636E72' }}>
                  They had to <strong style={{ color: '#2D3436' }}>do something incredible</strong>. Like you, when they had to.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#EF5350' }}
                >
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-lg" style={{ color: '#636E72' }}>
                  They needed to <strong style={{ color: '#2D3436' }}>re-think like a Start-up and move fast</strong>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{ backgroundColor: '#FFB74D' }}
                >
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-lg" style={{ color: '#636E72' }}>
                  They wanted to <strong style={{ color: '#2D3436' }}>cut the noise and be relevant</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company stats section with playful layout */}
        <div className="relative">
          {/* Decorative element - ladder climber concept */}
          <svg className="absolute right-0 top-0 opacity-10" width="200" height="200" viewBox="0 0 200 200">
            <line x1="80" y1="20" x2="80" y2="180" stroke="#BE2026" strokeWidth="3"/>
            <line x1="120" y1="20" x2="120" y2="180" stroke="#BE2026" strokeWidth="3"/>
            <line x1="80" y1="40" x2="120" y2="40" stroke="#BE2026" strokeWidth="2"/>
            <line x1="80" y1="80" x2="120" y2="80" stroke="#BE2026" strokeWidth="2"/>
            <line x1="80" y1="120" x2="120" y2="120" stroke="#BE2026" strokeWidth="2"/>
            <line x1="80" y1="160" x2="120" y2="160" stroke="#BE2026" strokeWidth="2"/>
          </svg>

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
        <div className="mt-20 text-center">
          <div
            className="inline-block bg-white rounded-3xl px-12 py-8 shadow-lg"
            style={{ border: '3px solid #BE2026' }}
          >
            <p className="text-2xl sm:text-3xl font-bold" style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}>
              At the end of the day - it is all about{' '}
              <span style={{ color: '#BE2026' }}>adapting (fast)</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
            style={{ backgroundColor: '#BE2026', color: '#FFFFFF' }}
          >
            Tell me more...
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
