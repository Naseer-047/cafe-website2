export interface MenuItem {
  id: string;
  category: string;
  image: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  // BURGERS
  {
    id: "hawaiian",
    category: "BURGERS",
    image: "/burger.png",
    title: "HAWAIIAN BURGER",
    description: "Crispy chicken, grilled pineapple, slaw, spicy mayo, brioche bun.",
    price: "₹249",
    badge: "BEST SELLER"
  },
  {
    id: "spicy",
    category: "BURGERS",
    image: "/burger.png",
    title: "SPICY FIRE BURGER",
    description: "Crispy chicken, jalapeños, spicy mayo, lettuce, brioche bun.",
    price: "₹259",
    badge: "NEW"
  },
  {
    id: "classic",
    category: "BURGERS",
    image: "/burger.png",
    title: "CLASSIC BURGER",
    description: "Crispy chicken, lettuce, pickles, ma'ono sauce, brioche bun.",
    price: "₹199"
  },
  {
    id: "double",
    category: "BURGERS",
    image: "/burger.png",
    title: "DOUBLE CHEESE BURGER",
    description: "Double crispy chicken, cheese, pickles, onions, ma'ono sauce.",
    price: "₹299"
  },
  {
    id: "bbq",
    category: "BURGERS",
    image: "/burger.png",
    title: "SMOKEHOUSE BBQ",
    description: "Crispy chicken, onion rings, cheddar, smoky BBQ sauce.",
    price: "₹279"
  },

  // CHICKEN
  {
    id: "wings-6",
    category: "CHICKEN",
    image: "/combo for cart section.png",
    title: "6 PCS CRISPY WINGS",
    description: "Golden fried chicken wings tossed in your choice of sauce.",
    price: "₹199",
    badge: "POPULAR"
  },
  {
    id: "tenders-4",
    category: "CHICKEN",
    image: "/combo for cart section.png",
    title: "4 PCS CHICKEN TENDERS",
    description: "Juicy, boneless chicken tenders served with honey mustard.",
    price: "₹229"
  },
  {
    id: "bucket",
    category: "CHICKEN",
    image: "/combo for cart section.png",
    title: "FAMILY BUCKET",
    description: "12 pcs mixed chicken, perfect for sharing with family.",
    price: "₹699",
    badge: "VALUE"
  },

  // FRIES & SIDES
  {
    id: "fries-reg",
    category: "FRIES & SIDES",
    image: "/burger.png",
    title: "CLASSIC FRIES",
    description: "Crispy golden french fries salted to perfection.",
    price: "₹99"
  },
  {
    id: "fries-loaded",
    category: "FRIES & SIDES",
    image: "/burger.png",
    title: "LOADED CHEESE FRIES",
    description: "Fries topped with melted cheese, jalapeños, and special sauce.",
    price: "₹179",
    badge: "SPICY"
  },
  {
    id: "onion-rings",
    category: "FRIES & SIDES",
    image: "/burger.png",
    title: "CRISPY ONION RINGS",
    description: "Thick cut onion rings battered and fried until golden.",
    price: "₹129"
  },

  // DRINKS
  {
    id: "cola",
    category: "DRINKS",
    image: "/combo for cart section.png",
    title: "COCA COLA",
    description: "Chilled classic cola beverage (330ml).",
    price: "₹60"
  },
  {
    id: "lemonade",
    category: "DRINKS",
    image: "/combo for cart section.png",
    title: "FRESH LEMONADE",
    description: "House-made refreshing lemonade with mint.",
    price: "₹89",
    badge: "FRESH"
  },
  {
    id: "shake",
    category: "DRINKS",
    image: "/combo for cart section.png",
    title: "CHOCOLATE SHAKE",
    description: "Thick chocolate milkshake topped with whipped cream.",
    price: "₹149"
  },

  // DESSERTS
  {
    id: "sundae",
    category: "DESSERTS",
    image: "/burger.png",
    title: "CARAMEL SUNDAE",
    description: "Vanilla soft serve layered with rich caramel sauce.",
    price: "₹119"
  },
  {
    id: "brownie",
    category: "DESSERTS",
    image: "/burger.png",
    title: "FUDGE BROWNIE",
    description: "Warm, gooey chocolate fudge brownie.",
    price: "₹129",
    badge: "SWEET"
  }
];
