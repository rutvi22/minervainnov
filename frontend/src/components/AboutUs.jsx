import React, { useState } from "react";

export default function AboutSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full pt-8 lg:pt-12 pb-8 bg-[#474747]">
      <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">

        {/* LEFT — IMAGE */}
        <div className="overflow-hidden w-full sm:w-2/5 2xl:w-2/6">
          <img
            src="/images/About_Us_Panda-Grey.webp"
            alt="About Us"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT — CONTENT */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-20 px-4 mx-auto container">
          <div className="space-y-3 text-white">

            <p className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-white font-bold text-xl flex-shrink-0">→</span>
              <span>
                <span className="font-semibold">5 year young Innovation Startup</span> (with unfair energies & curiosity)
              </span>
            </p>

            <p className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-white font-bold text-xl flex-shrink-0">→</span>
              <span><span className="font-semibold">80+ Projects</span> with Fortune 500</span>
            </p>

            <p className="text-lg leading-relaxed flex items-start gap-3">
              <span className="text-white font-bold text-xl flex-shrink-0">→</span>
              <span>Rubbing shoulders with <span className="font-semibold">Busy/Ambitious Heroes</span></span>
            </p>

            <p className="text-base leading-relaxed text-white italic">
              (these are Researchers, Marketers, Directors with dangerous thoughts and unlimited energies)
            </p>

            {/* OPEN POPUP BUTTON */}
            <button
              onClick={() => setIsOpen(true)}
              className="inline-block mt-2 sm:mt-4 lg:mt-0 text-[#BE2026] bg-white px-3 lg:px-8 py-2 text-center rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg"
            >
              Tell me more...
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- CUSTOM MODAL ---------------- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="relative bg-white text-gray-800 rounded-2xl p-6 w-full max-w-2xl shadow-xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-black text-3xl hover:scale-125 transition"
            >
              &times;
            </button>

            {/* POPUP CONTENT */}
            <div>
              <p className="text-xl font-semibold text-gray-800 mb-6">
                The amazing brands that work with us have discovered us for one (often more) of these 3 reasons ···
                Like you, when they had to:
              </p>

              <div className="space-y-4">
                <div className="border-s-4 border-gray-600 bg-gray-300 px-3 py-2">
                  <p className="text-lg text-black">Do something incredible···</p>
                </div>

                <div className="border-s-4 border-gray-600 bg-gray-300 px-3 py-2">
                  <p className="text-lg text-black">Re-think like a Start-up and move fast</p>
                </div>

                <div className="border-s-4 border-gray-600 bg-gray-300 px-3 py-2">
                  <p className="text-lg text-black">Cut the noise and be relevant</p>
                </div>
              </div>

              <p className="text-xl xl:text-2xl font-semibold text-gray-800 mt-6" style={{ fontFamily: "Space Grotesk" }}>
                At the end of the day - it is all about adapting (fast)
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}