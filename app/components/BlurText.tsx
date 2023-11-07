"use client"
import { useState } from 'react';

interface Props {
  text: string;
}

const BlurText: React.FC<Props> = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <div className="absolute inset-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
        {text}
      </div>
    <span
      className={`whitespace-nowrap bg-clip-text transition duration-[2000ms] ease-in hover:duration-200 ${
        isHovered ? 'bg-white blur-md' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
    </div>
  );
};

export default BlurText;

