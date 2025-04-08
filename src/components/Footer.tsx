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
            href={"/table-booking"}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            Booking
          </Link>
          <Link
            href={"/contact"}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            Contact
          </Link>
          <Link
            href={"/"}
            className="text-center font-playfair text-sm font-[600] capitalize italic tracking-[0.48px] text-[#ECE6D6]"
          >
            Home
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:gap-28">
          <div className="flex flex-col gap-2">
            <span className="font-playfair text-base font-[600] capitalize italic tracking-[0.48px] text-[#D3AF5E]">
              Hours of Operation
            </span>
            <span className="text-center font-joan text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6]">
              Mon-sun: 8am-11pm{" "}
            </span>
          </div>
          <div className="hidden h-[100px] border-r-[1px] border-r-[#D3AF5E] md:block" />
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="font-playfair text-base font-[600] capitalize italic tracking-[0.48px] text-[#D3AF5E]">
              Address{" "}
            </span>
            <Link href={"https://g.co/kgs/X21HVq3"} target="_blank">
              <span className="text-center font-joan text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6]">
                7 Walmer St E, Manchester <br /> M14 5SS, United Kingdom
              </span>
            </Link>
            <Link href={"tel:+01619641411"}>
              <span className="text-center font-joan text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6]">
                0161 964 1411
              </span>
            </Link>
            <Link href={"mailto:info@emesasweet.com"}>
              <span className="text-center font-joan text-sm font-[400] capitalize tracking-[0.44px] text-[#ECE6D6]">
                info@emesasweet.com
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-5">
          <Link href={"https://www.instagram.com/emesa.sweet"} target="_blank">
            <Icons.instagram className="text-[#D3AF5E]" />
          </Link>
          <Link
            href={
              "https://www.facebook.com/people/Emesa-Sweets/61573122279162/?mibextid=wwXIfr&rdid=T1dHQqn6S6uh7TUt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1556JVDiHd%2F%3Fmibextid%3DwwXIfr"
            }
            target="_blank"
          >
            <Icons.facebook className="text-[#D3AF5E]" />
          </Link>
          <Link href={"https://g.co/kgs/X21HVq3"} target="_blank">
            <Icons.google className="text-[#D3AF5E]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
