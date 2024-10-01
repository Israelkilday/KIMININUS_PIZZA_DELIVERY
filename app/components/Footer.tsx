import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern px-2 py-10">
      <div className="container">
        <div className="flex flex-col gap-y-4">
          {/* logo */}
          <Link href="/" className="max-w-[160px] lg:max-w-max">
            <h2 className="text-left font-bangers text-4xl uppercase text-white">
              kimi<span className="text-yellow-300">ninu&apos;s</span>
            </h2>

            <p className="mb-1 font-robotoCondensed uppercase text-white">
              pizzaria - delivery
            </p>
          </Link>

          {/* social icons */}
          <div className="flex gap-x-6 text-xl text-white">
            <a
              href="https://www.instagram.com/kimininus_pizzaria_delivery/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-150 hover:text-yellow-400"
            >
              <FaYoutube className="size-9" />
            </a>

            <a
              href="https://www.instagram.com/kimininus_pizzaria_delivery/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-150 hover:text-yellow-400"
            >
              <FaFacebook className="size-8" />
            </a>

            <a
              href="https://www.instagram.com/kimininus_pizzaria_delivery/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-150 hover:text-yellow-400"
            >
              <FaInstagram className="size-8" />
            </a>

            <a
              href="https://www.instagram.com/kimininus_pizzaria_delivery/"
              target="_blank"
              rel="noopener noreferrer"
              className="duration-150 hover:text-yellow-400"
            >
              <FaPinterest className="size-8" />
            </a>
          </div>

          <div className="flex flex-col gap-y-3">
            <h2 className="font-bold uppercase text-white">Sede</h2>

            <p>Rua: Seixas Correia 642</p>
            <p>Fortaleza CE</p>
            <p></p>
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
