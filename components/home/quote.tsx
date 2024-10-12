// Copyright hassankhodabakhshi  2021,2022. All Rights Reserved.
// Project: folio "https://www.linkedin.com/in/hassan-khodabakhshi-495743a0/",
// Author contact: 
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { gsap, Linear } from "gsap";
import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const QuoteSection = () => {
  const quoteRef: MutableRefObject<HTMLDivElement> = useRef(null);
  const targetSection: MutableRefObject<HTMLDivElement> = useRef(null);

  const [willChange, setwillChange] = useState(false);

  const initQuoteAnimation = (
    quoteRef: MutableRefObject<HTMLDivElement>,
    targetSection: MutableRefObject<HTMLDivElement>
  ): ScrollTrigger => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    timeline
      .from(quoteRef.current, { opacity: 0, duration: 2 })
      .to(quoteRef.current.querySelector(".text-strong"), {
        backgroundPositionX: "100%",
        duration: 1,
      });

    return ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center bottom",
      end: "center center",
      scrub: 0,
      animation: timeline,
      onToggle: (self) => setwillChange(self.isActive),
    });
  };

  useEffect(() => {
    const quoteAnimationRef = initQuoteAnimation(quoteRef, targetSection);

    return quoteAnimationRef.kill;
  }, [quoteRef, targetSection]);

  const renderQuote = (): React.ReactNode => (
    <div className="tall:py-60 py-72 section-container">
      <h1
        ref={quoteRef}
        className={`font-medium text-4xl md:text-5xl text-center ${
          willChange ? "will-change-opacity" : ""
        }`}
      >
        من با دقت زیادی <span className="text-strong font-bold">پروژه‌های</span>  خود را انجام می‌دهم
      </h1>
    </div>
  );

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      {renderQuote()}
    </section>
  );
};

export default QuoteSection;
