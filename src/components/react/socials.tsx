import gsap from "gsap";
import { useEffect } from "react";

import { PHOTO_ANIMATION_DURATION } from "../../constant";

const SOCIAL_ANIMATION_DURATION = PHOTO_ANIMATION_DURATION + 1;

const socialAnimation = () => {
  gsap.from(".social-container", {
    opacity: 0,
    scale: 0,
    duration: 1,
    transformOrigin: "top left",
    ease: "power4",
    delay: PHOTO_ANIMATION_DURATION,
  });

  gsap.from(".social-text", {
    opacity: 0,
    y: 10,
    stagger: 0.2,
    delay: SOCIAL_ANIMATION_DURATION - 0.5,
    ease: "power4.out",
  });
};

export const Socials = () => {
  useEffect(() => {
    socialAnimation();
  }, []);

  return (
    <div className="social-container h-[15%] bg-[#D9CEBD] rounded-xl p-4 flex items-center justify-around font-medium font-stretch-condensed text-[15px] tracking-tight">
      <div className="social-text">
        <a
          className="hover:text-black/70 transition"
          target="_blank"
          href="https://github.com/sukrittt"
        >
          GITHUB
        </a>
      </div>

      <div className="social-text">
        <a
          className="hover:text-black/70 transition"
          target="_blank"
          href="https://linkedin.com/in/sukrit-saha-b6117a242"
        >
          LINKED IN
        </a>
      </div>

      <div className="social-text">
        <a
          className="hover:text-black/70 transition"
          target="_blank"
          href="https://x.com/SukritSaha11"
        >
          TWITTER
        </a>
      </div>
    </div>
  );
};
