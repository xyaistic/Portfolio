import React, { useState } from 'react';
import bgElement from '../src/assets/IMG_1700.jpg';
import './Custom Css/style.css';
import projectImg1 from './assets/Frame 6 (2).png';
import projectImg2 from './assets/Frame 6 (3).png';
import projectImg3 from './assets/Frame 6 (4).png';
import projectImg4 from './assets/Frame 6 (5).png';
import projectImg5 from './assets/Frame 6 (6).png';
import WordRotate from "@/components/ui/word-rotate";
import DotPattern from './components/ui/dot-pattern';
import { cn } from './lib/utils';
import bgImg from '../src/assets/tweet.png'
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [currentProjectImage, setCurrentProjectImage] = useState(projectImg1);

  const handleHover = (project) => {
    if (project === 'Modest Hijab Store') {
      setCurrentProjectImage(projectImg2);
    } else if (project === 'Ecommerce') {
      setCurrentProjectImage(projectImg1);
    } else if (project === 'Zonestra') {
      setCurrentProjectImage(projectImg3);
    } else if (project === 'KBS Worlds') {
      setCurrentProjectImage(projectImg4);
    } else if (project === 'Sira Consulting') {
      setCurrentProjectImage(projectImg5);
    } else {
      setCurrentProjectImage(projectImg1);
    }
  };


  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl md:px-5 px-2">
        <div className="flex flex-col gap-4 sm:grid sm:grid-cols-12 sm:grid-rows-7 sm:gap-4">

          {/* Hero Section */}
          <div className="col-span-5 h-56 sm:h-full hover:bg-orange-500 hover:text-white transition-all duration-500 flex flex-col justify-between row-span-4 gap-10 bg-black text-orange-500 rounded-lg p-6">
            <div></div>
            <div className="gap-3 flex flex-col">
              <WordRotate
                className="lg:text-6xl md:text-5xl text-4xl font-bold h-33 dark:text-white"
                words={[
                  "Hey 👋🏻, I'm ZIYA AFRIDI",
                  "A Frontend Developer",
                ]}
              />
            </div>
          </div>

          {/* About Section */}
          <div
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className="bg-black h-56 object-fit sm:h-full bg-bottom hover:text-white transition-all duration-500 col-span-4 font-thin flex flex-col items-center justify-center row-span-3 col-start-1 row-start-5 text-orange-500 rounded-lg p-7"
          ></div>

          {/* Contact Box */}
          <div className="contact-box h-56 sm:h-full relative col-span-4 flex flex-col justify-between row-span-3 col-start-5 row-start-5 bg-black rounded-lg p-6">
            <DotPattern
              className={cn(
                "absolute inset-0 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
              )}
            />
            <div className="flex justify-between">
              <p className="text-orange-500 text-xs sm:text-sm font-semibold w-24">
                Have Some Questions?
              </p>
              <NavLink
                to="contact"

              >
                <svg
                  className="rotate-arrow transition-transform duration-300 transform hover:translate-x-2 hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  width={35}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M18 6H9M18 6V15"
                    stroke="#FF7700"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </NavLink>

            </div>
            <h1 className="text-4xl md:text-5xl sm:text-3xl text-orange-500">
              Contact Me
            </h1>
          </div>

          {/* Image Section */}
          <div className="col-span-3 row-span-4 col-start-6 row-start-1 bg-gray-300 rounded-lg">
            {/* Display the current project image */}
            <img
              src={bgElement}
              alt=""
              className="lg:grayscale hover:grayscale-0 duration-500 h-full w-full rounded-lg object-cover"
            />
          </div>

          {/* Projects Section */}
          <div className="project-box col-span-4 p-5 gap-5 flex flex-col row-span-7 col-start-9 row-start-1 bg-black text-orange-500 rounded-lg overflow-hidden">
            <div className="flex justify-between">
              <h5 className="text-lg sm:text-xl font-semibold">Projects</h5>
              <NavLink
                to="casestudy"

              >
                <svg
                  className="rotate-arrow transition-transform duration-300 transform hover:translate-x-2 hover:-translate-y-2"
                  viewBox="0 0 24 24"
                  width={35}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M18 6H9M18 6V15"
                    stroke="#FF7700"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </NavLink>
            </div>

            <img
              className="transition-opacity rounded-lg shadow-md duration-500"
              src={currentProjectImage}
              alt=""
            />
            <div className="overflow-y-auto max-h-96 scrollbar-hide rounded-lg">
              {[
                { title: "Ecommerce", subtitle: "MOBILE APP", },
                { title: "Modest Hijab Store", subtitle: "MOBILE APP", },
                { title: "Zonestra", subtitle: "WEBSITE", link: "https://zonestra.com/" },
                { title: "KBS Worlds", subtitle: "WEBSITE", link: "https://kbsworld.co.in/" },
                { title: "Sira Consulting", subtitle: "WEBSITE", link: "https://siraconsultinginc.com/" },
              ].map((project, index, projects) => (
                <div
                  key={index}
                  onMouseEnter={() => handleHover(project.title)}
                  onMouseLeave={() => setCurrentProjectImage(projectImg1)}
                  className={`hover:border-orange-500 hover:text-orange-500 transition-all flex justify-between py-2 ${index !== projects.length - 1 ? 'border-b border-gray-800' : ''
                    }`}
                >
                  <h6 className="text-base sm:text-lg font-normal">
                    {project.title} <br />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {project.subtitle}
                    </span>
                  </h6>
                  <a href={project.link} target="_blank">
                    <svg
                      className="rotate-arrow project-arrow"
                      viewBox="0 0 24 24"
                      width={25}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"

                    >
                      <path
                        d="M6 18L18 6M18 6H9M18 6V15"
                        stroke="#FF7700"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section >

  );
}
