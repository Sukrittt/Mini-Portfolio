import gsap from "gsap";
import { useEffect } from "react";

import { PHOTO_ANIMATION_DURATION } from "../../constant";

const ANIMATION_DURATION = PHOTO_ANIMATION_DURATION + 0.8;

const photoAnimation = () => {
  const tl = gsap.timeline();

  gsap.set(".photo", {
    x: -77,
    y: 62,
  });

  tl.from(".photo", {
    scale: 1.25,
    duration: ANIMATION_DURATION / 2,
    ease: "power4.out",
  }).to(".photo", {
    x: 0,
    y: 0,
    duration: ANIMATION_DURATION / 2,
    ease: "power4.out",
  });
};

export const Photo = () => {
  useEffect(() => {
    photoAnimation();
  }, []);

  return (
    <div className="col-span-3 rounded-xl overflow-hidden photo">
      <img
        src="/personal.jpg"
        alt="personal-pic"
        className="object-cover h-full rounded-xl"
      />
    </div>
  );
};
