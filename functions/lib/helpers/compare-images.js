import { onCall, HttpsError } from "firebase-functions/v2/https";
import { genAI } from "../ai/ai.js";
const buildPrompt = (itemName) => `
A child (age 8) drew this. I want you to score the drawing out of 100 for how well it represents a ${itemName}. I am looking for a drawing that accurately captures the _shape_ of a ${itemName}.

I want you to be accurate when you do the analysis on this image of a ${itemName}.

A _perfect_ ${itemName} drawing (100 points) would have:
- The characteristic features of a ${itemName}.
- The elements should be roughly equally spaced or arranged as expected for a ${itemName}.
- The lines should be relatively straight and form a closed shape (if applicable).
- The overall shape should be clearly recognizable as a ${itemName} and not resemble any other shape.

A _good_ ${itemName} drawing (70-90 points) would have:
- The characteristic features of a ${itemName}, but they might not be perfectly executed.
- The shape is still recognizable as a ${itemName}.

A _mediocre_ ${itemName} drawing (40-60 points) might:
- Have some characteristic features, but they might be very uneven or poorly connected.
- The shape might be somewhat ambiguous but still hint at a ${itemName}.

A _bad_ ${itemName} drawing (1-39 points) would:
- Not clearly have the characteristic features of a ${itemName}.
- The shape is not recognizable as a ${itemName}. It might be a scribble, a line, or resemble something else entirely.

If the drawing is just a scribble, a single line, or resembles something other than a ${itemName}, give it a very low score (below 20).

Return only one word or phrase: "Excellent" for scores over 95, "Great" for scores between 80-94, "Good" for scores between 60-79, or "Try Again" for anything below 59. Nothing else.`;
export const compareImages = onCall(async (request) => {
    const { userImage, randomImageName } = request.data;
    if (!userImage || !randomImageName) {
        throw new HttpsError("invalid-argument", "Missing userImage or randomImageName");
    }
    try {
        const response = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: buildPrompt(randomImageName) },
                        { inlineData: { mimeType: "image/png", data: userImage } },
                    ],
                },
            ],
        });
        const scoreText = response.text?.trim() ?? "Try Again";
        return { score: scoreText };
    }
    catch (error) {
        console.error("Gemini API error:", error);
        throw new HttpsError("internal", "Failed to score drawing");
    }
});
//# sourceMappingURL=compare-images.js.map