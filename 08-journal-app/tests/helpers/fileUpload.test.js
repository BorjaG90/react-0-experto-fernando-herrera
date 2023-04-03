import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dcqmfu23z',
  api_key: '248159243498919',
  api_secret: 'fpcVVmbfbbUTkKNSvNW-q1eHIlY',
  secure: true
});

describe('Pruebas en carga de archivos', () => {
  test('debe de subir el archivo correctamente a Cloudinary', async() => {
    const imageURL = 'https://images.unsplash.com/photo-1602357280104-742c517a1d82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=950&q=80';
    const resp = await fetch(imageURL);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');
    const url = await fileUpload (file);

    expect(typeof url).toBe('string');

    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');
    const folderName = "journal"
    const cloudResp = await cloudinary.api.delete_resources(
      [`${folderName}/${imageId}`],
      {resource_type: 'image'}
    );
    // console.log({cloudResp});
  });

  test('debe de retornar null', async () => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload (file);

    expect(url).toBe(null);
  });
});
