import * as functions from "firebase-functions";
import { getAIModel } from "../ai/ai.js";

interface CompareImagesData {
  userImage: string;
  randomImageName: string;
}

export const compareImages = functions.https.onCall(
  async (request, context) => {
    const { userImage, randomImageName } = request.data as CompareImagesData;

    if (!userImage || !randomImageName) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "Missing userImage or randomImageName"
      );
    }

    const model = await getAIModel();

    const prompt = `A child (age 8) drew this. Score how well it represents a ${randomImageName} out of 100.
Return only one of: "Excellent", "Great", "Good", or "Try Again".`;

    const imageParts = {
      inlineData: { data: userImage.split(",")[1] },
      mimeType: "image/png",
    };

    try {
      const result: any = await (model as any).generateContent([
        prompt,
        imageParts,
      ]);
      const response = await result?.content?.toString().trim();

      return { score: response };
    } catch (error) {
      console.error("Error generating AI content:", error);
      throw new functions.https.HttpsError(
        "internal",
        "Error generating AI content"
      );
    }
  }
);
