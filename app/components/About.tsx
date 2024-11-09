import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCheck, FaPizzaSlice } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const About = () => {
  return (
    <main>
      <h2 className="mb-6 hidden items-center justify-center font-bangers text-[45px] lg:flex">
        {" "}
        Sobre Nós
      </h2>

      <section className="relative h-screen w-full pt-4 lg:container md:pt-12 lg:mb-24 lg:mt-4 lg:h-[500px] lg:pt-0">
        <Image
          alt="Agende nos melhores com FSW Barber"
          src="/banner-about.jpg"
          fill
          priority
          quality={100}
          className="object-cover brightness-50 lg:rounded-xl"
        />

        <div className="absolute flex flex-col px-6 py-10 md:w-3/4 md:py-0 lg:w-2/3 lg:px-10 lg:py-16">
          <h2 className="mb-4 pt-5 text-center font-bangers text-4xl text-white md:mb-5 md:pt-0 md:text-left lg:mb-6 lg:hidden lg:pt-1 lg:text-[45px]">
            {" "}
            Sobre Nós
          </h2>

          <div className="flex flex-col border-l-2 border-yellow-400 pl-4">
            <p className="mb-4 font-medium text-white lg:mb-5 lg:text-lg">
              Desde 2023, a Kimininu&apos;s traz a autêntica pizza napolitana da
              pizza direto para a sua casa! Com um cardápio variado e
              ingredientes frescos, nosso objetivo é oferecer uma experiência
              única em cada mordida, combinando sabor, qualidade e conveniência.
            </p>

            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-y-4">
                <li>
                  <p className="flex items-center gap-2 font-medium text-white lg:text-lg">
                    <FaPizzaSlice className="bg-gradient size-10 text-yellow-400 sm:size-7 lg:size-6" />
                    Variedade: pizzas clássicas e especiais que agradam todos os
                    paladares.
                  </p>
                </li>

                <li>
                  <p className="flex items-center gap-2 font-medium text-white lg:text-lg">
                    <TbTruckDelivery className="size-11 text-yellow-400 sm:size-8 lg:size-8" />{" "}
                    Delivery rápido: entregamos na sua porta com rapidez e
                    cuidado.
                  </p>
                </li>

                <li>
                  <p className="flex items-center gap-2 font-medium text-white lg:pb-1 lg:text-lg">
                    <FaCheck className="size-12 text-yellow-400 sm:size-8 lg:size-7" />{" "}
                    Qualidade artesanal: nossas pizzas são preparadas com
                    ingredientes frescos e selecionados.
                  </p>
                </li>
              </ul>

              <p className="mb-16 font-medium text-white md:mb-5 lg:mb-12 lg:text-lg">
                {" "}
                Venha experimentar o sabor de Kimininu&apos;s e faça seu pedido
                agora!
              </p>
            </div>

            <span className="cursor-pointer font-medium uppercase text-white duration-150 hover:text-yellow-400">
              <a
                href="https://www.instagram.com/kimininus_pizzaria_delivery/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FaArrowUpRightFromSquare className="size-6 text-yellow-400 lg:size-7" />
                <span className="lg:text-lg">Saiba Mais</span>
              </a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
