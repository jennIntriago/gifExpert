import { useState } from "react";
import { AddCategory, GrifGid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      <h1 className="title">GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GrifGid key={category} category={category} />
      ))}
    </>
  );
};
