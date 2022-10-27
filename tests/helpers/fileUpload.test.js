import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
  cloud_name: 'cursos9901',
  api_key: '288542441597738',
  api_secret: 'Qu5KFLwt5PRlGPWnkzTu4eQO1u0',
  secure: true,
})

describe('Pruebas en fileUpload', () => { 
    test('Debe de subir el archivo correctamente a cloudinayr', async() => { 
        const imageUrl =
          'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
          const resp = await fetch(imageUrl);
          const blob = await resp.blob();
          const file = new File([blob], 'foto.jpg');

          
          const url = await fileUpload(file);
          expect(typeof url).toBe('string');

          //console.log(url)
          const segments = url.split('/')
          const imageId = segments[segments.length - 1].replace('.png', '')
          await cloudinary.api.delete_resources(['journal-app/'+imageId], {resource_type: 'image'})
     });

     test('Debe de retornar null', async() => { 
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
      })
 });