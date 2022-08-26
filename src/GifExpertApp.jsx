import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
// API KEY LyvFDyDlgKw8xqONqZWMoukU5AOl5SYb

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
    // setCategories((cat) => [...cat, "Valorant"]);

    console.log(categories);
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={(event) => onAddCategory(event)}
      />
      {/* Listado de gif*/}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* List item */}
    </>
  );
};
