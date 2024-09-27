import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-6">
          {/* logo */}
          <Link href="/" className="max-w-[160px] lg:max-w-max">
            <h2 className="font-bangers text-4xl uppercase text-white">
              kimi<span className="text-yellow-300">ninus</span>
            </h2>
          </Link>

          {/* social icons */}
          <div className="flex gap-x-6 text-xl text-white">
            <Link href={"#"}>
              <FaYoutube />
            </Link>

            <Link href={"#"}>
              <FaFacebook />
            </Link>

            <Link href={"#"}>
              <FaInstagram />
            </Link>

            <Link href={"#"}>
              <FaPinterest />
            </Link>
          </div>

          {/* copyright */}
          <div className="text-center font-medium text-white">
            Copiright &copy; Israel Kilday 2024. Todos os direitos Reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
