export function Hero({ currentFilter, setCurrentFilter }) {
  return (
    <div className="hero">
      <div className="title-animate">
        <h1>Extensions List</h1>
      </div>
      <nav aria-label="Filter options">
        <div className="hero-btn">
          <button
            className={`button-animate ${
              currentFilter === "all" ? "active" : ""
            }`}
            style={{ animationDelay: "0s" }}
            onClick={() => setCurrentFilter("all")}
            aria-pressed={currentFilter === "all"}
          >
            All
          </button>
          <button
            className={`button-animate ${
              currentFilter === "active" ? "active" : ""
            }`}
            style={{ animationDelay: "0.1s" }}
            onClick={() => setCurrentFilter("active")}
            aria-pressed={currentFilter === "active"}
          >
            Active
          </button>
          <button
            className={`button-animate ${
              currentFilter === "inactive" ? "active" : ""
            }`}
            style={{ animationDelay: "0.2s" }}
            onClick={() => setCurrentFilter("inactive")}
            aria-pressed={currentFilter === "inactive"}
          >
            Inactive
          </button>
        </div>
      </nav>
    </div>
  );
}
