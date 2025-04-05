export default function Home() {
    return (
      <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>Welcome to Georgian Floors</h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "700px" }}>
          Your mobile showroom for carpet sales and professional installation in Barrie, Ontario.
          Book your appointment online or call us — we bring the samples directly to your door.
        </p>
  
        <div style={{ marginTop: "2rem" }}>
          <a
            href="/book"
            style={{
              backgroundColor: "#0070f3",
              color: "white",
              padding: "1rem 2rem",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Book Now
          </a>
        </div>
      </div>
    );
  }
  