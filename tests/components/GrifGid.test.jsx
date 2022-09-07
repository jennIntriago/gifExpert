import { render, screen } from "@testing-library/react";
import { GrifGid } from "../../src/components/GrifGid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//Esta funcion hace un mock completo de este path
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GrifGid />", () => {
  const category = "One Punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GrifGid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imagenes mediante el useFetchGif", () => {
    const gifs = [
      {
        id: "abc",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GrifGid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
