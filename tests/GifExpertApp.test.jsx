import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en el componente <GifExpertApp />", () => {
  test("debe servir", () => {
    // second;
    render(<GifExpertApp />);

    // ::::::Hay que hacer la prueba de la funcionalidad onAddCategory
    // ::::::Esta es una tarea
    screen.debug();
  });
});
