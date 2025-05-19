import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Authentic: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#000] px-4 pb-12 pt-12 md:px-16 md:pb-48 md:pt-12">
      <div className="absolute right-28 top-[30%] hidden md:block">
        <div className="relative">
          <div className="absolute inset-0 ml-[2%] flex items-center justify-center">
            <motion.img
              src={"/images/home/authentic/image.jpg"}
              width={281}
              height={74}
              alt="logo"
              className="h-[65%] w-[60%] rounded-t-full object-cover"
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
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
        <h1 className="w-full font-playfair text-5xl font-[500] capitalize text-[#fff] md:whitespace-nowrap md:text-start md:text-[13vw] md:tracking-[-8px]">
          Authentic syrian <br /> sweets
        </h1>
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <p className="w-full max-w-[600px] font-playfair text-sm font-[300] capitalize tracking-[1px] text-[#fff] md:text-base">
            At Emesa Sweets, we take pride in crafting authentic Syrian
            confections that celebrate tradition and flavor. Rooted in the heart
            of Homs, Syria, our passion for quality and craftsmanship is
            reflected in every bite of our handcrafted sweets. From rich baklava
            layered with premium nuts to our signature Maloukia made with dates
            and nuts, we bring you an exquisite selection of treats that honor
            our heritage.
          </p>
          <p className="w-full max-w-[600px] font-playfair text-sm font-[300] capitalize tracking-[1px] text-[#fff] md:text-base">
            Whether you`re savoring a piece with family or gifting a loved one,
            Emesa Sweets promises a taste of tradition, made with care and the
            finest ingredients.
          </p>
        </motion.div>
        <motion.div
          className="md:pt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Link href={"/table-booking"}>
            <Button
              className={
                "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#000] hover:bg-[#222] hover:text-[#fff]"
              }
            >
              Reserve
            </Button>
          </Link>
        </motion.div>
        <div className="md:hidden">
          <div className="relative">
            <div className="absolute inset-0 ml-[2%] flex items-center justify-center">
              <motion.img
                src={"/images/home/authentic/image.jpg"}
                width={281}
                height={74}
                alt="logo"
                className="h-[65%] w-[60%] rounded-t-full object-cover"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
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
