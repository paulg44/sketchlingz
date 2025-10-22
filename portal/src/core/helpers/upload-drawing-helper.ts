import { getFunctions, httpsCallable } from 'firebase/functions';

export const uploadDrawingHelper = async (imageBase64: string, category: string) => {
  const functions = getFunctions();
  const saveImage = httpsCallable(functions, 'saveImage');

  try {
    const result = await saveImage({ imageBase64, category });

    return result.data; // { imageUrl: string, imageId: string }
  } catch (error) {
    console.error('Error uploading drawing:', error);
    throw error;
  }
};
