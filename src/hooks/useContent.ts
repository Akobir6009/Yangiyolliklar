import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translateContent } from '../services/geminiService';

export function useContent(initialText: string) {
  const { language } = useLanguage();
  const [translatedText, setTranslatedText] = useState(initialText);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (language === 'uz') {
      setTranslatedText(initialText);
      return;
    }

    const translate = async () => {
      setIsTranslating(true);
      const result = await translateContent(initialText, language);
      setTranslatedText(result);
      setIsTranslating(false);
    };

    translate();
  }, [initialText, language]);

  return { text: translatedText, isTranslating };
}
