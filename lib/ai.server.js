const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const DEFAULT_MODEL = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

function getGroqKey() {
  const key = process.env.GROQ_API_KEY;
  if (!key) {
    throw new Error("GROQ_API_KEY is missing. Add it to your environment variables.");
  }
  return key;
}

async function callGroq({ messages, responseFormat }) {
  const apiKey = getGroqKey();

  const response = await fetch(GROQ_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      messages,
      ...(responseFormat ? { response_format: responseFormat } : {}),
      temperature: 0.4,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error?.message || "Groq request failed.";
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  const text = data?.choices?.[0]?.message?.content;
  if (!text) {
    throw new Error("Groq returned an empty response.");
  }

  return text;
}

export async function generateJSON(prompt) {
  const text = await callGroq({
    messages: [{ role: "user", content: prompt }],
    responseFormat: { type: "json_object" },
  });

  return JSON.parse(text);
}

export async function generateChatReply(systemPrompt, userPrompt) {
  return callGroq({
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userPrompt },
    ],
  });
}
