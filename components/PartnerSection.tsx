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
const PartnerSection = () => {
  const partnerCats = [
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Alpha Pharoahs.png",
      title: "ALPHA PHAROAHS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Atadia.png",
      title: "ATADIA",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Baby Ape Social Club.png",
      title: "BABY APE",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Bear Marketers.png",
      title: "BEAR MARKETERS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Broccoli DAO.png",
      title: "BROCOLI DAO",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Buddiezz.png",
      title: "BUDDIEZZ",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Creck Cafe.png",
      title: "CRECK CAFE",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Crenshaw.png",
      title: "CRENSHAW",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Dead Kings Society.png",
      title: "DEAD KINGS SOCIETY",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Degods DAOs.png",
      title: "DEGODS DAOS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Fat Cat Capital.png",
      title: "FAT CAT CAPITAL",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Ghost Kid DAO.png",
      title: "GHOST KID DAO",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Ghostface.png",
      title: "GHOSTFACE",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Gore Cats.png",
      title: "GORE CATS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Jelly Dino DAO.png",
      title: "JELLY DINO DAO",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Nekozuma.png",
      title: "NEKOZUMA",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Oak Paradise.png",
      title: "OAK PARADISE",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Parrot Tools.png",
      title: "PARROT TOOLS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Primates DAOs.png",
      title: "PRIMATES DAOS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Primus DAO.png",
      title: "PRIMUS DAO",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Project Dolphin.png",
      title: "PROJECT DOLPHIN",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Reptilian Renegade.png",
      title: "REPTILIAN RENEGADE",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Sol City Poker.png",
      title: "SOL CITY POKER",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Stoned Ape Crew DAOs.png",
      title: "STONED APE CREW DAOS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Taiyo Robotics.png",
      title: "TAIYO ROBOTICS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Trippin Ape Tribe.png",
      title: "TRIPPIN APE TRIBE",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Trust Labs.png",
      title: "TRUST LABS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Udder Chaos.png",
      title: "UDDER CHAOS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Y00ts DAOs.png",
      title: "Y00TS DAOS",
    },
    {
      imageSrc:
        "/Website Images/Page 3 - Partnerships/Partner Section/Partner Cats/Yaku.png",
      title: "YAKU",
    },
  ];
  // Shuffle the order
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledPartnerCats = shuffleArray(partnerCats);
  // Shuffle the order

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const breakpoints = {
    2500: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    2100: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  };

  return (
    <div className="mx-auto bg-partnerBg bg-no-repeat bg-contain md:bg-left overflow-hidden">
      <section className="lg:flex items-center block justify-between w-full mb-20 lg:ml-[38%] md:ml-[35%] container mt-0  md:mt-28 mx-auto">
        <Swiper
          breakpoints={breakpoints}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          loop={true}
          modules={[Navigation, Pagination]}
          className="mySwiper mx-auto h-max relative w-3/4 md:overflow-hidden overflow-visible !py-[60px] md:!px-[15px] !px-8"
        >
          {shuffledPartnerCats.map(
            ({ imageSrc, title }: any, index: React.Key | null | undefined) => {
              return (
                <>
                  <SwiperSlide
                    className="rounded-xl overflow-hidden shadow-lg border border-black h-max w-max"
                    key={index}
                  >
                    <Image
                      width={600}
                      height={600}
                      src={imageSrc}
                      alt={title}
                      quality={100}
                      className="object-cover h-max w-max"
                    />{" "}
                    <div className="bg-bg text-black font-secondary md:text-2xl text-xl border-t-2 border-t-black px-3 py-2 overflow-visible">
                      {title}
                    </div>
                  </SwiperSlide>
                </>
              );
            }
          )}
          <div
            ref={navigationPrevRef}
            className=" w-max p-2 bg-bg  border-black border rounded-full absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer hover:bg-bg/50 transition-all duration-900 ml-6"
          >
            <BsArrowLeftShort size={30} />
          </div>

          <div
            ref={navigationNextRef}
            className=" w-max p-2 bg-bg  border border-black rounded-full absolute right-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer hover:bg-bg/50 transition-all duration-500 -mr-6"
          >
            <BsArrowRightShort size={30} />
          </div>
          {/* <SwiperSlide className="rounded-xl overflow-hidden cardShadow border border-black">
            <div className="bg-bg text-black font-secondary text-3xl border-t-2 border-t-black h-max px-4 py-5 ">
              #3905
            </div>
          </SwiperSlide> */}
        </Swiper>
      </section>
    </div>
  );
};

export default PartnerSection;
