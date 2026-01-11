import "./App.css";
import { useEffect } from "react";

// Simple local UI components (no external UI libraries)
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
}

const PHONE_DISPLAY = "0415 893 100";
const PHONE_TEL = "0415893100";
const EMAIL = "jsllandscaping@outlook.com.au";
const INSTAGRAM_URL = "https://www.instagram.com/jsllandscaping/";

const INSTAGRAM_POSTS = [
  "https://www.instagram.com/p/DBJMb83ymWT/",
  "https://www.instagram.com/p/DEHO8ogSQFu/",
  "https://www.instagram.com/p/DJDsutrSVzj/",
  "https://www.instagram.com/p/DSwtsuDkwMe/",
  "https://www.instagram.com/p/DMNAfEeR-Mc/",
  "https://www.instagram.com/p/C3B6fF_PE6Z/",
] as const;

const SUBURBS = ["Alkimos", "Jindalee", "Butler", "Yanchep", "Clarkson", "Ellenbrook"];

const SERVICES = [
  {
    title: "Turf & Artificial Grass",
    desc: "Artificial turf and real lawn installs with proper prep, base work and clean edging for a premium finish.",
    bullets: ["Artificial turf installs", "Real lawn (turf) supply & lay", "Prep, base & drainage"],
  },
  {
    title: "Paving, Decking & Retic",
    desc: "Paving, decking and reticulation systems built to last — plus stones and steppers to tie it all together.",
    bullets: ["Paving", "Decking", "Reticulation", "Stones & steppers"],
  },
  {
    title: "Residential Landscaping",
    desc: "New builds and existing garden renovations including planting, limestone walls and full outdoor transformations.",
    bullets: ["New build landscaping", "Garden renovations", "Planting & garden beds", "Limestone walls"],
  },
] as const;

