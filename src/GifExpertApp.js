import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "Stars",
    "Flowers",
    "Cupcakes",
  ]);

  const handleAdd = (newCategory) => {
    if (!newCategory || newCategory === "") return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h2>Gif Expert App</h2>
      <hr />
      <AddCategory handleAdd={handleAdd} />
      {categories.map((category) => (
          <GifGrid key={category} category={category}>{category}</GifGrid>
      ))}
    </>
  );
};

export default GifExpertApp;
