import { generateJSON } from "@/lib/ai.server";

export async function POST(req) {
  try {
    const { meal } = await req.json();

    if (!meal || typeof meal !== "string") {
      return Response.json(
        { error: "A valid meal description is required." },
        { status: 400 }
      );
    }

    const data = await generateJSON(`
You are a professional sports nutritionist.

Given this meal:
${meal}

Suggest exactly 3 alternative meals that are fitness optimized and similar in calories.

Return strict JSON in this shape:
{
  "swaps": [
    {
      "title": "",
      "calories": "",
      "protein": "",
      "carbs": "",
      "fats": ""
    }
  ]
}
`);

    const swaps = Array.isArray(data?.swaps) ? data.swaps.slice(0, 3) : [];

    return Response.json({ swaps });
  } catch (err) {
    return Response.json(
      { error: err.message || "Failed to generate meal swaps." },
      { status: 500 }
    );
  }
}