const TESTIMONIALS = [
  {
    name: "Stephanie",
    quote:
      "Jordan and his team completely transformed our backyard with buffalo grass, retic and paving. Professional, prompt, friendly and very neat and tidy. The work was completed to a very high standard and we couldn’t recommend them enough.",
  },
  {
    name: "Sarah",
    quote:
      "Jordan transformed my front yard and was so easy to deal with. Prompt with quoting, booking the job in and went the extra mile! Would highly recommend!",
  },
  {
    name: "Arun",
    quote:
      "Jordan and his crew were incredibly friendly, professional, and efficient from start to finish. They worked quickly without sacrificing quality. Highly recommend.",
  },
  {
    name: "Emma",
    quote: "JSL did a huge landscaping job for our newly built house. They did an amazing job at a reasonable price. Highly recommend!",
  },
  {
    name: "Kylie",
    quote:
      "Extremely prompt and professional. Quoted the same day and the job was completed quickly. Even with changes mid-job, Jordan was accommodating. 10/10.",
  },
  {
    name: "James",
    quote:
      "Jordan and his team landscaped my elderly mum’s house. Very professional, nothing was too hard, and the end product is superb. Highly recommend.",
  },
] as const;

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="sectionHead">
          <h2 className="h2">{title}</h2>
          {subtitle ? <p className="subhead">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <img
              src="/logo-jsl.png"
              alt="JSL Landscaping logo"
              className="logo"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="brandText">
              <div className="brandName">JSL Landscaping</div>
              <div className="brandMeta">Perth, Western Australia</div>
            </div>
          </div>

          <div className="headerCtas">
            <a href={`tel:${PHONE_TEL}`} className="linkReset">
              <Button className="btnSecondary">Call {PHONE_DISPLAY}</Button>
            </a>
            <a href="#quote" className="linkReset">
              <Button className="btnPrimary">Free Quote</Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container heroInner">
          <h1 className="h1">Residential Landscaping – Perth Northern Suburbs</h1>
          <p className="heroText">
            Turf, paving, decking, limestone walls, stones & steppers — full residential landscaping specialising North of the River.
          </p>
          <p className="heroText heroTextDim">Free quotes for new builds and existing garden renovations.</p>

          <div className="heroCtas">
            <a href={`tel:${PHONE_TEL}`} className="linkReset">
              <Button className="btnWhite">Call {PHONE_DISPLAY} – Free Quote</Button>
            </a>
            <a href="#quote" className="linkReset">
              <Button className="btnDark">Request a Quote</Button>
            </a>
          </div>

          <div className="heroChips">
            <div className="chip">Servicing all Perth • Focus: NOR suburbs</div>
            <div className="chip">Tidy work sites • Quality finishes</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <Section
        title="Services"
        subtitle="Residential landscaping for new builds and garden renovations across Perth, with a strong focus North of the River."
      >
        <div className="grid3">
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <h3 className="h3">{s.title}</h3>
              <p className="muted">{s.desc}</p>
              <ul className="list">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
<div style={{ textAlign: "center", fontWeight: 900, marginBottom: 12 }}>👇 Latest Work is here 👇</div>
      {/* Latest Work (Instagram links) */}
      <Section title="Latest Work" subtitle="Tap a card to open the post on Instagram.">
        <div className="ctaBar" style={{ marginBottom: 16 }}>
          <div>
            <div className="ctaTitle">JSL Landscaping on Instagram</div>
            <div className="muted">Before & afters, new builds and garden renovations across Perth’s Northern Suburbs.</div>
          </div>
          <a className="linkReset" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
            <Button className="btnPrimary">View Instagram</Button>
          </a>
        </div>

        <div className="instaGrid">
          {INSTAGRAM_POSTS.map((url) => (
            <a key={url} href={url} target="_blank" rel="noreferrer" className="instaLink">
              <div className="instaThumb">
                <div className="instaBadge">Instagram</div>
              </div>
              <div className="instaMeta">
                <div className="instaTitle">View this job</div>
                <div className="instaSub">Tap to open the post</div>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section title="What Our Clients Say" subtitle="Real reviews from homeowners.">
        <div className="grid2">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name}>
              <p className="quote">“{t.quote}”</p>
              <div className="quoteName">– {t.name}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Service Areas */}
      <Section
        title="Service Areas"
        subtitle={`Servicing all of Perth with a strong focus on North of the River suburbs. We regularly work in ${SUBURBS.join(
          ", "
        )} and surrounding new-build and established residential areas.`}
      >
        <div className="ctaBar">
          <div>
            <div className="ctaTitle">Fast, clear quoting</div>
            <div className="muted">Call us for a free quote and we’ll organise a time to view the job.</div>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="linkReset">
            <Button className="btnPrimary">Call {PHONE_DISPLAY}</Button>
          </a>
        </div>
      </Section>

      {/* Contact */}
      <section id="quote" className="contact">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Request a Free Quote</h2>
            <p className="subhead">Free quotes for new builds and existing garden renovations across Perth’s Northern Suburbs.</p>
          </div>

          <div className="contactTop">
            <a href={`tel:${PHONE_TEL}`} className="linkReset">
              <Button className="btnWhite">Call {PHONE_DISPLAY}</Button>
            </a>
            <a href={`mailto:${EMAIL}`} className="linkReset">
              <Button className="btnDark">Email Us</Button>
            </a>
          </div>

          <form action={`mailto:${EMAIL}`} method="POST" encType="text/plain" className="form">
            <div className="formRow">
              <input name="name" placeholder="Full Name" required />
              <input name="phone" placeholder="Phone Number" required />
            </div>
            <div className="formRow">
              <input name="email" placeholder="Email Address" required />
              <input name="suburb" placeholder="Suburb" />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your project (turf, paving, decking, limestone walls, etc.)"
              rows={5}
            />
            <Button type="submit" className="btnWhite formBtn">
              Submit Enquiry
            </Button>
            <div className="formNote">Prefer a quick quote? Tap to call and we’ll organise a time to view the job.</div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footerInner">
          <div>© {new Date().getFullYear()} JSL Landscaping</div>
          <div className="footerRight">Perth, Western Australia • {PHONE_DISPLAY}</div>
        </div>
      </footer>
    </div>
  );
}
