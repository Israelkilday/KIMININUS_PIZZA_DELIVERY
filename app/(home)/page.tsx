import About from "../components/About";
import Banner from "../components/Banner";
import Pizza from "../components/Pizza";

const pizzas = [
  {
    id: 1,
    name: "Dom Carmelo",
    description:
      "Molho de tomate artesanal, calabresa suculenta, presunto fatiado, cebola, mussarela derretida e um toque de orégano.",
    image: "/capricciosa.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: "Mussarela",
    description:
      "Deliciosa pizza de mussarela com molho de tomate fresco, generosas camadas de mussarela derretida, fatias de tomate e orégano.",
    image: "/cheesy.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Mista",
    description:
      "A combinação clássica de mussarela, tomate e manjericão ganha um toque especial com o presunto parma e a rúcula.",
    image: "/hawaii.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: "Calabresa",
    description:
      "Molho de tomate artesanal, fatias de calabresa bem temperada, mussarela derretida, cebola fresca e orégano.",
    image: "/italian.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: "margherita",
    description:
      "Molho de tomate fresco, mussarela cremosa, parmesão gratinado, fatias de tomate maduro e um toque de orégano.",
    image: "/margherita.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: "Pepperoni",
    description:
      "Molho de tomate fresco, generosas fatias de pepperoni levemente picante, mussarela derretida e um toque de orégano.",
    image: "/pepperoni.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: "Frango",
    description:
      "Molho de tomate saboroso, pedaços suculentos de frango desfiado, mussarela derretida, milho crocante e orégano.",
    image: "/quattro-formaggi.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: "A moda da casa",
    description:
      "Molho de tomate especial, frango desfiado, calabresa, mussarela derretida, cebola, ervilha, pimentão e um toque de orégano.",
    image: "/quattro-stagioni.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: "Portuguesa",
    description:
      "Molho de tomate caseiro, presunto fatiado, cebola fresca, ovo cozido, ervilha, mussarela derretida e um toque de orégano.",
    image: "/tonno.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: "Vegetariana",
    description:
      "molho de tomate artesanal, uma generosa camada de mussarela, pimentões coloridos, cebola roxa, tomate fresco, brócolis e ervilhas.",
    image: "/vegetarian.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/mozzarella.png",
        name: "muçarela",
        price: 2,
      },
      {
        image: "/camarao.png",
        name: "camarão",
        price: 8,
      },
      {
        image: "/carne-do-sol.png",
        name: "carne do sol desfiada",
        price: 5,
      },
      {
        image: "/coca-cola.png",
        name: "Refrigerante 2L",
        price: 7,
      },
      {
        image: "/parmesan.png",
        name: "parmesão",
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <main>
      <Banner />

      <section className="container mx-auto">
        <h2 className="mt-10 text-center font-bangers text-4xl lg:mt-16 lg:text-[45px]">
          Nosso Cardápio de Pizzas
        </h2>

        <div className="mb-4 grid gap-[15px] pt-12 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 xl:gap-[30px]">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </div>
      </section>

      <About />
    </main>
  );
}
