import Image from "next/image";
const Landing = () => {
  return (
    <div className="relative lg:h-[82vh] md:h-[72vh] h-[62vh] lg:my-32 md:my-24 my-14">
      <main className="bg-background bg-no-repeat bg-cover lg:bg-[32%_0%] bg-[45%_0%] w-full h-full relative">
        <div className="absolute bg-beDifferent lg:-bottom-12 md:-bottom-8 -bottom-4 w-full lg:h-[230px] md:h-[200px] h-[170px] bg-contain bg-no-repeat bg-center"></div>
      </main>
    </div>
  );
};

export default Landing;
