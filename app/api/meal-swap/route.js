import { generateJSON } from "@/lib/ai.server";

function buildFallbackSwaps(meal) {
  return [
    {
      title: `Grilled Chicken + Brown Rice (${meal})`,
      calories: "540",
      protein: "42g",
      carbs: "52g",
      fats: "15g",
    },
    {
      title: `Turkey Quinoa Bowl (${meal})`,
      calories: "510",
      protein: "39g",
      carbs: "48g",
      fats: "14g",
    },
    {
      title: `Tofu Power Plate (${meal})`,
      calories: "500",
      protein: "35g",
      carbs: "50g",
      fats: "16g",
    },
  ];
}

export async function POST(req) {
  let meal = "Current Meal";

  try {
    const body = await req.json();
    meal = body?.meal;

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

    return Response.json({ swaps, source: "ai" });
  } catch (err) {
    const message = err?.message || "Failed to generate meal swaps.";
    const isQuotaError = err?.status === 429 || message.includes("429");

    if (isQuotaError) {
      return Response.json(
        {
          swaps: buildFallbackSwaps(meal),
          source: "fallback",
          warning:
            "AI quota reached. Showing fallback swaps until billing/quota is restored.",
        },
        { status: 200 }
      );
    }

    return Response.json({ error: message }, { status: 500 });
  }
}
