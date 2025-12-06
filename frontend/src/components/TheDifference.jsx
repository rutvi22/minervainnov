import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const TheDifference = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e) => {
    if (e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percentage = (x / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, percentage)));
    }
  };

  const comparisons = [
    { old: '500-page reports', new: 'Decision-ready briefs' },
    { old: 'Data dumps', new: 'Actionable insights' },
    { old: 'Weeks of waiting', new: 'Answers in days' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-4xl sm:text-5xl font-bold text-center mb-6"
          style={{ color: '#2D3436', fontFamily: 'Space Grotesk' }}
        >
          The <span style={{ color: '#BE2026' }}>Minnerva</span> difference
        </h2>
        <p className="text-center text-2xl mb-16" style={{ color: '#636E72' }}>
          Less noise. More signal. Way faster.
        </p>

        {/* Before/After Slider */}
        <div
          className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize"
          style={{ height: '500px' }}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Old Way (Left Side) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-12"
            style={{
              backgroundColor: '#636E72',
              clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            }}
          >
            <h3 className="text-4xl font-bold mb-8 text-white" style={{ fontFamily: 'Space Grotesk' }}>
              Old Way
            </h3>
            <p className="text-xl text-white mb-8 opacity-80">Slow, overwhelming, generic</p>
            <div className="space-y-4 text-center">
              {comparisons.map((item, index) => (
                <div
                  key={index}
                  className="text-2xl font-semibold text-white opacity-60"
                  style={{ textDecoration: 'line-through' }}
                >
                  {item.old}
                </div>
              ))}
            </div>
          </div>

          {/* Minnerva Way (Right Side) */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center p-12"
            style={{ backgroundColor: '#BE2026' }}
          >
            <h3 className="text-4xl font-bold mb-8 text-white" style={{ fontFamily: 'Space Grotesk' }}>
              Minnerva Way
            </h3>
            <p className="text-xl text-white mb-8 opacity-90">Fast, focused, customized</p>
            <div className="space-y-4 text-center">
              {comparisons.map((item, index) => (
                <div key={index} className="text-2xl font-semibold text-white">
                  {item.new}
                </div>
              ))}
            </div>
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl"
            >
              <ArrowRight size={24} style={{ color: '#2D3436' }} />
            </div>
          </div>

          {/* Drag instruction */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold opacity-75">
            ← Drag to compare →
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheDifference;
