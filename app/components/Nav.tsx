"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartContext } from "../context/CartContext";

const Nav = () => {
  const { isOpen, setIsOpen, itemAmount } = useCartContext();

  return (
    <nav className="absolute w-full py-8">
      <section className="container mx-auto mb-10 flex flex-col items-center justify-between gap-y-3 lg:flex-row">
        <Link href="/" className="max-w-[160px] lg:max-w-max">
          <h2 className="text-left font-bangers text-5xl uppercase text-white">
            kimi<span className="text-yellow-300">ninu&apos;s</span>
          </h2>
          <p className="mb-1 text-center font-robotoCondensed text-lg uppercase text-white">
            pizzaria - delivery
          </p>
        </Link>

        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-3">
            <Image src={"phone.svg"} width={42} height={42} alt="phone_image" />
          </div>

          <div className="text-white">
            <div className="font-robotoCondensed text-sm font-medium uppercase leading-none"></div>

            <div className="font-robotoCondensed text-3xl font-extrabold leading-none tracking-wide">
              (85) 98990-8470
            </div>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="relative hidden cursor-pointer lg:flex"
          >
            <Image src={"bag.svg"} width={38} height={38} alt="bag_image" />

            <div className="absolute -bottom-2 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-tertiary font-robotoCondensed text-[13px] text-white">
              {itemAmount}
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
