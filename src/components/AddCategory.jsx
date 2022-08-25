import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState("One Punch");
  const onInputChange = ({ target }) => {
    console.log(target.value);
    setinputValue(target.value);
  };
  return (
    <input
      type="text"
      placeholder="Buscar gif"
      value={inputValue}
      onChange={onInputChange}
    />
  );
};
