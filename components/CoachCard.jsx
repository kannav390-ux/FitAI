export default function CoachCard({ data }) {
    if (!data) return null;
  
    return (
      <div className="card">
        <h2>🧠 Coach</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {data.message || "Thinking..."}
        </p>
      </div>
    );
  }