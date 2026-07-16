import Navbar from "./Navbar";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-inter bg-[#050505]"
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Navbar />

      <main className="relative z-10 w-full max-w-[14040px] mx-auto flex-1 flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-16 pt-[88px] pb-12 lg:py-0 min-h-[600px] lg:min-h-[calc(100vh-88px)]">
        <LeftContent />
        <RightContent />
      </main>
    </div>
  );
}
