import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#afc1cd]">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="https://d8q1b3smcycac.cloudfront.net/emesa/emesa-sweets-thumbnail.png"
      >
        <source
          src="https://d8q1b3smcycac.cloudfront.net/emesa/emesa-sweets-web.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-10 bg-black/30" />

      <h1 className="relative z-20 px-2 text-center font-playfair text-5xl font-[500] capitalize text-[#427C73] md:text-8xl md:tracking-[-5px]">
        Authentic syrian sweets
      </h1>
    </section>
  );
};

export default Hero;
