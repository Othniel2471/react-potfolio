import React from 'react';
import javascript from '../../assets/svgs/icon-javscript.svg';
import react from '../../assets/svgs/icon-react.svg';
import vue from '../../assets/svgs/vue-9.svg';
import tailwind from '../../assets/svgs/icon-tailwindcss.svg';
import bootstrap from '../../assets/svgs/bootstrap-4.svg';
import git from '../../assets/svgs/icon-git.svg';
import jest from '../../assets/svgs/jest-icon.svg';
import redux from '../../assets/svgs/redux.svg';
import ruby from '../../assets/svgs/ruby.jpg';
import rails from '../../assets/svgs/rails.jpg';
import postgres from '../../assets/svgs/postgres.jpg';
import nextjs from '../../assets/svgs/nextjs.png';
import typescript from '../../assets/svgs/typescript.png';

const LanguageSection = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium">skills</p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            The skills, tools and technologies I am really good at:
          </p>
          <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12 gap-10">
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={javascript}
                  alt="javascript"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                javascript
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://react.dev/" target="_blank" rel="noreferrer">
                <img
                  src={react}
                  alt="react"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                react js
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                <img
                  src={vue}
                  alt="vue"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                vue js
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={tailwind}
                  alt="tailwindcss"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                tailwindcss
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={bootstrap}
                  alt="bootstrap"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                bootstrap
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://jestjs.io/" target="_blank" rel="noreferrer">
                <img
                  src={jest}
                  alt="jest"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                jest
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src={git}
                  alt="git"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">git</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                <img
                  src={redux}
                  alt="redux"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                redux
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.ruby-lang.org/en/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={ruby}
                  alt="ruby"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                ruby
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://rubyonrails.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={rails}
                  alt="rails"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                rails
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={postgres}
                  alt="postgres"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                postgres
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://nextjs.org/learn"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={nextjs}
                  alt="postgres"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                Next Js
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <a
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={typescript}
                  alt="postgres"
                  className="transition-transform duration-300 md:hover:scale-110 w-[64px] h-[64px]"
                />
              </a>
              <p className="text-normal text-base md:text-lg capitalize">
                TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageSection;
