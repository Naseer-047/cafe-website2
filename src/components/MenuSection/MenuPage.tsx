import Navbar from "../Navbar";
import CategoryTabs from "./CategoryTabs";
import MenuGrid from "./MenuGrid";
import ComboBanner from "./ComboBanner";
import { useState } from "react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("BURGERS");

  return (
    <div className="relative w-full min-h-screen bg-[#050505] font-inter">
      {/* 
        Optional very subtle texture on the whole background, similar to the ContactFooter.
        The reference image seems pure black/dark charcoal, so we keep it minimal.
      */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay fixed"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}
      ></div>

      <div className="relative z-10 w-full mx-auto flex flex-col">
        <Navbar />
        <div className="pt-[88px] flex flex-col w-full">
          {/* Hero removed as requested */}
        </div>
        <CategoryTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <MenuGrid activeCategory={activeCategory} />
      </div>
    </div>
  );
}
