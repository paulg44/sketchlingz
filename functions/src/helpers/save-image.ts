import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const saveImage = functions.https.onCall(async (request, context) => {
  const { imageData, imageName } = request.data as {
    imageData: string;
    imageName: string;
  };

  if (!imageData || !imageName) {
    throw new functions.https.HttpsError(
      "invalid-argument",
      "Missing imageData or imageName"
    );
  }
});
