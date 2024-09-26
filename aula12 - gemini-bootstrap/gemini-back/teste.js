import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBkBFKVHGuveLM1xBuqBEHFRKSKJuzJ0ec");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "quem esta ganhando as pesquisas eleitorais, sao paulo 2024??";

const result = await model.generateContent(prompt);
console.log(result.response.text());