"use client";

import { useState } from "react";
import { sendMessage } from "@/lib/chat";

export default function AIChat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = async () => {
    if (!input) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    const res = await sendMessage(input);

    const aiMsg = { role: "ai", text: res.reply };

    setMessages((prev) => [...prev, aiMsg]);
  };

  return (
    <div className="p-6 bg-[#0f1930] rounded space-y-4">

      {/* CHAT */}
      <div className="h-64 overflow-y-auto space-y-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded ${
              m.role === "user"
                ? "bg-blue-500 text-black"
                : "bg-[#192540]"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 bg-[#060e20]"
        />

        <button
          onClick={handleSend}
          className="px-4 bg-[#8eabff] text-black"
        >
          Send
        </button>
      </div>

    </div>
  );
}