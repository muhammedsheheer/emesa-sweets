"use client";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./Icon";

const Footer = ({}) => {
  return (
    <footer className="h-full w-full bg-[#0A6656] px-4 py-12">
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="flex flex-col items-center justify-center gap-5 md:ml-[8%] md:flex-row md:gap-20">
          <Link
            href={"/about-us"}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            About
          </Link>
          <Link
            href={"/menu"}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            our menu
          </Link>
          <Image
            src={"/images/home/hero/logo.png"}
            width={281}
            height={74}
            alt="logo"
            className="w-24"
          />
          <Link
            href={""}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            Specials
          </Link>
          <Link
            href={"/contact"}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            Contact
          </Link>
          <Link
            href={""}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            careers
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-28">
          <div className="flex flex-col gap-2">
            <span className="font-playfair text-base font-[600] capitalize italic tracking-[0.48px] text-[#D3AF5E]">
              Hours of Operation
            </span>
            <span className="font-joan text-center text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6]">
              Mon-sun: 8am-11pm{" "}
            </span>
          </div>
          <div className="hidden h-[100px] border-r-[1px] border-r-[#D3AF5E] md:block" />
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-playfair text-base font-[600] capitalize italic tracking-[0.48px] text-[#D3AF5E]">
              Address{" "}
            </span>
            <Link href={""} target="_blank">
              <span className="font-joan text-center text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6]">
                7 Walmer St E, Manchester <br /> M14 5SS, United Kingdom
              </span>
            </Link>
            <Link href={""}>
              <span className="font-joan text-center text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6]">
                +44 161 964 1411{" "}
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          <Link href={""} target="_blank">
            <Icons.instagram className="text-[#D3AF5E]" />
          </Link>
          <Link href={""} target="_blank">
            <Icons.facebook className="text-[#D3AF5E]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
