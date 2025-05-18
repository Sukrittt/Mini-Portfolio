import gsap from "gsap";
import { useEffect, useState } from "react";

import { PHOTO_ANIMATION_DURATION } from "../../constant";

const PROJECT_ANIMATION_DURATION = PHOTO_ANIMATION_DURATION + 1;

const projectAnimation = () => {
  gsap.fromTo(
    ".project-container",
    {
      opacity: 0,
      scale: 0,
      duration: 1,
      transformOrigin: "left",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1,
      transformOrigin: "left",
      ease: "power4",
      delay: PHOTO_ANIMATION_DURATION,
    }
  );

  gsap.from(".project", {
    opacity: 0,
    y: 5,
    ease: "power4.out",
    delay: PROJECT_ANIMATION_DURATION * 1.25 - 0.5,
  });

  gsap.from(".project-title", {
    opacity: 0,
    y: 5,
    ease: "power4.out",
    delay: PROJECT_ANIMATION_DURATION - 0.5,
  });

  gsap.from(".project-banner", {
    opacity: 0,
    duration: 1.5,
    delay: PROJECT_ANIMATION_DURATION - 0.5,
    ease: "power4.out",
  });

  gsap.from(".project-text", {
    opacity: 0,
    y: 10,
    stagger: 0.2,
    delay: PROJECT_ANIMATION_DURATION * 1.25 - 0.5,
    ease: "power4.out",
  });

  gsap.from(".project-line", {
    opacity: 0,
    width: 0,
    stagger: 0.1,
    delay: PROJECT_ANIMATION_DURATION - 0.25,
    ease: "power4.out",
  });
};

type Project = "spitha-diamonds" | "claspr" | "limetta";

const projectLinks = {
  "spitha-diamonds": "https://spithadiamonds.com",
  claspr: "https://claspr.com",
  limetta: "https://limetta.in",
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState<Project>("spitha-diamonds");

  useEffect(() => {
    projectAnimation();
  }, []);

  const handleChangeProject = (project: Project) => {
    setSelectedProject(project);
  };

  return (
    <div className="project-container h-[85%] bg-[#D9CEBD] rounded-xl p-4 relative opacity-0">
      <div className="flex items-center justify-between">
        <span className="project-title text-2xl font-stretch-condensed">
          Projects
        </span>
        <img
          src="/work.svg"
          alt="work"
          height={20}
          width={20}
          className="project"
        />
      </div>

      <div className="flex flex-col gap-y-4 h-full">
        <a
          target="_blank"
          href={projectLinks[selectedProject]}
          className="project-banner bg-[#282017] h-[50%] rounded-xl grid place-items-center text-white mt-6 text-7xl font-stretch-semi-expanded"
        >
          <span>{selectedProject[0].toUpperCase()}</span>
        </a>

        <div className="flex flex-col gap-y-4 absolute bottom-6 w-[90%]">
          <div className="project-line h-[1px] mb-4 w-full bg-black/30"></div>

          <div className="project-text">
            <span
              onClick={() => handleChangeProject("spitha-diamonds")}
              className="cursor-pointer hover:text-black/70 transition"
            >
              Spitha Diamonds
            </span>
          </div>

          <div className="project-line h-[1px] mb-4 w-full bg-black/30"></div>

          <div className="project-text">
            <span
              onClick={() => handleChangeProject("claspr")}
              className="cursor-pointer hover:text-black/70 transition"
            >
              Claspr
            </span>
          </div>

          <div className="project-line h-[1px] mb-4 w-full bg-black/30"></div>

          <div className="project-text">
            <span
              onClick={() => handleChangeProject("limetta")}
              className="cursor-pointer hover:text-black/70 transition"
            >
              Limetta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
