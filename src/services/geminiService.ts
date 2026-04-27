import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY || '' 
});

export async function analyzeImage(base64Image: string, mimeType: string): Promise<AnalysisResult> {
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    Analyze this image and generate highly detailed, cinematic video generation prompts for the following camera perspectives:
    1. Cinematic Wide: Establish the scale and environment.
    2. Medium Close-up: Focus on facial expressions or key details of the subject.
    3. POV: As if seen through the eyes of someone in the scene.
    4. Tracking Shot: Following the subject as they move.
    5. Drone / Aerial: A high-altitude perspective showing the broader context.
    6. Low Angle Hero: Making the subject look powerful or imposing.
    7. Macro Detail: Extreme close-up on textures or specific small features.
    8. Crane / Jib Shot: A sweeping vertical or curved camera move.

    Your response must be in JSON format matching the following structure:
    {
      "subject": "Description of the main subject",
      "lighting": "Description of the lighting style",
      "environment": "Description of the environment",
      "prompts": [
        { "perspective": "Cinematic Wide", "prompt": "..." },
        ... for all 8 perspectives ...
      ]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          { inlineData: { data: base64Image, mimeType } },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subject: { type: Type.STRING },
            lighting: { type: Type.STRING },
            environment: { type: Type.STRING },
            prompts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  perspective: { type: Type.STRING },
                  prompt: { type: Type.STRING }
                },
                required: ["perspective", "prompt"]
              }
            }
          },
          required: ["subject", "lighting", "environment", "prompts"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) throw new Error("No response text received from AI");
    
    return JSON.parse(resultText) as AnalysisResult;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
}
