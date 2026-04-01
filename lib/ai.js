export async function getMealSwap(meal) {
  const res = await fetch("/api/meal-swap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ meal }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || "Unable to generate meal swaps.");
  }

  return {
    swaps: Array.isArray(data.swaps) ? data.swaps : [],
    warning: data.warning || "",
    source: data.source || "ai",
  };
}
