import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

// Note: GEMINI_API_KEY is injected into process.env in vite.config.ts
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function translateContent(text: string, targetLang: Language): Promise<string> {
  if (targetLang === 'uz') return text;
  
  const langNames = {
    en: 'English',
    ru: 'Russian'
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Translate the following Uzbek text to ${langNames[targetLang as 'en' | 'ru']}. Keep the tone professional but news-oriented. Only return the translated text:\n\n${text}`,
    });
    
    return response.text || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}
