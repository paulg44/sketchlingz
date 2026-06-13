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
    name: "Crocodile",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fcrocodile.png.png?alt=media&token=65b52873-4be1-4d25-b8eb-95d739fad824",
    categoryId: "animals",
    altText: "A cute cartoon green crocodile",
    difficulty: "hard",
  },
  {
    name: "Deer",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fdeer.png.png?alt=media&token=ae7016e7-8d27-4c57-a94c-dccf3f04eace",
    categoryId: "animals",
    altText: "A cute cartoon bambi like deer",
    difficulty: "medium",
  },
  {
    name: "Dog",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fdog.png.png?alt=media&token=5b29fd4b-db5e-48e0-b0d9-ed98d7b2be32",
    categoryId: "animals",
    altText: "A cute cartoon brown and white dog with collar and tag",
    difficulty: "easy",
  },
  {
    name: "Duck",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fduck.png.png?alt=media&token=6d2989e6-a0f2-4a9e-b3ba-9a4decc8e569",
    categoryId: "animals",
    altText: "A cute cartoon yellow duck with orange beak",
    difficulty: "easy",
  },
  {
    name: "Elephant",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Felephant.png.png?alt=media&token=a77d7441-8b90-4cd3-ae75-c07cde1506b0",
    categoryId: "animals",
    altText: "A cute cartoon grey elephant with big ears and trunk",
    difficulty: "medium",
  },
  {
    name: "Fox",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Ffox.png.png?alt=media&token=589a9e10-d3be-4b23-ad51-06362fad57bb",
    categoryId: "animals",
    altText: "A cute cartoon fox with orange fur and white belly",
    difficulty: "medium",
  },
  {
    name: "Giraffe",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fgiraffe.png.png?alt=media&token=4000f9f6-ec4c-433e-b855-fdf384d9700e",
    categoryId: "animals",
    altText: "A cute cartoon giraffe with yellow and brown spots and long neck",
    difficulty: "medium",
  },
  {
    name: "Goose",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fgoose.png.png?alt=media&token=17116fef-388e-480d-9ce0-f6fb2274eb65",
    categoryId: "animals",
    altText: "A cute cartoon white goose with orange beak and feet",
    difficulty: "easy",
  },
  {
    name: "Hen",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fhen.png.png?alt=media&token=0ced9d3e-fb8a-403e-8d98-055d3342e085",
    categoryId: "animals",
    altText:
      "A cute cartoon multicolored hen with red comb and yellow beak and a blue feathered tail",
    difficulty: "hard",
  },
  {
    name: "Hippopotamus",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fhippo.png.png?alt=media&token=8f34940d-fffd-4c1a-8590-87dc775ce320",
    categoryId: "animals",
    altText: "A cute cartoon hippopotamus with purple skin and big teeth",
    difficulty: "medium",
  },
  {
    name: "Horse",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fhorse.png.png?alt=media&token=0abd3107-7580-4c61-92de-431ce167bcb5",
    categoryId: "animals",
    altText: "A cute cartoon horse with brown fur and dark brown mane and tail",
    difficulty: "medium",
  },
  {
    name: "Lion",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Flion.png.png?alt=media&token=9e052bd4-c0ae-4151-9845-f8ab19acd7a7",
    categoryId: "animals",
    altText: "A cute cartoon Lion with yellow fur and big orange mane",
    difficulty: "medium",
  },
  {
    name: "Monkey",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fmonkey.png.png?alt=media&token=0dc63cca-4342-4352-9d78-8e910c318242",
    categoryId: "animals",
    altText: "A cute cartoon Monkey with brown fur and long tail",
    difficulty: "medium",
  },
  {
    name: "Mouse",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fmouse.png.png?alt=media&token=6ab56587-56a2-444a-82be-6a01a4b0e997",
    categoryId: "animals",
    altText: "A cute cartoon white mouse with pink ears, paws and tail",
    difficulty: "easy",
  },
  {
    name: "Owl",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fowl.png.png?alt=media&token=9b4a5dee-3526-4fea-8cd6-b021e7374c64",
    categoryId: "animals",
    altText:
      "A cute cartoon owl with brown feathers and big yellow eyes and feet",
    difficulty: "hard",
  },
  {
    name: "Panda",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fpanda.png.png?alt=media&token=cb0cbf24-f9db-41c4-9f3c-edf68867bf22",
    categoryId: "animals",
    altText:
      "A cute cartoon black and white panda with round ears and big eyes",
    difficulty: "easy",
  },
  {
    name: "Parrot",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fparrot.png.png?alt=media&token=ba1e3394-1327-493c-87f9-5e77862377d0",
    categoryId: "animals",
    altText:
      "A cute cartoon multicolored parrot with red, blue and green feathers and a curved beak",
    difficulty: "medium",
  },
  {
    name: "Pig",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fpig.png.png?alt=media&token=fb9974a2-668c-4e1f-8c7f-84782654a968",
    categoryId: "animals",
    altText:
      "A cute cartoon pig with pink skin and a curly tail and a big snout",
    difficulty: "easy",
  },
  {
    name: "Pigeon",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fpigeon.png.png?alt=media&token=5a28ad17-a29a-4ec6-973d-d5cf33d8f06e",
    categoryId: "animals",
    altText:
      "A cute cartoon pigeon with grey feathers and a white belly and a small beak",
    difficulty: "medium",
  },
  {
    name: "Rabbit",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Frabbit.png.png?alt=media&token=f03a5212-316c-45ec-a945-7df41c0496f9",
    categoryId: "animals",
    altText:
      "A cute cartoon rabbit with white fur and long ears and a fluffy tail and pink nose",
    difficulty: "easy",
  },
  {
    name: "Racoon",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fracoon.png.png?alt=media&token=3b0fbb40-e9f9-4bc4-a214-70fbf1361a65",
    categoryId: "animals",
    altText:
      "A cute cartoon racoon with grey fur and black mask around its eyes and a bushy tail with black rings",
    difficulty: "hard",
  },
  {
    name: "Sheep",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fsheep.png.png?alt=media&token=d0fc9ec8-24b1-428f-8440-214fc0e33a4a",
    categoryId: "animals",
    altText:
      "A cute cartoon fluffy white sheep with a round body and a small face and legs",
    difficulty: "easy",
  },
  {
    name: "Turtle",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fturtle.png.png?alt=media&token=39fb50cf-3bfa-43e5-9b55-5b84f1805763",
    categoryId: "animals",
    altText:
      "A cute cartoon turtle with a brown shell and green skin and a large head and legs",
    difficulty: "medium",
  },
  {
    name: "Tiger",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Ftiger.png.png?alt=media&token=b29235cc-dc5c-48cb-9aa0-b0f685f5db42",
    categoryId: "animals",
    altText:
      "A cute cartoon striped orange tiger with black stripes and a white belly and a long tail",
    difficulty: "hard",
  },
  {
    name: "Zebra",
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/sketchlingz.firebasestorage.app/o/images%2Fanimals%2Fzebra.png.png?alt=media&token=637ce050-692f-4946-8f10-a7da23b53712",
    categoryId: "animals",
    altText:
      "A cute cartoon zebra with black and white stripes and a short mane and tail and a small snout",
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
