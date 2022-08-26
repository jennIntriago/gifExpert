// API KEY LyvFDyDlgKw8xqONqZWMoukU5AOl5SYb

import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGif";

export const GrifGid = ({ category }) => {
  const [counter, setcounter] = useState(10);

  useEffect(() => {
    getGif(category);
  }, []);
  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setcounter(counter + 1)}>+1</button>
    </>
  );
};
