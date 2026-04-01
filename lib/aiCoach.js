import { generateJSON } from "./ai";

function getTone(energy, motivation) {
  if (energy < 4 || motivation < 4) return "supportive";
  if (energy > 7 && motivation > 7) return "push";
  return "balanced";
}

export async function coachResponse(data) {
  const tone = getTone(data.energy, data.motivation);

  return generateJSON(`
    You are an elite hybrid fitness coach.

    Tone: ${tone}

    User:
    Goal: ${data.goal}
    Energy: ${data.energy}
    Motivation: ${data.motivation}

    Return JSON:
    {
      "message": "",
      "focus": "",
      "actions": []
    }
  `);
}