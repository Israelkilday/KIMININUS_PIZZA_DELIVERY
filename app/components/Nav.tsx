import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute w-full py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-3 lg:flex-row">
        {/* logo */}
        <Link href="#" className="max-w-[160px] lg:max-w-max">
          <h2 className="font-bangers text-4xl uppercase text-white">
            kimi<span className="text-yellow-300">ninus</span>
          </h2>
        </Link>

        {/* phone & cart */}
        <div className="flex items-center gap-x-8">
          {/* phone */}
          <div className="flex items-center gap-x-3">
            <Image src={"phone.svg"} width={42} height={42} alt="phone_image" />
          </div>

          <div className="text-white">
            <div className="font-robotoCondensed text-sm font-medium uppercase leading-none">
              24/7 Pizza delivery service
            </div>

            <div className="font-robotoCondensed text-3xl font-extrabold leading-none tracking-wide">
              920 234 5768
            </div>
          </div>

          {/* cart */}
          <div className="relative hidden cursor-pointer lg:flex">
            <Image src={"bag.svg"} width={38} height={38} alt="bag_image" />

            {/* amount */}
            <div className="absolute -bottom-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-tertiary font-robotoCondensed text-[13px] text-white">
              3
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
