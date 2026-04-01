export async function getMealSwap(meal) {
  const res = await fetch("/api/meal-swap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ meal }),
  });

  const data = await res.json();

  try {
    return JSON.parse(data.result);
  } catch (err) {
    console.error("AI JSON parse error:", err);
    return [];
  }
}