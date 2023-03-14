import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";
const Team = () => {
  const purpleMembers = [
    {
      imageSrc: "/Website Images/Page 8 - Team/HellboyJae.png",
      memberName: "HELLBOYJAE",
      role: "FOUNDER",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/MississippiRich.png",
      memberName: "MISSISSIPPI RICH",
      role: "CORE TEAM",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Dozy.png",
      memberName: "DOZY",
      role: "CORE TEAM",
    },
  ];
  const goldenMembers = [
    {
      imageSrc: "/Website Images/Page 8 - Team/Blueyy.png",
      memberName: "BLUEYY",
      role: "PARTNERSHIPS",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Khepri.png",
      memberName: "KHEPRI",
      role: "DEVELOPER",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/SpacePanda.png",
      memberName: "SPACEPANDA",
      role: "COMMUNITY MANAGER",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Gig.png",
      memberName: "GIG",
      role: "COMMUNITY MANAGER",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Duskkeyy.png",
      memberName: "DUSKKEY",
      role: "COMMUNITY MANAGER",
    },
  ];
  const bvdLabsMembers = [
    {
      imageSrc: "/Website Images/Page 8 - Team/Jilly.png",
      memberName: "JILLY",
      role: "BVDLABS CEO",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Blair Grylls.png",
      memberName: "BLAIR GRYLLS",
      role: "BVDLABS CTO",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Reece.png",
      memberName: "REECE",
      role: "PRODUCT DESIGN",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Jack.png",
      memberName: "JACK",
      role: "SENIOR DEVELOPER",
    },
    {
      imageSrc: "/Website Images/Page 8 - Team/Jacob.png",
      memberName: "JACOB",
      role: "SENIOR DEVELOPER",
    },
  ];

  return (
    <div className="container md:px-1 px-10 py-32 mx-auto space-y-6">
      <p className="text-xl font-secondary">Tagline</p>
      <h1 className="text-5xl font-primary">BVD team</h1>
      <main className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {purpleMembers.map(({ imageSrc, memberName, role }, index) => {
          return (
            <div
              className="rounded-2xl border-2 border-black shadow-xl overflow-hidden"
              key={index}
            >
              <div className="purpleGradient w-full h-max overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={imageSrc}
                  alt={memberName}
                  quality={100}
                  className="object-cover h-full w-full"
                />{" "}
              </div>
              <div className="px-4 py-4 border-t-2 bg-bg border-t-black space-y-1">
                <div className=" text-black md:text-2xl text-xl    flex justify-between items-center">
                  <p className="font-secondary">{memberName}</p>
                  <Link href="/" className="group">
                    <BsTwitter
                      size={20}
                      className="group-hover:text-[#1DA1F2] transition-all duration-800"
                    />
                  </Link>{" "}
                </div>
                <div className="font-secondary text-xl">{role}</div>
              </div>
            </div>
          );
        })}{" "}
      </main>
      <main className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {goldenMembers.map(({ imageSrc, memberName, role }, index) => {
          return (
            <div
              className="rounded-2xl border-2 border-black shadow-xl overflow-hidden"
              key={index}
            >
              <div className="goldenGradient w-full h-max overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={imageSrc}
                  alt={memberName}
                  quality={100}
                  className="object-cover h-full w-full"
                />{" "}
              </div>
              <div className="px-4 py-4 border-t-2 bg-bg border-t-black space-y-1">
                <div className=" text-black md:text-2xl text-xl    flex justify-between items-center">
                  <p className="font-secondary">{memberName}</p>
                  <Link href="/" className="group">
                    <BsTwitter
                      size={20}
                      className="group-hover:text-[#1DA1F2] transition-all duration-800"
                    />
                  </Link>
                </div>
                <div className="font-secondary text-xl">{role}</div>
              </div>
            </div>
          );
        })}{" "}
      </main>
      <h1 className="text-5xl font-primary !mt-10">BVDLabs team</h1>
      <main className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {bvdLabsMembers.map(({ imageSrc, memberName, role }, index) => {
          return (
            <div
              className="rounded-2xl border-2 border-black shadow-xl overflow-hidden"
              key={index}
            >
              <div className="redGradient w-full h-max overflow-hidden">
                <Image
                  width={500}
                  height={500}
                  src={imageSrc}
                  alt={memberName}
                  quality={100}
                  className="object-cover h-full w-full"
                />{" "}
              </div>
              <div className="px-4 py-4 border-t-2 bg-bg border-t-black space-y-1">
                <div className=" text-black md:text-2xl text-xl    flex justify-between items-center">
                  <p className="font-secondary">{memberName}</p>
                  <Link href="/" className="group">
                    <BsTwitter
                      size={20}
                      className="group-hover:text-[#1DA1F2] transition-all duration-800"
                    />
                  </Link>
                </div>
                <div className="font-secondary text-xl">{role}</div>
              </div>
            </div>
          );
        })}{" "}
      </main>
    </div>
  );
};

export default Team;
