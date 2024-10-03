import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import { GoogleGenerativeAI } from "@google/generative-ai";


const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(cors());

app.post("/sendMessage", async (req, res) => {
    const { messages } = req.body;
    console.log(messages[0].parts[0].text);

    const genAI = new GoogleGenerativeAI("AIzaSyBkBFKVHGuveLM1xBuqBEHFRKSKJuzJ0ec");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let prompt = messages[0].parts[0].text;

    const result = await model.generateContent(prompt);

    console.log(result.response.text());
    
    res.json({chat_completion: result.response.text()})
});

app.listen(port, () =>{
    console.log(`exemplo de app consumindo http://localhost:${port}`)
})

