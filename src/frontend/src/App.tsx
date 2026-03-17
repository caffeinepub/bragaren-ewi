export default function App() {
  const year = new Date().getFullYear();

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      {/* ─── SECTION 1: HERO (WHITE) ─── */}
      <section
        id="hero"
        className="section-snap"
        style={{
          background: "#fff",
          color: "#000",
          borderBottom: "2px solid #000",
          display: "flex",
          flexDirection: "column",
        }}
        data-ocid="hero.section"
      >
        {/* Top bar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 32px",
            borderBottom: "2px solid #000",
            background: "#fff",
          }}
          data-ocid="nav.panel"
        >
          <span
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            ROMAN BRAGAREN EWI
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
            }}
          >
            CHISINAU / MOLDOVA
          </span>
        </header>

        {/* Center hero content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 32px",
          }}
        >
          <div
            style={{
              background: "#000",
              color: "#fff",
              padding: "clamp(32px, 5vw, 64px) clamp(24px, 4vw, 80px)",
              maxWidth: "900px",
              width: "100%",
              border: "2px solid #000",
            }}
          >
            <h1
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.8rem, 7vw, 7rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                margin: "0 0 24px 0",
              }}
            >
              EXTERIOR THERMAL INTEGRITY.
            </h1>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                lineHeight: 1.7,
                margin: 0,
                opacity: 0.85,
              }}
            >
              High-performance insulation systems for the Moldovan climate.
              Engineered for energy efficiency and structural longevity.
            </p>
          </div>
        </div>

        {/* Scroll trigger */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "24px 32px 32px",
          }}
        >
          <button
            onClick={() => scrollToSection("material")}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              background: "transparent",
              color: "#000",
              border: "2px solid #000",
              padding: "12px 28px",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
            type="button"
            data-ocid="hero.primary_button"
          >
            ↓ MATERIAL BREAKDOWN
          </button>
        </div>
      </section>

      {/* ─── SECTION 2: MATERIAL BREAKDOWN (BLACK) ─── */}
      <section
        id="material"
        className="section-snap"
        style={{
          background: "#000",
          color: "#fff",
          borderBottom: "2px solid #fff",
          display: "flex",
          flexDirection: "column",
        }}
        data-ocid="material.section"
      >
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {/* Left: image */}
          <div
            style={{
              borderRight: "2px solid #fff",
              overflow: "hidden",
              minHeight: "400px",
            }}
          >
            <img
              src="/assets/generated/wall-texture-bw.dim_800x600.jpg"
              alt="Wall texture"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                filter: "contrast(1.2) grayscale(1)",
              }}
            />
          </div>

          {/* Right: specs */}
          <div
            style={{
              padding: "clamp(32px, 5vw, 72px) clamp(24px, 4vw, 64px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "40px",
                borderBottom: "2px solid #fff",
                paddingBottom: "16px",
              }}
            >
              MATERIAL SPECIFICATIONS
            </p>

            {[
              { label: "SYSTEM", value: "Reinforced EIFS / ETICS" },
              { label: "CORE", value: "High-Density EPS & Mineral Wool" },
              { label: "FINISH", value: "Weather-Resistant Polymer Stucco" },
              { label: "TARGET", value: "Passive House Standards" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  marginBottom: "32px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                    color: "#fff",
                    opacity: 0.4,
                    userSelect: "none",
                    flexShrink: 0,
                    marginTop: "3px",
                  }}
                >
                  &gt;
                </span>
                <div>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)",
                      marginRight: "12px",
                    }}
                  >
                    {item.label}:
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 400,
                      fontSize: "clamp(0.75rem, 1.1vw, 0.9rem)",
                      opacity: 0.8,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: STRUCTURAL PHASES (WHITE) ─── */}
      <section
        id="phases"
        className="section-snap"
        style={{
          background: "#fff",
          color: "#000",
          borderBottom: "2px solid #000",
          padding: "clamp(48px, 8vw, 96px) clamp(24px, 5vw, 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        data-ocid="phases.section"
      >
        <h2
          style={{
            fontFamily: "'Inter Tight', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 5rem)",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            lineHeight: 1,
            marginBottom: "clamp(40px, 7vw, 80px)",
          }}
        >
          STRUCTURAL PHASES
        </h2>

        {/* Timeline */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 0,
            overflowX: "auto",
          }}
        >
          {[
            { num: "01", name: "SUBSTRATE PREP" },
            { num: "02", name: "ADHESIVE APPLICATION" },
            { num: "03", name: "MECHANICAL FASTENING" },
            { num: "04", name: "REINFORCEMENT" },
            { num: "05", name: "FINISH COAT" },
          ].map((step, idx, arr) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                alignItems: "flex-start",
                flex: 1,
                minWidth: "140px",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  position: "relative",
                  paddingRight: idx < arr.length - 1 ? "0" : "0",
                }}
              >
                {/* Connector line (top) */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      background: "#000",
                      border: "3px solid #000",
                      flexShrink: 0,
                    }}
                  />
                  {idx < arr.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        height: "3px",
                        background: "#000",
                      }}
                    />
                  )}
                </div>

                {/* Step content */}
                <div style={{ paddingRight: "16px" }}>
                  <div
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2.5rem, 4vw, 4rem)",
                      lineHeight: 1,
                      color: "#000",
                      marginBottom: "12px",
                    }}
                  >
                    {step.num}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                      fontSize: "clamp(0.65rem, 1vw, 0.8rem)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      lineHeight: 1.4,
                    }}
                  >
                    {step.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: FOOTER (BLACK) ─── */}
      <section
        id="contact"
        className="section-snap"
        style={{
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "clamp(40px, 6vw, 80px) clamp(24px, 5vw, 80px)",
        }}
        data-ocid="footer.section"
      >
        {/* Logo block */}
        <div style={{ marginBottom: "40px" }}>
          {/* SVG line-art house logo */}
          <svg
            width="80"
            height="64"
            viewBox="0 0 80 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Roman Bragaren EWI logo"
            style={{ display: "block", marginBottom: "16px" }}
          >
            {/* House outline */}
            <polyline
              points="4,32 40,4 76,32"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
            <rect
              x="12"
              y="32"
              width="56"
              height="28"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
            {/* Door */}
            <rect
              x="32"
              y="44"
              width="16"
              height="16"
              stroke="#fff"
              strokeWidth="2"
              fill="none"
            />
            {/* Left window */}
            <rect
              x="16"
              y="38"
              width="10"
              height="10"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Right window */}
            <rect
              x="54"
              y="38"
              width="10"
              height="10"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Chimney */}
            <rect
              x="54"
              y="10"
              width="8"
              height="14"
              stroke="#fff"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Insulation layers on right wall — hash marks */}
            <line
              x1="68"
              y1="36"
              x2="74"
              y2="36"
              stroke="#fff"
              strokeWidth="1"
            />
            <line
              x1="68"
              y1="41"
              x2="74"
              y2="41"
              stroke="#fff"
              strokeWidth="1"
            />
            <line
              x1="68"
              y1="46"
              x2="74"
              y2="46"
              stroke="#fff"
              strokeWidth="1"
            />
            <line
              x1="68"
              y1="51"
              x2="74"
              y2="51"
              stroke="#fff"
              strokeWidth="1"
            />
          </svg>

          <div
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: "6px",
            }}
          >
            ROMAN BRAGAREN
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              opacity: 0.6,
            }}
          >
            EXTERIOR WALL INSULATION
          </div>
        </div>

        {/* Main CTA copy */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 5.5rem)",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 1,
              marginBottom: "48px",
              maxWidth: "900px",
            }}
          >
            ESTABLISH YOUR THERMAL BARRIER.
          </h2>

          {/* Contact grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "0",
              border: "2px solid #fff",
              marginBottom: "40px",
              maxWidth: "700px",
            }}
          >
            <div
              style={{
                padding: "24px 32px",
                borderRight: "2px solid #fff",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.5,
                  marginBottom: "8px",
                }}
              >
                CALL
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                  letterSpacing: "0.02em",
                }}
              >
                +353 89 438 4399
              </div>
            </div>
            <div style={{ padding: "24px 32px" }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.5,
                  marginBottom: "8px",
                }}
              >
                EMAIL
              </div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: "clamp(0.75rem, 1.2vw, 0.95rem)",
                  letterSpacing: "0.01em",
                  wordBreak: "break-all",
                }}
              >
                romanbragarenco714@gmail.com
              </div>
            </div>
          </div>

          {/* CTA button */}
          <div>
            <a
              href="mailto:romanbragarenco714@gmail.com"
              className="cta-btn"
              style={{
                fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "20px 40px",
              }}
              data-ocid="footer.primary_button"
            >
              REQUEST TECHNICAL QUOTE.
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div
          style={{
            borderTop: "2px solid #fff",
            paddingTop: "20px",
            marginTop: "40px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              opacity: 0.4,
            }}
          >
            © {year} ROMAN BRAGAREN EWI. CHISINAU, MOLDOVA.
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.08em",
              opacity: 0.3,
            }}
          >
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              style={{ color: "#fff", textDecoration: "underline" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </section>
    </div>
  );
}
