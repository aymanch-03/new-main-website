import { TbSpiral } from "react-icons/tb";
import Image from "next/image";

import React, { useEffect, useRef, useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
const Immortalised = () => {
  const blackNft = [
    "/Website Images/Page 6 - Immortalised/1.png",
    "/Website Images/Page 6 - Immortalised/2.png",
    "/Website Images/Page 6 - Immortalised/3.png",
    "/Website Images/Page 6 - Immortalised/4.png",
    "/Website Images/Page 6 - Immortalised/5.png",
    "/Website Images/Page 6 - Immortalised/6.png",
    "/Website Images/Page 6 - Immortalised/7.png",
    "/Website Images/Page 6 - Immortalised/8.png",
  ];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledPartnerCats = shuffleArray(blackNft);
  // Shuffle the order

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const breakpoints = {
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  };
  return (
    <div className="container px-3 py-10 h-max mx-auto space-y-8 immortalised">
      <h1 className="font-primary lg:text-6xl text-5xl text-black text-center">
        Immortalised Cats
      </h1>
      <div className="py-3 px-5 gradientBg rounded-lg mx-auto text-center w-max font-secondary text-4xl text-bg shadow-xl">
        Coming soon
      </div>
      <p className="text-center md:w-2/3 mx-auto mt-6 lg:text-lg md:text-md w-full">
        Immortalizing you BVDCAT is an important in creating PFP that represents
        your style and personality. By doing so, you can be confident that no
        one else have an identical copy, making it truly unique to you.
      </p>
      <p className="text-center md:w-2/3 mx-auto mt-6 lg:text-lg md:text-md w-full">
        Immortaliszed Catsalso earn a [redacted] and encreased staking rewards.
      </p>
      <div className="font-secondary text-center mx-auto text-lg w-max flex items-center justify-center gap-4 border-2 cursor-pointer hover:text-purple transition-all duration-200 border-black rounded-full py-1 px-4">
        <TbSpiral size={20} className="text-purple" />
        Immortalise your cat
      </div>

      <Swiper
        breakpoints={breakpoints}
        // slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        loop={true}
        modules={[Navigation, Pagination]}
        className="mySwiper mx-auto h-max relative w-full overflow-visible !pb-16 !px-16 immortalized-swiper"
      >
        {blackNft.map((img, index) => {
          return (
            <>
              <SwiperSlide
                className="rounded-xl overflow-hidden shadow-lg border border-black h-max w-max"
                key={index}
              >
                <Image
                  width={600}
                  height={600}
                  src={img}
                  quality={100}
                  className="object-cover h-max w-max"
                  alt={""}
                />{" "}
              </SwiperSlide>
            </>
          );
        })}
        <div
          ref={navigationPrevRef}
          className="immortalizedNav w-max p-2 bg-bg  border-black border rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer hover:bg-bg/50 transition-all duration-900 ml-6"
        >
          <BsArrowLeftShort size={30} />
        </div>

        <div
          ref={navigationNextRef}
          className="immortalizedNav w-max p-2 bg-bg  border border-black rounded-full absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer hover:bg-bg/50 transition-all duration-500 -mr-6"
        >
          <BsArrowRightShort size={30} />
        </div>
        {/* <SwiperSlide className="rounded-xl overflow-hidden cardShadow border border-black">
            <div className="bg-bg text-black font-secondary text-3xl border-t-2 border-t-black h-max px-4 py-5 ">
              #3905
            </div>
          </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Immortalised;
