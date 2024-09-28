import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = path.join(__dirname, 'public/img/galleries/gal6');
let files: string[];

try {
  files = fs.readdirSync(dir);
} catch (err) {
  process.exit(1);
}

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Función para procesar las imágenes con un límite de concurrencia
const getImages = async (files: string[]): Promise<Image[]> => {
  const images: Image[] = [];
  const limit = 5; // Limitar el número de archivos procesados simultáneamente

  for (let i = 0; i < files.length; i += limit) {
    const batch = files.slice(i, i + limit);

    // Procesar imágenes en pequeños grupos
    const batchPromises = batch.map(async (file): Promise<Image | null> => {
      const filePath = path.join(dir, file);
      try {
        if (!fs.existsSync(filePath)) {
          console.error(`File does not exist: ${filePath}`);
          return null;
        }

        const { width, height } = await sharp(filePath).metadata();
        return {
          src: `/img/galleries/gal6/${file}`,
          alt: file,
          width: width || 0,
          height: height || 0,
        };
      } catch (err) {
        console.error(`Error processing file ${file}: ${err.message}`);
        return null;
      }
    });

    // Esperar a que se resuelvan las promesas del grupo antes de continuar
    const batchResults = await Promise.all(batchPromises);
    images.push(...batchResults.filter((image): image is Image => image !== null));
  }

  return images;
};

// Función para generar las imágenes
const printYaml = async (files: string[]): Promise<void> => {
  try {
    const images = await getImages(files);
    console.log(images);
  } catch (err) {
    console.error(`Error generating images: ${err.message}`);
  }
};

printYaml(files);
