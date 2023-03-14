import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import bvdLogo from "../public/Website Images/Page 1 - Landing/bvdLogo.png";

const Footer = () => {
  return (
    <div className="container md:px-1 px-6 mx-auto py-8">
      <section className="grid md:grid-cols-2 grid-cols-1 pb-20">
        <main className="space-y-10 block md:px-0 px-6 items-center">
          <Image
            width={180}
            height={180}
            src={bvdLogo}
            alt="BVD LOGO"
            quality={100}
          />{" "}
          <div className="flex justify-start gap-6">
            <Link href="/" className="group">
              <BsTwitter
                size={20}
                className="group-hover:text-[#1DA1F2] transition-all duration-800"
              />
            </Link>
            <Link href="/" className="group">
              <BsDiscord
                size={20}
                className="group-hover:text-[#7289DA] transition-all duration-800"
              />
            </Link>
          </div>
        </main>
        <main className="flex md:justify-end justify-center md:px-0 px-9 pt-10 md:gap-20 gap-10 items-start">
          <div>
            <h1 className="font-primary md:text-3xl text-2xl text-left mb-5">
              Apps
            </h1>
            <div className="flex justify-start items-start gap-14">
              <ul className="space-y-3">
                <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                  <Link href="/">Staking</Link>
                </li>
                <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                  <Link href="/">Gacha</Link>
                </li>
                <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                  <Link href="/">Trait Swap</Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                  <Link href="/">Burn</Link>
                </li>
                <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                  <Link href="/">Market</Link>
                </li>
                <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                  <Link href="/">Rarity</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="font-primary md:text-3xl text-2xl text-left mb-5">
              Info
            </h1>
            <ul className="space-y-3">
              <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                <Link href="/">BVDLABs</Link>
              </li>
              <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                <Link href="/">Team</Link>
              </li>
              <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                <Link href="/">Whitepaper</Link>
              </li>
              <li className="hover:text-black/80 relative footerLinks md:text-md text-sm font-semibold">
                <Link href="/">BVDLABs Gitbook</Link>
              </li>
            </ul>
          </div>
        </main>
      </section>
      <section
        className="border-t-2 border-black/70 flex md:flex-row
       flex-col-reverse md:justify-between py-8 "
      >
        <p className="text-sm text-center md:text-left">
          2023 Be Very Different. All right reserved.
        </p>
        <div className="flex gap-6 justify-center md:justify-end">
          <Link href="/" className="underline underline-offset-2 text-sm">
            Privacy Policy
          </Link>
          <Link href="/" className="underline underline-offset-2 text-sm">
            Terms of Service
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
