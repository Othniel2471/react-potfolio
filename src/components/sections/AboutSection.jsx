import React from 'react';
import profile from '../../assets/svgs/about.svg';

const AboutSection = () => {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-gray-50" id="about">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="self-center">
          <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
            <p className="text-normal text-sm font-medium capitalize">
              about me
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
          <div className="flex justify-center md:order-first md:justify-end">
            <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
              <img
                className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
                src={profile}
                alt="about illustration"
              />
            </div>
          </div>
          <div className="flex max-w-xl flex-col gap-6">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-gray-900">
              Curious about me? Here's the scoop:
            </h3>
            <p className="text-normal text-base">
              Hello, I'm Othniel, a Frontend developer. I'm a passionate and
              self-motivated developer who loves to build beautiful and
              responsive web applications.
            </p>
            <p className="text-normal text-base">
              I began my journey as a web developer in 2022, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now.I'm build cutting-edge web applications using modern
              technologies such as React.js, Vanilla JavaScript, Vue.js,
              Tailwindcss, and much more.
            </p>
            <p className="text-normal text-base">
              When I'm not in full-on developer mode, you can find me watching
              animes or playing games mostly.
            </p>
            <p className="text-normal text-base">
              Finally, some quick bits about me.
            </p>
            <div className="flex flex-col md:flex-row gap-8">
              <ul className="flex list-inside list-disc flex-col gap-2">
                <li className="text-normal text-base">
                  BSC. in Computer Science
                </li>
                <li className="text-normal text-base">Passionate Learner</li>
              </ul>
              <ul className="flex list-inside list-disc flex-col gap-2">
                <li className="text-normal text-base">Team Player</li>
                <li className="text-normal text-base">Self-motivated</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
