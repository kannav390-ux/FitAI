import { generateJSON } from "@/lib/ai.server";

export async function POST(req) {
  const { meal } = await req.json();

  const data = await generateJSON(`
    Replace meal: ${meal}

    Return JSON:
    {
      "meal": "",
      "calories": "",
      "protein": "",
      "benefits": []
    }
  `);

  return Response.json(data);
}