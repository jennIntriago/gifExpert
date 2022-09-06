import { getGif } from "../../src/helpers/getGif";

describe("Pruebas de getGif()", () => {
  test("Debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGif("One Punch");
    // console.log(gifs);
    // =============toBeGreaterThan(0) comprara que haya más de un valor=======
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
