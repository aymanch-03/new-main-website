/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import Image from "next/image";
import magicEden from "../public/Website Images/Page 5 - Links/magic-eden-logo.png";
import catA from "../public/Website Images/Page 5 - Links/cat_A.png";
import catB from "../public/Website Images/Page 5 - Links/cat_B.png";
import catC from "../public/Website Images/Page 5 - Links/cat_C.png";
import catLogo from "../public/Website Images/Page 5 - Links/catLOGO.png";
import fff from "../public/Website Images/Page 5 - Links/fff.svg";
import dynamic from "next/dynamic";

const Links = () => {
  return (
    <div className="container mx-auto py-72">
      <main className="grid place-items-center gap-6 text-bg  lg:px-0 md:px-7 px-10 relative">
        <section className="relative max-w-[900px] h-max rounded-xl border-2 border-black p-9 bg-darkYellow shadow-xl  block md:flex items-center gap-5">
          <div className="space-y-5">
            <h1 className="font-secondary text-3xl">buy BVDCATS</h1>
            <p>
              Join a supportive and inclusive community that celebrates
              individuality. Get access to exclusive events, limied time
              collaborations with your favourite brands, and more.
            </p>
          </div>
          <div className="md:mt-0 mt-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border-2 border-black bg-bg w-full hover:bg-bg/80 duration-900 transition-all"
            >
              <Image
                src={magicEden}
                width={20}
                height={20}
                alt="Magic Eden Logo"
              />
              <p className="font-secondary whitespace-nowrap text-black pt-0.5 text-lg">
                buy on magic eden
              </p>
            </Link>
          </div>
          <Image
            src={catA}
            width={150}
            height={150}
            alt="CatA"
            className="absolute lg:-right-9 lg:-top-[190px] lg:w-[150px] md:right-[-26px] md:-top-[154px] md:w-[120px] -top-[128px] right-0 w-[100px]"
          />
          <Image
            src={catC}
            width={200}
            height={200}
            alt="CatA"
            className="absolute lg:-left-12 lg:-top-[230px] lg:w-[200px] md:-top-[204px] md:left-8 md:w-[170px] top-[-152px] left-0 w-[130px]"
          />
        </section>
        <section className="relative max-w-[900px] h-max rounded-xl border-2 border-black p-9 bg-purple shadow-xl  block md:flex items-center gap-5">
          <div className="space-y-5">
            <h1 className="font-secondary text-3xl">stake & get $rep</h1>
            <p>
              $REP is a token people use to get cool stuff. you can never have
              too much of it because we're dropping cool stuff all the time.
              Stake your BVDCATs and start earning $Rep.
            </p>
          </div>
          <div className="space-y-3 md:mt-0 mt-4">
            <Link
              href="/"
              className="flex  items-center justify-center gap-2 px-6 py-2 rounded-full border-2 border-black bg-bg w-full hover:bg-bg/80 duration-900 transition-all"
            >
              <Image src={catLogo} width={20} height={20} alt="BVDCATs LOGO" />
              <p className="font-secondary whitespace-nowrap text-black pt-0.5 text-lg">
                stake your BVDCAT
              </p>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-2 rounded-full border-2 border-black bg-bg w-full hover:bg-bg/80 duration-900 transition-all"
            >
              <Image src={fff} width={20} height={20} alt="FFF LOGO" />
              <p className="font-secondary whitespace-nowrap text-black pt-0.5 text-lg">
                buy on FFF
              </p>
            </Link>
          </div>
        </section>
        <section className="relative max-w-[900px] h-max rounded-xl border-2 border-black p-9 bg-primary shadow-xl  block md:flex items-center gap-5">
          <div className="space-y-5">
            <h1 className="font-secondary text-3xl">trait swap</h1>
            <p>
              Customizing your PFP should be easy and fun, so we made it that
              way. Using our trait swap you can mix and match over a billion
              trait combinations including trait collaborations with all your
              favourite brands and artists.
            </p>
          </div>
          <div className="md:mt-0 mt-4">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-[45px] py-2 rounded-full border-2 border-black bg-bg w-full hover:bg-bg/80 duration-900 transition-all"
            >
              <Image src={catLogo} width={20} height={20} alt="BVDCATs LOGO" />
              <p className="font-secondary whitespace-nowrap text-black pt-0.5 text-lg">
                trait swap
              </p>
            </Link>
          </div>
          <Image
            src={catB}
            width={150}
            height={150}
            alt="CatA"
            className="absolute lg:-left-[124px] lg:-top-[190px] lg:w-[150px] md:w-[120px] md:left-[-99px] md:-top:[219px] left-[-83px] -top-[174px] w-[100px]"
          />
        </section>
      </main>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Links), { ssr: false });
