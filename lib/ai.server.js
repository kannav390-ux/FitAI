import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateJSON(prompt) {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is missing. Add it to your environment variables.");
  }

  const response = await openai.responses.create({
    model: "gpt-4o-mini",
    input: prompt,
    text: {
      format: {
        type: "json_object",
      },
    },
  });

  const text = response.output_text;

  if (!text) {
    throw new Error("OpenAI returned an empty response.");
  }

  return JSON.parse(text);
}
