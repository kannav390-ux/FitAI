export default function Button({ text, onClick, loading }) {
    return (
      <button
        onClick={onClick}
        disabled={loading}
        className="btn"
      >
        {loading ? "Loading..." : text}
      </button>
    );
  }