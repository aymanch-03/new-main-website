import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className=" w-full px-2.5 bg-streetCorner flex items-center relative bg-no-repeat bg-cover object-fill bg-center mt-20">
      <div className="topGrad absolute w-[100%] left-0 top-0 h-48 z-0"></div>
      {/* <div className="leftGrad absolute w-[80%] top-0 h-full z-0"></div> */}
      <section className="container pt-10 pb-20 relative z-10 mx-auto md:-rotate-1 overflow-hidden lg:block flex justify-center items-center">
        <main className="md:max-w-[600px] w-max h-max">
          <div className="borderGrad font-secondary bg-bg/80 space-y-5 text-black/80">
            <p className="text-lg">tagline</p>
            <p className="font-primary text-4xl">#WEBVD</p>
            <section className="space-y-9 text-justify">
              <p className="md:text-xl text-lg">
                <span className="bvd md:text-3xl text-2xl ">B</span>
                <span className="bvd md:text-3xl text-2xl">V</span>
                <span className="bvd md:text-3xl text-2xl">D</span> is more than
                a brand; it's a family where artists, builders, and beleivers
                can come together, united by a shred goal: be very different.{" "}
                <br />
                it means being part of a mouvement that sets new standards for
                creativity, innovation and collaboration, creating a lifestyle
                with friends who will become family, making memories while
                making history, and showing up no matter what the future throws
                at us.{" "}
              </p>
              <p className="md:text-xl text-md">
                <span className="text-darkYellow">We</span> understand that
                people are not just looking for high-quality art L they want to
                be part of a community that values collaboration. That’s why
                we’re dedicated to creating a lifestyle where people can
                collaborate, grow, make memories, and make history.{" "}
              </p>
              <p className="md:text-xl text-md">
                <span className="text-purple">Our</span> commitment to building
                a strong community is evident in everything that we do. We
                encourage collaborations with artists, businesses, creatives,
                suppliers, and brands to create truly unique and innovating
                products. At BVD, creativity & individualty is something to be
                celebrated.
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

export default About;
