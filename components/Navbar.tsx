import Image from "next/image";
import bvdLogo from "../public/Website Images/Page 1 - Landing/bvdLogo.png";
import { IoIosMenu } from "react-icons/io";
import dynamic from "next/dynamic";
const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto flex justify-between items-center py-1 px-3">
        <Image
          src={bvdLogo}
          width={150}
          height={150}
          alt="Logo"
          className="cursor-pointer lg:w-[150px] md:w-[120px] w-[100px] "
        />
        <div className="flex items-center justify-center gap-x-6">
          <button className="text-primary border-primary border-2 px-6 py-2 lg:text-lg text-md rounded-full font-primary hover:bg-primary hover:text-bg transition-all duration-600">
            Connect Wallet
          </button>
          <IoIosMenu size={23} className="text-primary cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
