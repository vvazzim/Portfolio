import React from 'react';
import Image from 'next/image';

const Circles = () => {
  return (
    <div className="absolute -right-16 -bottom-2 mix-blend-color-dodge w-[200px] xl:w-[300px] animate-pulse duration-75 z-10">
      <Image
        src="/circles.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="Decorative Circles"
      />
    </div>
  );
};

export default Circles;
