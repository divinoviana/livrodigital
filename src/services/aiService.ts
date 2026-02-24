import { GoogleGenAI } from "@google/genai";

const aiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: aiKey });

export const generateDeepDive = async (classTitle: string, theoryContent: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Você é um professor de filosofia especialista. 
      Aprofunde o assunto da aula intitulada "${classTitle}".
      O conteúdo base da aula é: "${theoryContent}".
      
      Forneça um aprofundamento rico, citando outros filósofos relacionados, contextos históricos e implicações contemporâneas.
      Use Markdown para formatar a resposta. Seja didático e instigante.`,
    });

    return response.text;
  } catch (error) {
    console.error("Erro ao gerar aprofundamento com IA:", error);
    throw error;
  }
};
