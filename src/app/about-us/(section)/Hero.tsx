import Image from "next/image";

const Hero = ({}) => {
  return (
    <section
      id="hero"
      className="flex w-full items-center justify-center bg-[#000] py-6 lg:py-12"
    >
      <div className="relative flex min-h-[100vh] w-full items-center justify-center">
        <div className="flex w-full flex-col gap-6 px-4 lg:flex-row lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <div className="mt-20 flex flex-col items-start gap-6 lg:mt-0 lg:w-8/12">
              <h1 className="font-playfair text-5xl font-semibold text-[#fff] md:leading-[66px] lg:text-6xl">
                Welcome to Emesa Sweets
                <br /> A Journey of Sweet Elegance
              </h1>
              <p className="font-inter font-normal text-[#fff]">
                At Emesa Sweets, every treat is a tribute to timeless traditions
                and exquisite taste. From premium ingredients to artisanal
                recipes passed down through generations, we offer a luxurious
                experience rooted in the heart of Middle Eastern confectionery.
                Whether you`re savoring delicate baklava, rich maamoul, or our
                signature handcrafted delights, each bite is a moment of joy,
                crafted with passion, authenticity, and love.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 md:mt-16 lg:w-1/2">
            <Image
              src="/images/about-us/2.jpg"
              width={951}
              height={975}
              alt="hero"
              className="h-full max-h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
