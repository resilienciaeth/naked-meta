import React from 'react';
import Image from 'next/image';

function Banner({ parentStyles, childStyles, kidStyles }) {
  return (
    <div className={`absolute px-0 z-0  h-screen sm:h-60 place-content-center xs:p-4 xs:h-44 rounded-3xl bg-banner bg-contain bg-no-repeat ${parentStyles}`}>
      <div className=" flex-1 mt-52 ">
        <p className={`text-center text-6xl font-bold ${childStyles}`}>Conoce lo que hacemos</p>
        <p className={`text-center ${kidStyles}`}>Parabin paraban parabin paraaban </p>
      </div>
    </div>

  );
}

export default Banner;
