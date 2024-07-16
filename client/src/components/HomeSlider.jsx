import { motion } from "framer-motion";
import React from "react";
import { Slider, SliderCard } from "../components";

const HomeSlider = () => {
  // Mock data for demonstration
  const mockData = [
    {
      id: 1,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/food-delivery-june.appspot.com/o/Images%2F1721054363725_i3.png?alt=media&token=4b3aab22-3d97-406e-9788-8141f01b60bb",
      product_name: "Butterscotch Cone",
      product_category: "deserts",
      product_price: "120",
    },
    {
      id: 2,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/food-delivery-june.appspot.com/o/Images%2F1721055190940_r3.png?alt=media&token=01cba5e8-222e-4669-ae20-de529b356307",
      product_name: "Hyderbadi Biriyani",
      product_category: "rice",
      product_price: "210",
    },
    {
      id: 3,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/food-delivery-june.appspot.com/o/Images%2F1721023263966_c2.png?alt=media&token=23505d64-17b4-4c94-88cc-a9c8bf651bac",
      product_name: "Chicken 65",
      product_category: "chinese",
      product_price: "70",
    },
    {
      id: 4,
      imageURL: "https://firebasestorage.googleapis.com/v0/b/food-delivery-june.appspot.com/o/Images%2F1721045401522_cu1.png?alt=media&token=8b2dcf63-50c3-4a63-87a7-c2bf6a1a1ee3",
      product_name: "Butter Chicken Gravy",
      product_category: "curry",
      product_price: "150",
    }
  ];

  return (
    <motion.div className="w-full flex items-start justify-start flex-col">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="text-2xl text-headingColor font-bold">
            Our Fresh & Healthy Fruits
          </p>
          <div className="w-40 h-1 rounded-md bg-orange-500">
            <SliderCard key={item.id} data={item} index={index} />
          </div>
        </div>
      </div>

      <Slider />
    </motion.div>
  );
};

export default HomeSlider;
