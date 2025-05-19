"use client";
import EmblaCarousel from "@/app/(section)/(special)/MenuCarousel";
import { useRestaurant } from "@/context/RestaurantContext";
import type { EmblaOptionsType } from "embla-carousel";
import { motion } from "framer-motion";

const OPTIONS: EmblaOptionsType = { loop: true };

const Special = ({}) => {
  const { modelData } = useRestaurant();
  return (
    <section className="relative flex h-full w-full justify-center bg-[#000] py-12">
      <div className="absolute right-[10%] top-[35%] hidden md:block">
        <p className="w-full max-w-[280px] text-center font-playfair text-sm font-[400] lowercase tracking-[1.8px] text-[#fff] md:text-start md:text-base">
          Explore our menu for a delicious selection of freshly prepared meals,
          from hearty breakfasts to indulgent treats.
        </p>
      </div>
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden"></div>
      <div className="flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-4 py-12">
        <div className="flex w-full flex-col items-center justify-center gap-3 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col items-center justify-center gap-4 pb-4 md:flex-row md:gap-0 md:pb-6">
                <motion.h5
                  className="text-center font-playfair text-5xl font-[500] uppercase tracking-[-4px] text-[#fff] md:text-7xl"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Our signatures{" "}
                </motion.h5>
                <motion.p
                  className="w-full max-w-[350px] text-center font-playfair text-sm font-[400] lowercase tracking-[1.8px] text-[#fff] md:hidden md:text-start md:text-base"
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  Explore our menu for a delicious selection of freshly prepared
                  meals, from hearty breakfasts to indulgent treats.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-50 flex min-h-[400px] w-full flex-col justify-center px-2">
          {modelData && <EmblaCarousel slides={modelData} options={OPTIONS} />}
        </div>
      </div>
    </section>
  );
};

export default Special;
