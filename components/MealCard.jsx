export default function MealCard({ data }) {
    if (!data) return null;
  
    return (
      <div className="card">
        <h2 style={{ fontSize: "20px", marginBottom: 8 }}>
          🍽 {data.meal}
        </h2>
  
        <p>🔥 Calories: {data.calories}</p>
        <p>💪 Protein: {data.protein}</p>
  
        <ul style={{ marginTop: 10 }}>
          {data.benefits?.map((b, i) => (
            <li key={i}>• {b}</li>
          ))}
        </ul>
      </div>
    );
  }