import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { meal } = await req.json();

    const prompt = `
You are a professional sports nutritionist.

Given this meal:
${meal}

Suggest 3 alternative meals with:
- similar calories
- high protein
- fitness optimized

Return in JSON format:
[
  {
    "title": "",
    "calories": "",
    "protein": "",
    "carbs": "",
    "fats": ""
  }
]
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content;

    return Response.json({ result: text });

  } catch (err) {
    return Response.json({ error: err.message });
  }
}