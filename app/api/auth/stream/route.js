import { generateChatReply } from "@/lib/ai.server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    const text = await generateChatReply("You are a helpful fitness assistant.", prompt);

    const encoder = new TextEncoder();

    return new Response(
      new ReadableStream({
        start(controller) {
          controller.enqueue(encoder.encode(text));
          controller.close();
        },
      })
    );
  } catch (err) {
    return Response.json({ error: err.message }, { status: err.status || 500 });
  }
}
