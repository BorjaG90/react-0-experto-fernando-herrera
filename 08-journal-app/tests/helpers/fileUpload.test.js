import { fileUpload } from "../../src/helpers/fileUpload";

describe('Pruebas en carga de archivos', () => {
  test('debe de subir el archivo correctamente a Cloudinary', async() => {
    const imageURL = 'https://images.unsplash.com/photo-1602357280104-742c517a1d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80';
    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.png');
    const url = await fileUpload (file);

    expect(typeof url).toBe('string');
  });
});
