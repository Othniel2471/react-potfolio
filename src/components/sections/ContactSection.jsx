import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import copyIcon from '../../assets/svgs/copy-icon.svg';

const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [showCopiedAlert, setShowCopiedAlert] = useState(false);
  const [showSubmitAlert, setShowSubmitAlert] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try {
      const response = await fetch('https://formspree.io/f/mpzebpge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsFormSubmitted(true);
        setShowSubmitAlert(true);

        setTimeout(() => {
          setShowSubmitAlert(false);
        }, 1000);
      } else {
        console.error('Form submission failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const copyEmail = async () => {
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText('omaiduothniel@gmail.com');
      setIsCopied(true);
      setShowCopiedAlert(true);

      setTimeout(() => {
        setIsCopied(false);
        setShowCopiedAlert(false);
      }, 1000);
    } catch (error) {
      console.error('Error copying email:', error);
    }
  };

  return (
    <section className="w-full bg-gray py-16 md:py-20 2xl:py-24" id="contact">
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
              <form
                action="https://formspree.io/f/mpzebpge"
                method="POST"
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-4 md:gap-5"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 text-sm"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 text-sm"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                  className="w-full md:w-96 border border-gray-300 rounded-lg px-4 py-2 text-sm"
                  required
                ></textarea>
                <button
                  type="submit"
                  disabled={isFormSubmitted}
                  className="inline-flex items-center w-20 justify-center rounded-xl bg-gray-900 px-4 py-1.5 font-medium text-gray-50 transition-colors duration-200 hover:bg-gray-700 active:bg-gray-800"
                >
                  {isFormSubmitted ? 'Sent' : 'Send'}
                </button>
                {showSubmitAlert && (
                  <p className="text-green-500">Message sent!</p>
                )}
              </form>
            </div>
            <div className="flex items-center gap-4 md:gap-5">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="h-6 w-6 md:h-8 md:w-8"
              />
              <h2 className="text-lg md:text-4xl font-semibold tracking-[-0.02em] text-gray-900">
                omaiduothniel@gmail.com
              </h2>

              <button
                onClick={copyEmail}
                className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&_svg]:stroke-gray-600 [&_svg]:hover:stroke-gray-700 [&_svg]:w-8 [&_svg]:h-8"
              >
                <img src={copyIcon} alt="copy" className="lucide lucide-copy" />
              </button>
              {showCopiedAlert && <p className="text-green-500">Copied!</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
