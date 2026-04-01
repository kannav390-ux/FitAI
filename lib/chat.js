export async function sendMessage(message) {
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });
  
    return res.json();
  }