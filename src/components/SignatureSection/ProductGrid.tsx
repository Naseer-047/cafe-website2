import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    id: "hawaiian",
    title: "HAWAIIAN BURGER",
    description: "Crispy chicken, pineapple, lettuce, signature sauce.",
    price: "₹249",
    image: `${import.meta.env.BASE_URL}burger.png`,
    isBestseller: true,
  },
  {
    id: "crispy-chicken",
    title: "CRISPY CHICKEN",
    description: "Marinated for 24hrs. Crispy on the outside, juicy on the inside.",
    price: "₹199",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "loaded-fries",
    title: "LOADED FRIES",
    description: "Crispy fries loaded with cheese sauce, jalapenos & our signature seasoning.",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "tropical-shake",
    title: "TROPICAL SHAKE",
    description: "Mango, pineapple & cream blended to tropical perfection.",
    price: "₹149",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1000&auto=format&fit=crop",
  }
];

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function ProductGrid() {
  return (
    <motion.div 
      variants={gridVariants}
      className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 z-10 relative mb-16"
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </motion.div>
  );
}
