import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Authentic: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pb-12 pt-12 md:px-16 md:pb-48 md:pt-12">
      <div className="absolute right-28 top-[30%] hidden md:block">
        <div className="relative">
          <div className="absolute inset-0 ml-[2%] flex items-center justify-center">
            <Image
              src={"/images/home/authentic/image.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-[65%] w-[60%]"
            />
          </div>
          <Image
            src={"/images/home/authentic/frame.png"}
            width={281}
            height={74}
            alt="logo"
            className="h-[700px] w-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-5 md:items-start md:justify-start md:gap-8">
        <h1 className="w-full font-playfair text-5xl font-[500] capitalize text-[#000] md:whitespace-nowrap md:text-start md:text-[13vw] md:tracking-[-8px]">
          Authentic syrian <br /> sweets
        </h1>
        <div className="flex flex-col gap-4">
          <p className="w-full max-w-[600px] font-playfair text-sm font-[300] capitalize tracking-[1px] text-[#000] md:text-base">
            At Emesa Sweets, we take pride in crafting authentic Syrian
            confections that celebrate tradition and flavor. Rooted in the heart
            of Homs, Syria, our passion for quality and craftsmanship is
            reflected in every bite of our handcrafted sweets. From rich baklava
            layered with premium nuts to our signature Maloukia made with dates
            and nuts, we bring you an exquisite selection of treats that honor
            our heritage.
          </p>
          <p className="w-full max-w-[600px] font-playfair text-sm font-[300] capitalize tracking-[1px] text-[#000] md:text-base">
            Whether you`re savoring a piece with family or gifting a loved one,
            Emesa Sweets promises a taste of tradition, made with care and the
            finest ingredients.
          </p>
        </div>
        <div className="md:pt-6">
          <Link href={"/table-booking"}>
            <Button
              className={
                "rounded-none border border-[#000] bg-[#000] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#fff] hover:bg-[#222] hover:text-[#fff]"
              }
            >
              Reserve
            </Button>
          </Link>
        </div>
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute inset-0 ml-[2%] flex items-center justify-center">
              <Image
                src={"/images/home/authentic/image.png"}
                width={281}
                height={74}
                alt="logo"
                className="h-[65%] w-[60%]"
              />
            </div>
            <Image
              src={"/images/home/authentic/frame.png"}
              width={281}
              height={74}
              alt="logo"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authentic;
