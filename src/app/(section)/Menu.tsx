import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    name: "Apple Juice",
    price: 4.0,
  },
  {
    name: "Americano",
    price: 2.99,
  },
  {
    name: "Cheese with Eggs",
    price: 2.99,
  },
  {
    name: "Chocolate Milkshake",
    price: 4.99,
  },
  {
    name: "Baba Ghanouj",
    price: 3.99,
  },
  {
    name: "Banana Split",
    price: 4.99,
  },
  {
    name: "Arabic Ice Cream",
    price: 4.0,
  },
  {
    name: "Cupcakes",
    price: 3.0,
  },
];

const Menu: React.FC = () => {
  return (
    <section className="h-full w-full bg-[#fff] py-0 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row">
        {/* Left Image */}
        <div className="w-[100px] md:w-[15%]">
          <Image
            src={"/images/home/menu/left.png"}
            width={281}
            height={74}
            alt="left"
            className="h-[300px] w-full md:h-[660px] md:w-full"
          />
        </div>

        {/* Menu Items Section */}
        <div className="relative md:w-[70%]">
          {/* <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 px-4 md:ml-56 md:px-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start gap-2 pb-6"
              >
                <div className="flex w-full flex-row justify-between gap-6 md:gap-56">
                  <h1 className="font-poppins text-base font-[400] uppercase tracking-[2.5px] text-[#fff] md:text-lg">
                    {item.name}
                  </h1>
                  <h1 className="font-poppins text-base font-[400] uppercase tracking-[0.812px] text-[#fff] md:text-lg">
                    ${item.price}
                  </h1>
                </div>

                <p className="font-poppins text-sm font-[300] text-[#fff] md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div> */}

          <div className="absolute inset-0 ml-16 flex w-full flex-col items-start justify-center gap-4 px-4 md:ml-44 md:px-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-start justify-start gap-2 pb-6"
              >
                {/* Name & Price */}
                <div className="flex w-full items-center">
                  <h1 className="w-[40%] font-poppins text-base font-[400] uppercase tracking-[2.5px] text-white md:text-lg">
                    {item.name}
                  </h1>
                  <h1 className="w-[20%] text-right font-poppins text-base font-[400] uppercase tracking-[0.812px] text-white md:text-lg">
                    £{item.price}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Frame Image */}
          <Image
            src={"/images/home/menu/frame.png"}
            width={281}
            height={74}
            alt="frame"
            className="h-[800px] w-full md:h-[660px]"
          />
        </div>

        {/* Right Image */}
        <div className="flex h-[300px] w-full justify-end md:w-[15%]">
          <Image
            src={"/images/home/menu/right.png"}
            width={281}
            height={74}
            alt="right"
            className="h-[300px] w-[100px] md:h-[660px] md:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
