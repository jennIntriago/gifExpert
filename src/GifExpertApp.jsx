import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GrifGid } from "./components/GrifGid";
// API KEY LyvFDyDlgKw8xqONqZWMoukU5AOl5SYb

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    //Preguntamos si la categoria existe. Si existe no hace nada, no lo inserta, si no existe lo inserta
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Valorant"]);

    console.log(categories);
  };
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={(event) => onAddCategory(event)} />

      {categories.map((category) => (
        <GrifGid key={category} category={category} />
      ))}
    </>
  );
};
