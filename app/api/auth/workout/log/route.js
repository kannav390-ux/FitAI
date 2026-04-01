import { connectDB } from "@/lib/db";
import Workout from "@/models/Workout";

export async function POST(req) {
  await connectDB();
  const body = await req.json();

  const workout = await Workout.create(body);
  return Response.json(workout);
}