import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#47887D] px-4 py-8 md:px-20 md:py-14">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:gap-10">
        <h1 className="text-center font-playfair text-5xl font-[500] uppercase text-[#fff] md:text-7xl md:tracking-[-4px]">
          Explore our menu
        </h1>
        <div className="flex h-full w-full flex-col gap-8 md:flex-row">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image1.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full rounded-t-full md:h-full"
              />
            </div>
            <h6 className="text-center font-playfair text-2xl font-[400] uppercase text-[#fff] md:text-3xl md:tracking-[1.8px]">
              DESSERTS & CAKES{" "}
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image2.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full md:h-full"
              />
            </div>
            <h6 className="text-center font-playfair text-2xl font-[400] uppercase text-[#fff] md:text-3xl md:tracking-[1.8px]">
              MANAKEESH{" "}
            </h6>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full">
              <Image
                src={"/images/home/highlights/image3.png"}
                width={677}
                height={503}
                alt="image"
                className="h-auto w-full md:h-full"
              />
            </div>
            <h6 className="text-center font-playfair text-2xl font-[400] uppercase text-[#fff] md:text-3xl md:tracking-[1.8px]">
              DRINKS{" "}
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
