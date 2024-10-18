import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary bg-pattern px-2 py-10 lg:pt-14">
      <div className="container">
        <div className="flex flex-col justify-around gap-y-4 lg:flex-row">
          <div className="mb-2 flex flex-col gap-y-4 lg:flex-row lg:gap-x-28">
            {/* logo */}
            <Link href="/" className="max-w-[160px] lg:max-w-max">
              <h2 className="text-left font-bangers text-5xl uppercase text-white">
                kimi<span className="text-yellow-300">ninu&apos;s</span>
              </h2>

              <p className="mb-1 text-center font-robotoCondensed text-lg uppercase text-white">
                pizzaria - delivery
              </p>
            </Link>

            {/* social icons */}
            <section>
              <h3 className="font-semi-bold text-white">
                Nos siga nas nossas redes sociais
              </h3>

              <ul className="flex gap-x-6 pt-3 text-xl text-white">
                <li>
                  <Link href="/" className="duration-150 hover:text-yellow-400">
                    <FaYoutube className="size-9" />
                  </Link>
                </li>

                <li>
                  <Link href="/" className="duration-150 hover:text-yellow-400">
                    <FaFacebook className="size-8" />
                  </Link>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/kimininus_pizzaria_delivery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-150 hover:text-yellow-400"
                  >
                    <FaInstagram className="size-8" />
                  </a>
                </li>

                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=5585989908470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-150 hover:text-yellow-400"
                  >
                    <FaWhatsapp className="size-8" />
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="flex flex-col gap-y-1 text-white">
            <h2 className="font-robotoCondensed text-lg font-semibold uppercase">
              Funcionamento
            </h2>

            <p>De quarta a segunda-feira</p>
            <p>Horário: 18:00 às 23:00</p>
          </div>

          <div className="flex flex-col gap-y-1 text-white lg:pb-2">
            <h2 className="font-robotoCondensed text-lg font-semibold uppercase">
              Sede
            </h2>

            <p>Rua: Seixas Correia 642</p>
            <p>Fortaleza CE</p>
            <p>60520-795</p>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-4 border-t pt-4 text-left font-medium text-white lg:pt-6">
          <a
            href="https://portfolioikdev-zeta-nine.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Copyright: &copy;{" "}
            <span className="font-logoGuys duration-150 hover:text-yellow-400">
              Israel Kilday
            </span>{" "}
          </a>
          2024.
          <br className="lg:hidden" /> Todos os direitos Reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
