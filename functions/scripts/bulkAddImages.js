import admin from "firebase-admin";
import { readFileSync } from "node:fs";

const serviceAccount = JSON.parse(
  readFileSync("./scripts/serviceAccountKey.json", "utf-8"),
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Edit this array when adding new images
const images = [
  {
    name: "Bear",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fbear.png.png?alt=media&token=ce376e30-4411-4f2e-aad8-0a593303f6ed",
    categoryId: "animals",
    altText: "A cute cartoon brown bear",
    difficulty: "easy",
  },
  {
    name: "Cat",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fcat.png?alt=media&token=598491b0-d725-47b5-8506-476c4583f435",
    categoryId: "animals",
    altText: "A cute cartoon ginger cat",
    difficulty: "medium",
  },
  {
    name: "Cow",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fcow.png.png?alt=media&token=cdd23132-dd40-40a4-a919-ef976c56c272",
    categoryId: "animals",
    altText: "A cute cartoon black and white cow",
    difficulty: "medium",
  },
];

const bulkAddImages = async () => {
  const batch = db.batch();

  images.forEach((image) => {
    // change collection name if needed
    const docRef = db.collection("animalItems").doc();
    batch.set(docRef, {
      ...image,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  });

  try {
    await batch.commit();
    console.log("Images added successfully!");
  } catch (error) {
    console.error("Error adding images: ", error);
  }
};

bulkAddImages();
