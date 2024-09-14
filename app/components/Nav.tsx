import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute w-full py-8">
      <div className="conatainer mx-auto">
        {/* logo */}
        <Link href="#">
          <h2 className="pl-[15px] font-bangers text-4xl uppercase text-white">
            kimi<span className="text-yellow-300">ninus</span>
          </h2>
        </Link>

        {/* phone & cart */}
        <div>
          {/* phone */}
          <div>
            <Image src={"phone.svg"} width={42} height={42} alt="phone_image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
