import React, { useEffect, useRef } from "react";

const SmoothScrollText = ({ items }) => {
  const wrapperRef = useRef(null);
  const indexRef = useRef(0);
  const isResetting = useRef(false);

  // Create seamless loop by cloning first item
  const loopItems = [...items, items[0]];

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const itemHeight = el.firstChild.offsetHeight;
    const total = loopItems.length;

    const animate = () => {
      if (!el) return;

      // Apply smooth transition normally
      el.style.transition = "transform 0.6s ease-out";
      el.style.transform = `translateY(-${indexRef.current * itemHeight}px)`;

      indexRef.current++;

      // When reaching the last cloned item → reset to start instantly
      if (indexRef.current === total) {
        isResetting.current = true;
        setTimeout(() => {
          el.style.transition = "none"; // remove animation
          el.style.transform = "translateY(0px)"; // jump to real first item
          indexRef.current = 1; // next scroll goes to second real item
          isResetting.current = false;
        }, 600);
      }

      // Continue scrolling every 2 seconds
      setTimeout(() => {
        if (!isResetting.current) animate();
      }, 1000);
    };

    const timer = setTimeout(animate, 1500);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div className="overflow-hidden h-10">
      <div ref={wrapperRef} className="flex flex-col">
        {loopItems.map((text, i) => (
          <div key={i} className="flex justify-between items-center text-xl sm:text-3xl py-1">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmoothScrollText;