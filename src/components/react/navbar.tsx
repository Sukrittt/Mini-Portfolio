import gsap from "gsap";
import { useEffect } from "react";

import { PHOTO_ANIMATION_DURATION } from "../../constant";

const NAVBAR_ANIMATION_DURATION = PHOTO_ANIMATION_DURATION + 1;

const navbarAnimation = () => {
  gsap.fromTo(
    ".navbar-container",
    {
      opacity: 0,
      scale: 0,
      duration: 1,
      transformOrigin: "bottom",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      transformOrigin: "bottom",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    }
  );

  gsap.fromTo(
    ".nav-logo",
    {
      x: -5,
    },
    {
      opacity: 1,
      delay: NAVBAR_ANIMATION_DURATION,
      ease: "power4.out",
      x: 0,
    }
  );

  gsap.fromTo(
    ".nav-links",
    {
      x: 5,
    },
    {
      opacity: 1,
      delay: NAVBAR_ANIMATION_DURATION,
      ease: "power4.out",
      x: 0,
    }
  );
};

export const Navbar = () => {
  useEffect(() => {
    navbarAnimation();
  }, []);

  return (
    <div className="navbar-container opacity-0 bg-[#D9CEBD] h-[70px] w-full flex items-center justify-between rounded-xl px-4 font-stretch-condensed logo-[15px] tracking-tight">
      <span className="nav-logo opacity-0">SUKRIT</span>

      <div className="flex items-center gap-x-8">
        <a
          href="https://sukritsaha.in"
          target="_blank"
          className="nav-links opacity-0"
        >
          ABOUT
        </a>
        <a
          href="https://github.com/sukrittt"
          target="_blank"
          className="nav-links opacity-0"
        >
          WORK
        </a>
        <a
          href="https://linkedin.com/in/sukrit-saha-b6117a242"
          target="_blank"
          className="nav-links opacity-0"
        >
          CONTACT
        </a>
      </div>
    </div>
  );
};
