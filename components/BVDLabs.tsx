import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const BVDLabs = () => {
  return (
    <div className="w-full bg-bvdLabs px-2.5 flex items-center relative bg-no-repeat bg-cover object-fill bg-center mt-20">
      {/* <div className="leftGrad absolute w-[80%] top-0 h-full z-0"></div> */}
      <section className="container py-32 relative z-10 mx-auto md:-rotate-1 overflow-hidden lg:block flex justify-center items-center">
        <main className="md:w-[600px] w-max">
          <div className="borderGrad bg-bg/80 space-y-5 text-black/80 font-secondary">
            <p className="text-lg">tagline</p>
            <p className="font-primary text-4xl ">BVDLABS</p>
            <section className="space-y-9">
              <p className="md:text-xl text-md">
                <span className="bvdlabs md:text-3xl text-2xl">BVDLABS </span>
                is a joint cooperation between BVDCAT & cryptocoders to create
                unique and innovative tech designed for software-as-a-service.
              </p>
              <p className="md:text-xl text-md">
                The objective of the BVDLABS partnership is to establish BVD as
                a self-sustaining project that ensures longevity with the skill
                and firepower to pivot and deliver success consistently.
              </p>
              <p className="md:text-xl text-md">
                Our key focus is seamless and efficient experience for our
                users. We offer a wide range of tools and features that help
                businesses streamline their gamification process, increase
                revenue, and stay ahead of the competition. Our trademark is
                making user-friendly interfaces that are simple to navigate,
                making it simple for even non-technical users to understand and
                utilize.
              </p>
              <p className="md:text-xl text-md">
                For software-as-a-service enquiries contact us on :
              </p>
            </section>
            <div className="md:flex md:flex-row grid gap-5 mx-auto">
              <button className="bg-purple py-3 px-12 rounded-[20px] text-xl md:text-2xl text-white border-2 border-black hover:bg-purple/70 duration-900 transition-all">
                <Link href="/">twitter</Link>
              </button>
              <button className="bg-darkYellow py-3 px-12 rounded-[20px] text-xl md:text-2xl text-white border-2 border-black hover:bg-darkYellow/70 duration-900 transition-all">
                <Link href="/">discord</Link>
              </button>
              <button className="bg-primary py-3 px-12 rounded-[20px] text-xl md:text-2xl text-white border-2 border-black hover:bg-primary/70 duration-900 transition-all">
                <Link href="/">gitbook</Link>
              </button>
            </div>
          </div>
        </main>
      </section>
      {/* <div className="bottomGrad absolute w-full bottom-0 h-28 z-0"></div> */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(BVDLabs), { ssr: false });
