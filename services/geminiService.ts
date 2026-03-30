import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateWorkoutTip = async (goal: string): Promise<string> => {
  if (!apiKey) {
    return "Configure sua API Key para receber dicas personalizadas de IA.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Você é um personal trainer experiente e motivador (estilo coach Gabriel Alc).
      Dê uma dica CURTA, direta e acionável (máximo 2 frases) para alguém que tem o objetivo de: "${goal}".
      Termine com um emoji de força.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 100,
      }
    });

    return response.text || "Mantenha a constância e beba água! 💪";
  } catch (error) {
    console.error("Erro ao gerar dica:", error);
    return "O foco é o mais importante. Continue treinando! 🏋️‍♂️";
  }
};
