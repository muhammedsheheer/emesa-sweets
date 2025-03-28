import Image from "next/image";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#afc1cd]">
      <h1 className="px-2 text-center font-playfair text-5xl font-[500] capitalize text-[#427C73] md:text-8xl md:tracking-[-5px]">
        Authentic syrian sweets
      </h1>
    </section>
  );
};

export default Hero;
