import { GoogleGenAI } from "@google/genai";

const aiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey: aiKey });

export const generateDeepDive = async (classTitle: string, theoryContent: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Você é um professor de filosofia especialista e didático. 
      Sua tarefa é fornecer um aprofundamento EXCLUSIVO para a aula: "${classTitle}".
      
      CONTEÚDO BASE DA AULA:
      "${theoryContent}"
      
      INSTRUÇÕES:
      1. Não seja genérico. Foque apenas nos conceitos apresentados acima.
      2. Relacione o tema com outros filósofos que tratam ESPECIFICAMENTE deste mesmo assunto.
      3. Traga um exemplo prático ou contemporâneo que ajude o aluno a entender este conceito específico.
      4. Use Markdown (títulos, negrito, listas) para organizar o pensamento.
      5. Mantenha um tom acadêmico porém acessível para o Ensino Médio.`,
    });

    return response.text;
  } catch (error) {
    console.error("Erro ao gerar aprofundamento com IA:", error);
    throw error;
  }
};
