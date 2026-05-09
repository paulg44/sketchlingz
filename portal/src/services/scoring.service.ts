import { getFunctions, httpsCallable } from 'firebase/functions';
import { app } from '../core/config/firebase';
import type { ScoreLabel } from '../core/types/score';

interface CompareImagesResponse {
  score: string;
}

export const calculateScore = async (
  base64String: string,
  itemName: string,
): Promise<ScoreLabel | null> => {
  const fns = getFunctions(app);
  const compareImages = httpsCallable<
    { userImage: string; randomImageName: string },
    CompareImagesResponse
  >(fns, 'compareImages');

  const result = await compareImages({ userImage: base64String, randomImageName: itemName });
  return result.data.score.trim() as ScoreLabel;
};
