import * as React from 'react';
import Svg from './svg';

interface ContactButtonProps {
  svgName: string;
  link: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ svgName, link }) => {

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex justify-center items-center h-8 w-8 md:h-9 md:w-9 text-gray-600 hover:bg-gray-100 rounded-full dark:text-gray-400 dark:hover:bg-gray-800"
    >
      <Svg name={svgName} className="w-4 md:w-5" />
    </a>
  );
};

export default ContactButton;
