import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Highlights: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#47887D] px-4 py-8 md:px-20 md:py-14">
      <div className="flex h-full w-full flex-col items-center justify-center gap-6 md:gap-10">
        <h1 className="text-center font-playfair text-5xl font-[500] uppercase text-[#fff] md:text-7xl md:tracking-[-4px]">
          Explore our menu
        </h1>
        <div className="flex h-full w-full flex-col gap-8 px-8 md:flex-row md:px-0">
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/highlights/image1.jpg"}
                width={5686}
                height={3791}
                alt="image"
                className="h-[300px] w-full rounded-t-full border-[5px] border-[#ba9333] object-cover p-2 md:h-[500px]"
              />
            </div>
            <div>
              <Link href={"/menu"}>
                <Button
                  className={
                    "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#000] hover:bg-[#222] hover:text-[#fff]"
                  }
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/highlights/image2.jpg"}
                width={677}
                height={503}
                alt="image"
                className="h-[300px] w-full rounded-t-full border-[5px] border-[#ba9333] object-cover p-2 md:h-[500px]"
              />
            </div>
            <div>
              <Link href={"/menu"}>
                <Button
                  className={
                    "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#000] hover:bg-[#222] hover:text-[#fff]"
                  }
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:w-[33%]">
            <div className="h-full w-full rounded-t-full">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/highlights/image3.jpg"}
                width={677}
                height={503}
                alt="image"
                className="h-[300px] w-full rounded-t-full border-[5px] border-[#ba9333] object-cover p-2 md:h-[500px]"
              />
            </div>
            <div>
              <Link href={"/menu"}>
                <Button
                  className={
                    "rounded-none border border-[#fff] bg-[#fff] px-7 py-5 font-open_sans text-xs font-[600] uppercase tracking-[2.08px] text-[#000] hover:bg-[#222] hover:text-[#fff]"
                  }
                >
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
