import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("API KEY");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "acabei de terminar meu namoro, oq eu faço para superar??";

const result = await model.generateContent(prompt);
console.log(result.response.text());