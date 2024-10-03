import About from "../components/About";
import Banner from "../components/Banner";
import Pizza from "../components/Pizza";

// pizza data
const pizzas = [
  {
    id: 1,
    name: "Dom Carmelo",
    description:
      "Molho de tomate artesanal, calabresa suculenta, presunto fatiado, cebola, mussarela derretida e um toque de orégano. Uma combinação robusta e cheia de sabor para quem gosta de intensidade",
    image: "/capricciosa.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 2,
    name: "Mussarela",
    description:
      "Deliciosa pizza de mussarela com molho de tomate fresco, generosas camadas de mussarela derretida, fatias de tomate suculento e um toque especial de orégano.",
    image: "/cheesy.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Mista",
    description:
      "A combinação clássica de mussarela, tomate e manjericão ganha um toque especial com o presunto parma e a rúcula, criando uma sinfonia de sabores que vai te conquistar",
    image: "/hawaii.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 4,
    name: "Calabresa",
    description:
      "Molho de tomate artesanal, fatias de calabresa bem temperada, mussarela derretida, cebola fresca e orégano.  Uma escolha saborosa e marcante para quem aprecia sabores intensos.",
    image: "/italian.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 5,
    name: "margherita",
    description:
      "Molho de tomate fresco, mussarela cremosa, parmesão gratinado, fatias de tomate maduro e um toque de orégano. Uma combinação clássica e leve que agrada todos os gostos.",
    image: "/margherita.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 6,
    name: "Pepperoni",
    description:
      "Molho de tomate fresco, generosas fatias de pepperoni levemente picante, mussarela derretida e um toque de orégano. Uma escolha clássica e irresistível.",
    image: "/pepperoni.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 7,
    name: "Frango",
    description:
      "Molho de tomate saboroso, pedaços suculentos de frango desfiado, mussarela derretida, milho crocante e orégano. Uma opção deliciosa e equilibrada para quem busca algo especial.",
    image: "/quattro-formaggi.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 8,
    name: "A moda da casa",
    description:
      "Molho de tomate especial, frango desfiado, calabresa, mussarela derretida, cebola, ervilha, pimentão e um toque de orégano. Uma combinação única e irresistível.",
    image: "/quattro-stagioni.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 9,
    name: "Portuguesa",
    description:
      "Molho de tomate caseiro, presunto fatiado, cebola fresca, ovo cozido, ervilha, mussarela derretida e um toque de orégano. Uma mistura rica e tradicional que agrada a todos.",
    image: "/tonno.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
  {
    id: 10,
    name: "Vegetariana",
    description:
      "molho de tomate artesanal, uma generosa camada de mussarela, pimentões coloridos, cebola roxa, tomate fresco, brócolis e ervilhas, finalizada com um toque de orégano.",
    image: "/vegetarian.webp",
    priceSm: 17.99,
    priceMd: 21.99,
    priceLg: 25.99,
    toppings: [
      {
        image: "/cherry.png",
        name: "cherry tomatoes",
        price: 2,
      },
      {
        image: "/corn.png",
        name: "corn",
        price: 2,
      },
      {
        image: "/fresh-tomatoes.png",
        name: "fresh tomatoes",
        price: 2,
      },
      {
        image: "/jalapeno.png",
        name: "jalapeno",
        price: 2,
      },
      {
        image: "/parmesan.png",
        name: "parmesan",
        price: 2,
      },
    ],
  },
];

export default function Home() {
  return (
    <section>
      <Banner />

      <div className="container mx-auto">
        <h2 className="mt-10 text-center font-bangers text-4xl">
          Nosso Cardápio de Pizzas
        </h2>

        {/* pizza grid */}
        <div className="grid gap-[15px] py-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px]">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </div>
      </div>

      <About />
    </section>
  );
}
