import { ArrowRight, Mail, Shield, Zap } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const MARQUEE_TEXT =
  "SILICONE FINISH  •  DRY DASH  •  ADHESIVE MESH  •  POLYSTYRENE SYSTEMS  •  LONG-LASTING RESULTS  •  ";

const services = [
  {
    title: "Insulation",
    items: [
      "EPS Polystyrene",
      "Mineral Wool",
      "Phenolic Boards",
      "Mechanical Fixings",
    ],
  },
  {
    title: "Finishing",
    items: [
      "Silicone Render",
      "Acrylic Finishes",
      "Dry Dash",
      "Self-Cleaning Coats",
    ],
  },
  {
    title: "Reinforcement",
    items: [
      "Adhesive Mesh",
      "Base Coat Layers",
      "Corner Beading",
      "Stress Patching",
    ],
  },
];

function ServiceTile({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{
        backgroundColor: "oklch(0.07 0 0)",
        color: "oklch(0.966 0 0)",
      }}
      whileHover={{
        backgroundColor: "oklch(0.625 0.255 32)",
        color: "oklch(0.07 0 0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group border-t border-white/10 p-8 flex flex-col justify-between min-h-[320px] cursor-default"
    >
      <div>
        <h3 className="font-space text-3xl font-black uppercase tracking-tighter mb-6 leading-none">
          {title}
        </h3>
        <ul className="font-mono text-xs uppercase space-y-3 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
          {items.map((item) => (
            <li key={item}>
              {"//"} {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-12 flex justify-end">
        <ArrowRight size={24} />
      </div>
    </motion.div>
  );
}

function FadeInSection({
  children,
  delay = 0,
}: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <main className="bg-ewi-bg text-ewi-text min-h-screen">
      {/* ─── NAVIGATION ─── */}
      <nav
        className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 mix-blend-difference"
        data-ocid="nav.panel"
      >
        <div className="font-space text-lg font-black tracking-tighter uppercase">
          ROMAN_BRAGAREN
        </div>
        <a
          href="mailto:romanbragarenco714@gmail.com"
          className="font-mono text-[10px] uppercase tracking-widest border border-white/20 px-4 py-2 transition-all duration-200 hover:bg-ewi-orange hover:border-ewi-orange hover:text-ewi-bg"
          data-ocid="nav.link"
        >
          Get Quote
        </a>
      </nav>

      {/* ─── HERO ─── */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 overflow-hidden"
        data-ocid="hero.section"
      >
        {/* Subtle background texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('/assets/generated/ewi-texture-hero.dim_1920x1080.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-block bg-ewi-orange px-2 py-1 font-mono text-[10px] font-bold text-ewi-bg uppercase tracking-widest"
          >
            Specialist EWI Installation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-space text-[13vw] font-black uppercase leading-[0.85] tracking-tighter md:text-[10vw]"
          >
            Thermal
            <br />
            <span className="text-outline">Precision.</span>
          </motion.h1>

          <div className="mt-12 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="max-w-md font-mono text-sm uppercase leading-relaxed"
            >
              [SPECIFICATION]: External Wall Insulation (EWI) specialist.
              Polystyrene systems, adhesive mesh, and elite acrylic/silicone
              finishing. Built for longevity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.0 }}
              className="flex flex-col items-end gap-2"
            >
              <span className="font-mono text-[10px] text-ewi-orange tracking-widest uppercase">
                SCROLL_TO_EXPLORE
              </span>
              <motion.div
                animate={{ scaleY: [1, 1.15, 1], opacity: [1, 0.6, 1] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.6,
                  ease: "easeInOut",
                }}
                className="h-20 w-px bg-ewi-orange origin-top"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="border-y border-white/10 bg-ewi-black py-5 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 22,
            ease: "linear",
          }}
          className="flex whitespace-nowrap will-change-transform"
        >
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-space text-[3.5vw] font-black uppercase tracking-tighter text-white/20 pr-2"
            >
              {MARQUEE_TEXT.repeat(4)}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ─── SERVICES GRID ─── */}
      <section
        className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10"
        data-ocid="services.section"
      >
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={
              idx < services.length - 1 ? "md:border-r border-white/10" : ""
            }
          >
            <FadeInSection delay={idx * 0.1}>
              <ServiceTile title={service.title} items={service.items} />
            </FadeInSection>
          </div>
        ))}
      </section>

      {/* ─── VALUE PROP ─── */}
      <section
        className="py-32 px-6 border-b border-white/10"
        data-ocid="value-prop.section"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <FadeInSection>
            <h2 className="font-space text-5xl xl:text-6xl font-black uppercase tracking-tighter leading-none">
              Engineered
              <br />
              for the <br />
              <span className="text-ewi-orange">Elements.</span>
            </h2>
          </FadeInSection>

          <FadeInSection delay={0.15}>
            <div className="space-y-12">
              <div className="flex gap-6">
                <Shield className="text-ewi-orange shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-space text-xl font-bold uppercase tracking-tighter">
                    Weather Resistance
                  </h4>
                  <p className="font-mono text-sm opacity-50 mt-2 leading-relaxed">
                    Elite silicone finishes provide a hydrophobic barrier
                    against harsh climates and driving rain, maintaining
                    structural integrity for decades.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Zap className="text-ewi-orange shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-space text-xl font-bold uppercase tracking-tighter">
                    Thermal Efficiency
                  </h4>
                  <p className="font-mono text-sm opacity-50 mt-2 leading-relaxed">
                    Drastically reduce heat loss and energy bills with
                    precision-fitted EPS polystyrene systems engineered for
                    maximum U-value performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Shield className="text-ewi-orange shrink-0 mt-1" size={32} />
                <div>
                  <h4 className="font-space text-xl font-bold uppercase tracking-tighter">
                    Certified Installation
                  </h4>
                  <p className="font-mono text-sm opacity-50 mt-2 leading-relaxed">
                    Every project delivered to manufacturer specification, with
                    full system warranty documentation and compliance sign-off.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ─── PROJECT SHOWCASE ─── */}
      <section
        className="py-24 px-6 border-b border-white/10"
        data-ocid="showcase.section"
      >
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="mb-2 font-mono text-[10px] uppercase tracking-widest text-ewi-orange">
              {"// RECENT_WORK"}
            </div>
            <h2 className="font-space text-4xl font-black uppercase tracking-tighter mb-12">
              Project Archive
            </h2>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            {[
              {
                label: "Residential EWI",
                spec: "EPS 100mm + Silicone Render",
                loc: "Manchester, 2024",
                stat: "38% Heat Reduction",
              },
              {
                label: "Social Housing Block",
                spec: "Mineral Wool + Dry Dash",
                loc: "Leeds, 2025",
                stat: "42 Units Completed",
              },
              {
                label: "Commercial Facade",
                spec: "Phenolic + Acrylic Finish",
                loc: "Birmingham, 2025",
                stat: "1,200 m² Installed",
              },
            ].map((project, idx) => (
              <motion.div
                key={project.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: idx * 0.12, duration: 0.6 }}
                className={`p-8 border-white/10 ${
                  idx < 2 ? "border-b md:border-b-0 md:border-r" : ""
                }`}
                data-ocid={`showcase.item.${idx + 1}`}
              >
                <div className="font-mono text-[10px] uppercase text-ewi-orange tracking-widest mb-4">
                  PROJECT_{String(idx + 1).padStart(2, "0")}
                </div>
                <h3 className="font-space text-2xl font-black uppercase tracking-tighter mb-2">
                  {project.label}
                </h3>
                <p className="font-mono text-xs opacity-40 uppercase mb-8">
                  {project.spec}
                </p>
                <div className="border-t border-white/10 pt-6 flex justify-between items-end">
                  <span className="font-mono text-[10px] opacity-40 uppercase">
                    {project.loc}
                  </span>
                  <span className="font-mono text-xs text-ewi-orange uppercase font-bold">
                    {project.stat}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section
        className="bg-ewi-orange py-40 px-6 text-ewi-bg text-center"
        data-ocid="cta.section"
      >
        <FadeInSection>
          <h2 className="font-space text-[8vw] font-black uppercase leading-none tracking-tighter mb-4">
            Ready to Upgrade?
          </h2>
          <p className="font-mono text-sm uppercase opacity-60 mb-12 tracking-widest">
            Free survey &amp; quotation for all projects
          </p>
          <a
            href="mailto:romanbragarenco714@gmail.com"
            className="inline-flex items-center gap-4 bg-ewi-bg text-ewi-text px-12 py-6 font-space text-xl font-black uppercase hover:scale-105 transition-transform duration-200"
            data-ocid="cta.primary_button"
          >
            Contact Roman <Mail size={22} />
          </a>
        </FadeInSection>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="px-10 py-12 border-t border-white/10 bg-ewi-black"
        data-ocid="footer.section"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <div className="font-space text-4xl font-black tracking-tighter uppercase">
              ROMAN_BRAGAREN
            </div>
            <p className="font-mono text-xs opacity-40 mt-2 uppercase tracking-widest">
              Professional EWI Installation Specialist
            </p>
          </div>

          <div className="font-mono text-[10px] uppercase tracking-widest text-right">
            <p className="text-ewi-orange">Inquiries</p>
            <p className="mt-1 opacity-70">romanbragarenco714@gmail.com</p>
            <div className="mt-8 pt-8 border-t border-white/10 space-y-1">
              <p className="opacity-20">
                © {year} BRAGAREN_EWI. ALL RIGHTS RESERVED.
              </p>
              <p className="opacity-20">
                Built with love using{" "}
                <a
                  href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                  className="hover:text-ewi-orange transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
