import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#111] px-4 pt-2 md:px-12 md:pt-16">
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2 md:hidden">
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full flex-col bg-[#111] md:flex-row">
            <div className="grid w-full grid-cols-2 gap-4 bg-[#111] md:grid-cols-3">
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image1.jpg"}
                width={281}
                height={74}
                alt="image"
                className="h-[200px] w-full object-cover md:h-[350px]"
              />
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image2.jpg"}
                width={281}
                height={74}
                alt="image"
                className="h-[200px] w-full object-cover md:h-[350px]"
              />
              <motion.div
                className="flex items-center justify-center bg-[#0A6657]"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <p className="w-full max-w-[250px] px-2 py-12 font-sofia_sans text-xs font-[600] uppercase tracking-[2px] text-[#fff] md:px-0 md:text-2xl">
                  Follow us on Instagram for a sweet glimpse into our
                  handcrafted Syrian delights and latest creations!
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center justify-center gap-3 bg-[#0A6657] py-12"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              >
                <motion.img
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  src={"/images/home/follow/insta.svg"}
                  width={281}
                  height={74}
                  alt="image"
                  className="w-20"
                />
                <Link
                  href={"https://www.instagram.com/emesa.sweet"}
                  className="font-sofia_sans text-lg font-[600] uppercase tracking-[2.8px] text-[#fff] md:text-2xl"
                  target="_blank"
                >
                  @emesa.sweet
                </Link>
              </motion.div>
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image3.jpg"}
                width={281}
                height={74}
                alt="image"
                className="h-[200px] w-full object-cover md:h-[350px]"
              />
              <motion.img
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src={"/images/home/follow/image4.jpg"}
                width={281}
                height={74}
                alt="image"
                className="h-[200px] w-full object-cover md:h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
