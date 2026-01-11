import "./App.css";
import { useEffect } from "react";

function Button({ children, className = "", ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

const PHONE_DISPLAY = "0415 893 100";
const PHONE_TEL = "0415893100";
const EMAIL = "jsllandscaping@outlook.com.au";
const INSTAGRAM_URL = "https://www.instagram.com/jsllandscaping/";

const SERVICES = [
  {
    title: "Turf & Artificial Grass",
    desc: "Artificial turf and real lawn installs with proper preparation and clean edging.",
  },
  {
    title: "Paving, Decking & Retic",
    desc: "Paving, decking and reticulation systems built to last.",
  },
  {
    title: "Residential Landscaping",
    desc: "New builds and existing garden renovations including planting and limestone walls.",
  },
];

const TESTIMONIALS = [
  "Jordan and his team completely transformed our backyard. Highly recommend!",
  "Prompt quoting, great communication and amazing finish.",
  "Professional, friendly and efficient from start to finish.",
];

const THUMBNAILS = [
  { img: "/work/1.jpg", url: "https://www.instagram.com/p/DBJMb83ymWT/" },
  { img: "/work/2.jpg", url: "https://www.instagram.com/p/DEHO8ogSQFu/" },
  { img: "/work/3.jpg", url: "https://www.instagram.com/p/DJDsutrSVzj/" },
  { img: "/work/4.jpg", url: "https://www.instagram.com/p/DSwtsuDkwMe/" },
  { img: "/work/5.jpg", url: "https://www.instagram.com/p/DMNAfEeR-Mc/" },
  { img: "/work/6.jpg", url: "https://www.instagram.com/p/C3B6fF_PE6Z/" },
];

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="container headerInner">
          <img src="/logo-jsl.png" alt="JSL Landscaping" className="logo" />
          <div className="headerBtns">
            <a href={`tel:${PHONE_TEL}`}>
              <Button>Call {PHONE_DISPLAY}</Button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <h1>Residential Landscaping – Perth</h1>
          <p>Artificial turf, paving, decking, limestone walls & garden renovations.</p>
          <a href="#quote">
            <Button>Free Quote</Button>
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container grid3">
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* LATEST WORK */}
      <section className="section">
        <div className="container">
          <h2>Latest Work</h2>

          <div className="thumbGrid">
            {THUMBNAILS.map((t) => (
              <a key={t.img} href={t.url} target="_blank" rel="noreferrer">
                <img src={t.img} alt="JSL Landscaping work" className="thumbImg" />
              </a>
            ))}
          </div>

          <div style={{ marginTop: 16 }}>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Button>View More on Instagram</Button>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container grid3">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i}>
              <p>{t}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="quote" className="section">
        <div className="container">
          <h2>Request a Free Quote</h2>
          <form action={`mailto:${EMAIL}`} method="POST" encType="text/plain">
            <input placeholder="Name" required />
            <input placeholder="Phone" required />
            <textarea placeholder="Tell us about your project" />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} JSL Landscaping
        </div>
      </footer>
    </div>
  );
}
