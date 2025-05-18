import gsap from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

import { PHOTO_ANIMATION_DURATION } from "../../constant";

const ABOUT_ANIMATION_DURATION = PHOTO_ANIMATION_DURATION + 1;

const aboutAnimation = () => {
  const splitText = new SplitType(".about-text");

  gsap.fromTo(
    ".about-container",
    {
      opacity: 0,
      scale: 0,
      duration: 1,
      transformOrigin: "top right",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      transformOrigin: "top right",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    }
  );

  gsap.from(splitText.lines, {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    delay: ABOUT_ANIMATION_DURATION - 0.5,
    ease: "power4.out",
  });

  gsap.from(".about", {
    opacity: 0,
    y: 10,
    delay: ABOUT_ANIMATION_DURATION * 1.25 - 0.5,
  });
};

export const About = () => {
  useEffect(() => {
    aboutAnimation();
  }, []);

  return (
    <div className="about-container bg-[#D9CEBD] rounded-xl p-4 relative opacity-0">
      <img
        src="/about.svg"
        alt="about"
        className="absolute right-6 about"
        height={20}
        width={20}
      />

      <div className="absolute bottom-6">
        <p className="about-text">
          Hey, I'm Sukrit, a frontend engineer from India with a strong focus on
          web application development. My goal? To build an application used by
          millions of people.
        </p>
      </div>
    </div>
  );
};
