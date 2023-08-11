import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import copyIcon from '../../assets/svgs/copy-icon.svg';

const ContactSection = () => {
  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="flex flex-col items-center gap-4">
          <div className="self-center">
            <div className="flex items-center justify-center rounded-xl bg-gray-200 px-5 py-1">
              <p className="text-normal text-sm font-medium capitalize">
                get in touch
              </p>
            </div>
          </div>
          <p className="text-normal text-lg md:text-xl max-w-xl text-center">
            What’s next? Feel free to reach out to me if you are looking for a
            developer or simply want to connect.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 md:gap-12">
          <div className="flex flex-col items-center md:gap-4">
            <div className="flex items-center gap-4 md:gap-5">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-6 w-6 md:h-8 md:w-8"
              />
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                omaiduothniel@gmail.com
              </h2>
              <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-8 [&_svg]:h-8">
                <img src={copyIcon} alt="copy" className="lucide lucide-copy" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
