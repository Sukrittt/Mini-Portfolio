import gsap from "gsap";
import { useEffect } from "react";

import { PHOTO_ANIMATION_DURATION } from "../../constant";

const TAGLINE_ANIMATION_DURATION = PHOTO_ANIMATION_DURATION + 1;

const taglineAnimation = () => {
  gsap.fromTo(
    ".tagline-container",
    {
      opacity: 0,
      scale: 0,
      duration: 1,
      transformOrigin: "bottom right",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      transformOrigin: "bottom right",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    }
  );

  gsap.from(".tagline-text", {
    opacity: 0,
    y: 20,
    delay: TAGLINE_ANIMATION_DURATION - 0.5,
    ease: "power4.out",
  });

  gsap.from(".airpods", {
    opacity: 0,
    y: 10,
    delay: TAGLINE_ANIMATION_DURATION * 1.25 - 0.5,
  });
};

export const Tagline = () => {
  useEffect(() => {
    taglineAnimation();
  }, []);

  return (
    <div className="tagline-container col-span-5 bg-[#D9CEBD] rounded-xl p-4 relative opacity-0">
      <img
        src="/airpords.svg"
        alt="airpods"
        className="airpods absolute right-6"
        height={20}
        width={20}
      />

      <div className="absolute bottom-12 text-4xl font-stretch-condensed tagline-text">
        Developer who turns <span className="font-serif">ideas</span> into
        interactive <span className="font-stretch-200%">realities</span>
      </div>
    </div>
  );
};
