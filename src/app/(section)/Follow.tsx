import Image from "next/image";
import Link from "next/link";
import React from "react";

const Follow: React.FC = () => {
  return (
    <section className="relative h-full w-full bg-[#fff] px-4 pt-2 md:px-12 md:pt-16">
      <div className="flex flex-col gap-10 md:gap-24">
        <div className="flex flex-col items-center justify-center gap-2 md:hidden">
          <div></div>
        </div>
        <div className="flex flex-col">
          <div className="flex w-full flex-col bg-[#fff] md:flex-row">
            <div className="grid w-full grid-cols-1 gap-4 bg-[#fff] md:grid-cols-3">
              <Image
                src={"/images/home/follow/image1.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
              <Image
                src={"/images/home/follow/image2.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
              <div className="flex items-center justify-center bg-[#0A6657]">
                <p className="w-full max-w-[250px] py-12 font-sofia_sans text-lg font-[600] uppercase tracking-[2px] text-[#fff] md:text-2xl">
                  Follow us on Instagram for a sweet glimpse into our
                  handcrafted Syrian delights and latest creations!
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-3 bg-[#0A6657] py-12">
                <Image
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
              </div>
              <Image
                src={"/images/home/follow/image3.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
              <Image
                src={"/images/home/follow/image4.png"}
                width={281}
                height={74}
                alt="image"
                className="h-[300px] w-full object-cover md:h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
