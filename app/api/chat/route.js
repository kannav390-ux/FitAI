import { generateChatReply } from "@/lib/ai.server";

export async function POST(req) {
  try {
    const { message } = await req.json();

    const reply = await generateChatReply("You are a fitness AI coach.", message);

    return Response.json({ reply });
  } catch (err) {
    return Response.json({ error: err.message }, { status: err.status || 500 });
  }
}
