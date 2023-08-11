import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <p className="text-normal text-sm flex items-center">
          <FontAwesomeIcon
            icon={faCopyright}
            className="mr-1 inline-block h-4 w-4"
          />
          {currentYear} Omaidu othniel. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
