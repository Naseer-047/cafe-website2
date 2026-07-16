import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import LocationList from "./LocationList";
import InteractiveMap from "./InteractiveMap";
import CateringBanner from "./CateringBanner";

export default function LocationSection() {
  return (
    <section id="locations" className="relative w-full bg-[#050505] py-[120px] flex flex-col items-center overflow-hidden">
      
      {/* 2% SVG Noise Texture */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px'
        }}
      ></div>

      <div className="w-full max-w-[1440px] px-6 sm:px-12 lg:px-16 relative z-10 flex flex-col">
        
        {/* Centered Heading */}
        <SectionHeading 
          label="VISIT US" 
          titleWhite="FIND YOUR" 
          titleYellow="NEAREST MA'ONO." 
          subtitle="Dine-in, takeout, or order online from your nearest location."
        />

        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[48px] w-full mt-4 lg:mt-8">
          
          {/* Left Column */}
          <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col shrink-0 min-w-0">
            <LocationList />
          </div>

          {/* Right Column */}
          <div className="w-full lg:flex-1 h-full lg:min-h-0 flex flex-col min-w-0">
            <InteractiveMap />
          </div>
          
        </div>

        {/* Full Width Catering Banner */}
        <CateringBanner />

      </div>
    </section>
  );
}
