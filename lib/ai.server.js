export async function generateJSON(prompt) {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is missing. Add it to your environment variables.");
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "system",
          content: `
You are a strict JSON generator.

RULES:
- Output ONLY valid JSON
- No explanations, no text outside JSON
- All values must be valid JSON types
- Numbers must NOT include units (no "g", no "kcal")
- Do NOT use trailing commas
- Ensure the JSON is parsable with JSON.parse()
          `,
        },
        {
          role: "user",
          content: `
${prompt}

Return strictly in this format:
{
  "swaps": [
    {
      "title": "string",
      "calories": number,
      "protein": number,
      "carbs": number,
      "fats": number
    }
  ]
}
          `,
        },
      ],
      temperature: 0.3, // 🔥 lower = more reliable JSON
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Groq API error: ${response.status} - ${errText}`);
  }

  const data = await response.json();

  const text = data.choices?.[0]?.message?.content;

  if (!text) {
    throw new Error("Groq returned an empty response.");
  }

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Invalid JSON:", text);
    throw new Error("Failed to parse JSON from Groq.");
  }
}
