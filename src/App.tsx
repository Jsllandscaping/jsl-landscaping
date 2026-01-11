import React from "react";

const COLORS = {
  primary: "#1F7A4D",        // Forest green
  primaryDark: "#145A3A",
  softBg: "#F1F8F4",
  accent: "#A7D7C5",
  textDark: "#0b1220",
  textMuted: "#3b4656",
  border: "#e1eee8",
};

export default function App() {
  const phoneDisplay = "0415 893 100";
  const phoneDial = "0415893100";
  const email = "jsllandscaping@outlook.com.au";
  const serviceArea = "Perth, WA (North of the River)";

  const services = [
    { title: "Real & Artificial Turf", desc: "Supply and install, base prep, edging, clean finish." },
    { title: "Reticulation", desc: "New installs, repairs, controller upgrades, troubleshooting." },
    { title: "Paving", desc: "Paths, patios, courtyards—clean lines, solid base work." },
    { title: "Decking", desc: "Timber & composite decks built for Perth conditions." },
    { title: "Garden Beds & Edging", desc: "Defined borders, improved structure, easy maintenance." },
    { title: "General Landscaping", desc: "Full makeovers, upgrades, tidy-outs, and ongoing improvements." },
  ];

  const testimonials = [
    { name: "Sarah • Alkimos", quote: "Fast quote, great communication, and the finish was unreal. Yard looks brand new." },
    { name: "Mike • Clarkson", quote: "They sorted our paving and retic issues properly. Clean work and on time." },
    { name: "Jess • Butler", quote: "Super easy to deal with. The turf and edging completely changed the place." },
  ];

  const faqs = [
    { q: "Do you offer free quotes?", a: "Yes—send your address and a quick description (or measurements) and we’ll organise a time." },
    { q: "What areas do you service?", a: `Mainly ${serviceArea}. If you’re close, ask anyway.` },
    { q: "How soon can you start?", a: "Depends on bookings. Small jobs can often be scheduled sooner—message us and we’ll give you the next available dates." },
    { q: "Do you supply materials?", a: "Yes. We can supply and install, or install materials you’ve already chosen (depending on the job)." },
  ];

  return (
    <div style={styles.page}>
      <a href="#content" style={styles.skipLink}>Skip to content</a>

      {/* Top bar */}
      <div style={styles.topBar}>
        <div style={styles.containerRow}>
          <div style={styles.topBarLeft}>
            <span style={styles.miniLabel}>Service Area</span>
            <span style={styles.miniValue}>{serviceArea}</span>
          </div>
          <div style={styles.topBarRight}>
            <a style={styles.topLink} href={`tel:${phoneDial}`}>{phoneDisplay}</a>
            <span style={styles.dot}>•</span>
            <a style={styles.topLink} href={`mailto:${email}`}>{email}</a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.containerRow}>
          <div style={styles.brand}>
            <div style={styles.logoMark} aria-hidden="true">JSL</div>
            <div>
              <div style={styles.brandName}>JSL Landscaping</div>
              <div style={styles.brandTag}>Landscaping • Turf • Retic • Paving • Decking</div>
            </div>
          </div>

          <nav style={styles.nav} aria-label="Primary">
            <a style={styles.navLink} href="#services">Services</a>
            <a style={styles.navLink} href="#process">Process</a>
            <a style={styles.navLink} href="#reviews">Reviews</a>
            <a style={styles.navLink} href="#faq">FAQ</a>
            <a style={styles.navLinkCTA} href="#contact">Get a Quote</a>
          </nav>
        </div>
      </header>

      <main id="content">
        {/* Hero */}
        <section style={styles.hero}>
          <div style={styles.container}>
            <div style={styles.heroGrid}>
              <div>
                <h1 style={styles.h1}>Clean, quality landscaping north of the river.</h1>
                <p style={styles.lead}>
                  Turf, reticulation, paving, decking and full outdoor makeovers—done properly,
                  with clear communication and a tidy finish.
                </p>

                <div style={styles.heroActions}>
                  <a style={styles.primaryBtn} href="#contact">Get a Fast Quote</a>
                  <a style={styles.secondaryBtn} href={`tel:${phoneDial}`}>Call {phoneDisplay}</a>
                </div>

                <div style={styles.heroBadges}>
                  <div style={styles.badge}>✅ Reliable</div>
                  <div style={styles.badge}>✅ Tidy worksite</div>
                  <div style={styles.badge}>✅ Quality finish</div>
                </div>
              </div>

              <div style={styles.heroCard} aria-label="Quick info">
                <div style={styles.heroCardInner}>
                  <h2 style={styles.h2}>Quick Info</h2>

                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Available for:</span>
                    <span style={styles.infoValue}>New builds • Renos • Repairs</span>
                  </div>

                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Best way to quote:</span>
                    <span style={styles.infoValue}>Message photos + rough measurements</span>
                  </div>

                  <div style={styles.infoRow}>
                    <span style={styles.infoLabel}>Turnaround:</span>
                    <span style={styles.infoValue}>We’ll reply ASAP</span>
                  </div>

                  <div style={styles.divider} />

                  <a style={styles.cardBtn} href="#contact">Request a Quote</a>

                  <p style={styles.smallNote}>
                    Prefer email?{" "}
                    <a style={styles.inlineLink} href={`mailto:${email}`}>{email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Services</h2>
            <p style={styles.sectionDesc}>
              Straightforward, high-quality work. If you don’t see it listed, ask—chances are we do it.
            </p>

            <div style={styles.cardsGrid}>
              {services.map((s) => (
                <div key={s.title} style={styles.card}>
                  <div style={styles.cardTitle}>{s.title}</div>
                  <div style={styles.cardDesc}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" style={styles.sectionAlt}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>How it works</h2>
            <div style={styles.stepsGrid}>
              <Step number="1" title="Message us" desc="Send your suburb + what you want done. Photos help heaps." />
              <Step number="2" title="Quote" desc="We’ll organise a site visit if needed and give a clear quote." />
              <Step number="3" title="Schedule" desc="Lock in a date that suits. We’ll confirm before we arrive." />
              <Step number="4" title="Job done" desc="Tidy finish, clean site, and we walk you through what’s been done." />
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" style={styles.section}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>Reviews</h2>
            <div style={styles.cardsGrid}>
              {testimonials.map((t) => (
                <figure key={t.name} style={styles.quoteCard}>
                  <blockquote style={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption style={styles.quoteName}>{t.name}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" style={styles.sectionAlt}>
          <div style={styles.container}>
            <h2 style={styles.sectionTitle}>FAQ</h2>
            <div style={styles.faqGrid}>
              {faqs.map((f) => (
                <details key={f.q} style={styles.faqItem}>
                  <summary style={styles.faqQ}>{f.q}</summary>
                  <div style={styles.faqA}>{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={styles.section}>
          <div style={styles.container}>
            <div style={styles.contactWrap}>
              <div>
                <h2 style={styles.sectionTitle}>Get a Quote</h2>
                <p style={styles.sectionDesc}>
                  Message your suburb, what you want done, and any photos/measurements you’ve got.
                </p>

                <div style={styles.contactCards}>
                  <a style={styles.contactCard} href={`tel:${phoneDial}`}>
                    <div style={styles.contactCardLabel}>Call</div>
                    <div style={styles.contactCardValue}>{phoneDisplay}</div>
                  </a>

                  <a style={styles.contactCard} href={`mailto:${email}`}>
                    <div style={styles.contactCardLabel}>Email</div>
                    <div style={styles.contactCardValue}>{email}</div>
                  </a>
                </div>

                <p style={styles.smallNote}>
                  Tip: Include “turf/retic/paving/decking” in the message so we can quote faster.
                </p>
              </div>

              <form
                style={styles.form}
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("This demo form doesn’t submit anywhere. Use Call or Email.");
                }}
              >
                <div style={styles.formRow}>
                  <label style={styles.label}>
                    Name
                    <input style={styles.input} type="text" placeholder="Your name" required />
                  </label>

                  <label style={styles.label}>
                    Suburb
                    <input style={styles.input} type="text" placeholder="e.g. Alkimos" required />
                  </label>
                </div>

                <label style={styles.label}>
                  What do you need done?
                  <textarea
                    style={styles.textarea}
                    placeholder="Brief description (turf, retic, paving, decking, etc.)"
                    rows={5}
                    required
                  />
                </label>

                <button type="submit" style={styles.primaryBtn}>Send (demo)</button>

                <div style={styles.formNote}>
                  Want the form to actually send to your email? Tell me where it’s hosted (Netlify/Vercel/etc.)
                  and I’ll wire it up properly.
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.containerRow}>
          <div style={styles.footerLeft}>
            <div style={styles.footerBrand}>JSL Landscaping</div>
            <div style={styles.footerText}>
              {serviceArea} •{" "}
              <a style={styles.footerLink} href={`tel:${phoneDial}`}>{phoneDisplay}</a>{" "}
              •{" "}
              <a style={styles.footerLink} href={`mailto:${email}`}>{email}</a>
            </div>
          </div>
          <div style={styles.footerRight}>
            <a style={styles.footerLink} href="#services">Services</a>
            <span style={styles.dot}>•</span>
            <a style={styles.footerLink} href="#contact">Quote</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Step(props: { number: string; title: string; desc: string }) {
  return (
    <div style={styles.stepCard}>
      <div style={styles.stepNumber}>{props.number}</div>
      <div>
        <div style={styles.stepTitle}>{props.title}</div>
        <div style={styles.stepDesc}>{props.desc}</div>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Arial, sans-serif',
    color: COLORS.textDark,
    background: "#ffffff",
  },

  skipLink: { position: "absolute", left: -9999, top: 10 },

  topBar: {
    borderBottom: `1px solid ${COLORS.border}`,
    background: COLORS.softBg,
  },

  container: { maxWidth: 1120, margin: "0 auto", padding: "0 20px" },
  containerRow: {
    maxWidth: 1120,
    margin: "0 auto",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap",
  },

  topBarLeft: { display: "flex", gap: 10, alignItems: "center" },
  topBarRight: { display: "flex", gap: 10, alignItems: "center" },
  miniLabel: { fontSize: 12, color: COLORS.textMuted },
  miniValue: { fontSize: 12, fontWeight: 700 },
  topLink: {
    fontSize: 12,
    color: COLORS.primary,
    textDecoration: "none",
    fontWeight: 700,
  },
  dot: { color: "#9aa3b2" },

  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(8px)",
    borderBottom: `1px solid ${COLORS.border}`,
  },

  brand: { display: "flex", alignItems: "center", gap: 12 },
  logoMark: {
    width: 44,
    height: 44,
    borderRadius: 12,
    display: "grid",
    placeItems: "center",
    background: COLORS.primary,
    color: "#ffffff",
    fontWeight: 900,
    letterSpacing: 0.5,
  },
  brandName: { fontWeight: 900, fontSize: 16 },
  brandTag: { fontSize: 12, color: COLORS.textMuted },

  nav: { display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" },
  navLink: {
    color: COLORS.textDark,
    textDecoration: "none",
    fontSize: 14,
    padding: "10px",
    borderRadius: 10,
  },
  navLinkCTA: {
    background: COLORS.primary,
    color: "#ffffff",
    padding: "10px 14px",
    borderRadius: 12,
    fontWeight: 800,
    textDecoration: "none",
  },

  hero: {
    background: `linear-gradient(180deg, ${COLORS.softBg} 0%, #ffffff 65%)`,
    borderBottom: `1px solid ${COLORS.border}`,
  },

  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: 20,
    padding: "34px 0",
  },

  h1: { fontSize: 44, lineHeight: 1.1, margin: 0 },
  lead: { marginTop: 14, fontSize: 16, lineHeight: 1.6, color: COLORS.textMuted },

  heroActions: { display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" },

  primaryBtn: {
    background: COLORS.primary,
    color: "#ffffff",
    padding: "12px 18px",
    borderRadius: 14,
    fontWeight: 800,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
  },

  secondaryBtn: {
    background: "#ffffff",
    color: COLORS.primary,
    border: `2px solid ${COLORS.primary}`,
    padding: "10px 16px",
    borderRadius: 14,
    fontWeight: 800,
    textDecoration: "none",
  },

  heroBadges: { display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" },
  badge: {
    fontSize: 12,
    background: "#ffffff",
    border: `1px solid ${COLORS.accent}`,
    padding: "8px 12px",
    borderRadius: 999,
    color: COLORS.primary,
    fontWeight: 800,
  },

  heroCard: {
    background: "#ffffff",
    border: `1px solid ${COLORS.accent}`,
    borderRadius: 18,
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },

  heroCardInner: { padding: 18 },

  h2: { margin: 0, fontSize: 18 },

  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 12,
  },
  infoLabel: { fontSize: 13, color: COLORS.textMuted },
  infoValue: { fontSize: 13, fontWeight: 700 },

  divider: {
    height: 1,
    background: COLORS.border,
    margin: "16px 0",
  },

  cardBtn: {
    background: COLORS.primary,
    color: "#ffffff",
    padding: "12px",
    borderRadius: 14,
    textAlign: "center",
    fontWeight: 800,
    textDecoration: "none",
  },

  smallNote: { fontSize: 12, color: COLORS.textMuted, marginTop: 12 },

  section: { padding: "54px 0" },
  sectionAlt: {
    padding: "54px 0",
    background: COLORS.softBg,
    borderTop: `1px solid ${COLORS.border}`,
    borderBottom: `1px solid ${COLORS.border}`,
  },

  sectionTitle: { fontSize: 28, margin: 0 },
  sectionDesc: { marginTop: 10, maxWidth: 720, color: COLORS.textMuted },

  cardsGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 14,
  },

  card: {
    border: `1px solid ${COLORS.border}`,
    borderRadius: 18,
    padding: 16,
    background: "#ffffff",
  },

  cardTitle: { fontWeight: 900, marginBottom: 8 },
  cardDesc: { fontSize: 13, color: COLORS.textMuted },

  footer: {
    borderTop: `1px solid ${COLORS.border}`,
    background: COLORS.softBg,
    padding: "22px 0",
  },

  footerBrand: { fontWeight: 900 },
  footerText: { fontSize: 12, color: COLORS.textMuted },
  footerLink: {
    color: COLORS.primary,
    fontWeight: 800,
    textDecoration: "none",
    fontSize: 12,
  },
};
