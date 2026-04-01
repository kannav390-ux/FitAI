import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a fitness AI coach.",
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return Response.json({
      reply: response.choices[0].message.content,
    });

  } catch (err) {
    return Response.json({ error: err.message });
  }
}