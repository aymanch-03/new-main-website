/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Image from "next/image";
const Apps = () => {
  const appSquares1 = [
    {
      imageSrc: "/Website Images/Page 2 - Apps/App Squares/Gacha.png",
      title: "Gacha",
    },
    {
      imageSrc: "/Website Images/Page 2 - Apps/App Squares/Rarity.png",
      title: "Rarity",
    },
    {
      imageSrc: "/Website Images/Page 2 - Apps/App Squares/Market.png",
      title: "Market",
    },
    {
      imageSrc: "/Website Images/Page 2 - Apps/App Squares/Burn.png",
      title: "Burn",
    },
  ];
  const appSquares2 = [
    {
      imageSrc: "/Website Images/Page 2 - Apps/App Squares/Trait Swapper.png",
      title: "Trait Swapper",
    },
    {
      imageSrc: "/Website Images/Page 2 - Apps/App Squares/Staking.png",
      title: "Staking",
    },
  ];
  const Card1 = ({ imageSrc, title }: any) => (
    <div className="overflow-hidden shadow-xl cursor-pointer rounded-2xl w-full md:w-[300px] h-[300px] border-2 border-black bg-no-repeat bg-cover bg-center relative group z-50">
      <Image
        src={imageSrc}
        alt={title}
        fill
        quality={100}
        className="contrast-[0.7] brightness-[1.3] object-cover"
      />
      <h2 className="absolute rounded-xl bottom-2 left-2 bg-black/80 text-white font-primary py-1 px-2 text-4xl transition-all duration-200 group-hover:left-4">
        {title}
      </h2>
    </div>
  );
  const Card2 = ({ imageSrc, title }: any) => (
    <div className="overflow-hidden shadow-xl cursor-pointer rounded-2xl w-full md:w-[300px] h-[300px] border-2 border-black bg-no-repeat bg-cover bg-center relative group z-50">
      <Image
        src={imageSrc}
        alt={title}
        fill
        quality={100}
        className="contrast-[0.7] brightness-[1.3] object-cover"
      />
      <div className="absolute rounded-xl bottom-2 left-2 bg-black/80 text-white font-primary py-1 px-2 text-4xl transition-all duration-200 group-hover:left-4">
        {title}
      </div>
    </div>
  );
  return (
    <div className="h-max w-full relative gradient">
      <div className="topGrad absolute w-full top-0 h-20 z-20"></div>

      <div className=" bg-backgroundApps bg-no-repeat bg-cover bg-center absolute h-full w-full z-0"></div>
      <main className="container px-3 py-20 mx-auto relative z-10">
        <section className="grid xl:grid-cols-2 grid-cols-1 w-full h-full items-center justify-between mx-auto place-items-center gap-3">
          <div className="space-y-8 w-full">
            <h1 className="font-primary lg:text-7xl md:text-6xl md:leading-[4.5rem]  xl:ml-[70px] text-5xl text-black lg:leading-[6rem] leading-[3rem] xl:text-left text-center">
              Once you go BVD, <br />
              You never go back.
            </h1>
            <button className="flex xl:mx-0 justify-center mx-auto text-center font-primary xl:ml-[70px] text-primary border-2 border-primary rounded-full bg-bg px-9 py-3 text-xl hover:bg-primary hover:text-bg transition-all duration-600">
              Buy & join us
            </button>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 h-full gap-3 xl:place-items-end place-items-center lg:px-0 px-7">
              {appSquares2.map(({ imageSrc, title }: any, index) => (
                <Card2 key={index} imageSrc={imageSrc} title={title} />
              ))}
            </div>
          </div>
          <div className="md:grid-cols-2 grid grid-cols-1 mx-auto items-center justify-between gap-3 w-full h-full xl:place-items-end place-items-center	lg:px-0 px-7">
            {appSquares1.map(({ imageSrc, title }: any, index) => (
              <Card1 key={index} imageSrc={imageSrc} title={title} />
            ))}
          </div>
        </section>
      </main>
      <div className="bottomGrad absolute w-full bottom-0 h-32 z-20"></div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Apps), { ssr: false });
