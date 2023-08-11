import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import pic from '../../assets/svgs/coding-illustration.svg';

const HeroSection = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col gap-12 md:flex-row">
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <img src={pic} alt="coding illustration" />
          </div>
          <div className="flex max-w-3xl flex-grow flex-col justify-center gap-8 md:order-first md:items-start md:justify-center 2xl:gap-12">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold capitalize md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-900">
                hi, I’m othniel
                <span className="inline-block">👋</span>
              </h1>
              <p className="text-normal text-base">
                I'm a frontend developer specializing in React.js, dedicated to
                crafting extraordinary digital experiences that are speedy,
                user-friendly, visually captivating, and adaptable. With roughly
                2 years of experience in building web applications, I maintain
                the same enthusiasm as if I were just starting out.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <FontAwesomeIcon icon={faLocationDot} />
                <p className="text-normal text-base capitalize">
                  abuja, nigeria
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center ml-[-8px]">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <p className="text-normal text-base capitalize">
                  available for hire
                </p>
              </div>
              <div className="flex gap-1 mt-4">
                <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                  <a
                    href="https://github.com/Othniel2471"
                    target="_blank"
                    rel="noreferrer"
                    name="github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </button>
                <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                  <a
                    href="https://www.linkedin.com/in/othniel-omaidu"
                    target="_blank"
                    rel="noreferrer"
                    name="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </button>
                <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-6 [&_svg]:h-6">
                  <a
                    href="https://twitter.com/OOmaidu"
                    target="_blank"
                    rel="noreferrer"
                    name="twitter"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// <i>
//   <img
//     width="24"
//     height="24"
//     src="../assets/svgs/git.svg"
//     alt=""
//   />
// </i>;
