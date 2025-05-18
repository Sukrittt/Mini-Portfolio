import gsap from "gsap";
import { useEffect } from "react";

import { PHOTO_ANIMATION_DURATION } from "../../constant";

const CONTACT_ANIMATION_DURATION = PHOTO_ANIMATION_DURATION + 1;

const contactAnimation = () => {
  gsap.fromTo(
    ".contact-container",
    {
      opacity: 0,
      scale: 0,
      duration: 1,
      transformOrigin: "top",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      transformOrigin: "top",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    }
  );

  gsap.from(".contact-text", {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    delay: CONTACT_ANIMATION_DURATION - 0.5,
    ease: "power4.out",
  });

  gsap.from(".contact-arrow", {
    opacity: 0,
    y: 10,
    delay: CONTACT_ANIMATION_DURATION * 1.25 - 0.5,
  });
};

export const Contact = () => {
  useEffect(() => {
    contactAnimation();
  }, []);

  return (
    <a
      target="_blank"
      href="https://linkedin.com/in/sukrit-saha-b6117a242"
      className="contact-container bg-[#555349] text-white rounded-xl p-4 relative opacity-0"
    >
      <img
        src="/top-right.svg"
        alt="top-right"
        className="absolute right-6 contact-arrow"
        height={20}
        width={20}
      />

      <div className="contact-text absolute bottom-6 text-4xl font-stretch-200%">
        Contact <span className="font-thin">me</span>
      </div>
    </a>
  );
};
