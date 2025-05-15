import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("YOUR API KEY);

export const enhanceWithGemini = async (text, type) => {
  const promptMap = {
    experience: `Rewrite this work experience as 1-2 concise, professional bullet points suitable for a resume. Only return bullet points:\n\n"${text}"`,
    project: `Rewrite this project description as 2-3 impactful bullet points for a resume. Only return bullet points:\n\n"${text}"`,
    skills: `Extract a list (preferrably 8-15 skills) of relevant technical skills from the following project and experience description. Return only the skills separated by commas:\n\n"${text}"`,
  };

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(promptMap[type]);
    const response = await result.response;
    const enhancedText = (await response.text()).trim();

    if (type === "skills") {
            return enhancedText;
    }
    
    const bullets = enhancedText
            .split(/\n+/)                            // split on newlines
            .map(line => line.replace(/^[-•*]\s*/, '')) // remove leading symbols
            .filter(Boolean)
            .map(item => `• ${item}\n`)
            .join('');

        return `${bullets}`;

  } catch (err) {
    console.error("Gemini enhancement error:", err);
    return text;
  }
};
