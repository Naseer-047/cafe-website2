import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { menuItems } from '../../data/menu';
import ProductShowcase from './ProductShowcase';
import ProductDetailsCard from './ProductDetailsCard';

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = menuItems.find(p => p.id === id);

  if (!product) {
    return <Navigate to="/menu" replace />;
  }

  return (
    <motion.div 
      className="w-full h-screen bg-[#050505] font-inter overflow-hidden relative flex flex-col lg:flex-row"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* LEFT COLUMN: Showcase (60%) */}
      <div className="w-full lg:w-[60%] h-[50vh] lg:h-screen relative">
        <ProductShowcase product={product} />
      </div>

      {/* RIGHT COLUMN: Details (40%) */}
      <div className="w-full lg:w-[40%] h-[50vh] lg:h-screen overflow-y-auto bg-[#050505] relative z-20 pb-10 sm:pb-0">
        <ProductDetailsCard product={product} />
      </div>

    </motion.div>
  );
}
