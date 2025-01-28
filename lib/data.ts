import { Product } from "@/types"

export const categories = [
  {
    id: 1,
    name: "LP Gas",
    icon: "🔥",
    image: "",
    products: [
      {
        id: 1,
        name: "12.5kg Gas Cylinder",
        price: 49.99,
        image: "",
        description: "Standard household gas cylinder, perfect for cooking and heating.",
      },
      {
        id: 2,
        name: "5kg Portable Gas Cylinder",
        price: 29.99,
        image: "",
        description: "Lightweight and portable, ideal for camping and outdoor activities.",
      },
    ],
  },
  {
    id: 2,
    name: "Mining",
    icon: "⛏️",
    image: "",
    products: [
      {
        id: 3,
        name: "ASIC Miner S19 Pro",
        price: 1999.99,
        image: "",
        description: "High-performance Bitcoin mining machine with excellent hash rate.",
      },
    ],
  },
  {
    id: 3,
    name: "Crypto",
    icon: "₿",
    image: "",
    products: [
      {
        id: 4,
        name: "Hardware Wallet",
        price: 79.99,
        image: "/assets/img-6.jpg",
        description: "Secure cold storage for your cryptocurrency.",
      },
    ],
  },
  {
    id: 4,
    name: "Solar",
    icon: "☀️",
    image: "",
    products: [
      {
        id: 4,
        name: "Hardware Wallet",
        price: 79.99,
        image: "/assets/img-6.jpg",
        description: "Secure cold storage for your cryptocurrency.",
      },
    ],
  },
]

export const topSales = [
  {
    id: 1,
    name: "LP Gas",
    icon: "⛽",
    image: "/assets/img-2.jpg",
    description: "Get 20% off on all gas cylinders this weekend!",
  },
  {
    id: 2,
    name: "Mining",
    icon: "⛏️",
    image: "/assets/img-12.jpg",
    description: "Complete mining setup at a special price",
  },
  {
    id: 3,
    name: "Crypto",
    icon: "₿",
    image: "",
    description: "Everything you need to start your crypto journey",
  },
  {
    id: 4,
    name: "Solar",
    icon: "☀️",
    image: "/assets/",
    description: "Limited time offers on selected items",
  },
]

export const orders = [
  {
    id: "ORD001",
    date: "2024-01-28",
    status: "Delivered",
    items: [{ productId: 1, quantity: 2, price: 49.99 }],
    total: 99.98,
  },
  {
    id: "ORD002",
    date: "2024-01-27",
    status: "Processing",
    items: [{ productId: 3, quantity: 1, price: 1999.99 }],
    total: 1999.99,
  },
]

export const products: Product[] = [
  {
    id: 1,
    name: "Premium LP Gas Cylinder",
    price: 99.99,
    rating: 4.5,
    reviews: 128,
    image:
      "/assets/img-1.jpg",
    category: "LP Gas",
    badge: "Best Seller",
    description: "High-quality LP gas cylinder for all your cooking needs. Safe, durable, and efficient.",
  },
  {
    id: 2,
    name: "Mining Rig Pro",
    price: 1299.99,
    rating: 4.8,
    reviews: 89,
    image:
      "/assets/img-4.jpg",
    category: "Mining",
    badge: "New",
    description:
      "Professional-grade mining rig for cryptocurrency enthusiasts. High performance, low power consumption.",
  },
  {
    id: 3,
    name: "Hardware Wallet",
    price: 79.99,
    rating: 4.7,
    reviews: 256,
    image:
      "/assets/img-6.jpg",
    category: "Crypto",
    badge: "Popular",
    description:
      "Secure your cryptocurrencies with this state-of-the-art hardware wallet. Easy to use and highly secure.",
  },
  {
    id: 4,
    name: "Gas Stove Bundle",
    price: 199.99,
    rating: 4.6,
    reviews: 167,
    image:
      "/assets/img-3.jpg",
    category: "LP Gas",
    badge: "Value Pack",
    description:
      "Complete gas stove bundle including a high-efficiency stove and necessary accessories. Perfect for your kitchen.",
  },
  {
    id: 5,
    name: "Solar Panel Kit",
    price: 599.99,
    rating: 4.9,
    reviews: 203,
    image:
      "/assets/img-4.jpg",
    category: "Solar",
    badge: "Eco-Friendly",
    description:
      "Harness the power of the sun with this comprehensive solar panel kit. Easy to install and highly efficient.",
  },
  {
    id: 6,
    name: "Crypto Mining Book",
    price: 24.99,
    rating: 4.5,
    reviews: 78,
    image:
      "/assets/img-5.jpg",
    category: "Crypto",
    badge: "Bestseller",
    description:
      "Learn the ins and outs of cryptocurrency mining with this comprehensive guide. Perfect for beginners and experts alike.",
  },
]
