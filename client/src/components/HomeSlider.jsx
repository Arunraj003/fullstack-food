import { motion } from "framer-motion";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "./Slider";
import SliderCard from "../components/SliderCard";

const HomeSlider = () => {
  const [category, setCategory] = useState("fruits");
  const products = useSelector((state) => state.products || []);

  const topThreeProducts = products.slice(20, 23);

  return (
    <motion.div className="w-full flex flex-col items-start justify-start">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">
            Our Fresh & Healthy Fruits
          </p>
          <div className="w-40 h-1 rounded-md bg-orange-500"></div>
        </div>
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-4 flex-1 mt-4">
        {topThreeProducts.map((product, index) => (
          <SliderCard key={index} data={product} index={index} />
        ))}
      </div>

      <Slider />
    </motion.div>
  );
};

export default HomeSlider;
