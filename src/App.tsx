import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">JSL Landscaping</div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Enquire</a>
        </nav>
      </header>

      <main className="main">
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <h1>Quality Landscaping North of the River</h1>
            <p>
              JSL Landscaping specialises in turf, reticulation, paving, decking and more.
              Reliable work, neat finishes, and clear communication from start to finish.
            </p>
            <a href="#contact" className="hero-button">
              Get a Free Quote
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section section-card">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Turf</h3>
              <p>Real and artificial turf supplied and installed, ready to enjoy.</p>
            </div>
            <div className="service-card">
              <h3>Reticulation</h3>
              <p>New installs, repairs and adjustments to keep lawns green year-round.</p>
            </div>
            <div className="service-card">
              <h3>Paving &amp; Edging</h3>
              <p>Driveways, paths and garden edging that look great and last.</p>
            </div>
            <div className="service-card">
              <h3>Decking &amp; More</h3>
              <p>Decks, screens and other landscaping to finish your outdoor space.</p>
            </div>
          </div>
        </section>
        
{/* GALLERY */}
<section className="section section-card">
  <h2>Recent Work</h2>
  <p>Some recent landscaping projects completed north of the river.</p>

{(() => {
  const base = import.meta.env.BASE_URL;

  return (
    <div className="gallery">
      <img src={`${base}work/assets/project1.jpg`} alt="Modern front garden with stone and cactus" />
      <img src={`${base}work/assets/project2.jpg`} alt="Decking and artificial lawn" />
      <img src={`${base}work/assets/project3.jpg`} alt="Side path stepping stones with turf" />
      <img src={`${base}work/assets/project4.jpg`} alt="Backyard lawn and paving area" />
    </div>
  );
})()}


</section>

        {/* ABOUT */}
        <section id="about" className="section section-card">
          <h2>About JSL Landscaping</h2>
          <p>
            Based <strong>north of the river</strong>, JSL Landscaping provides full landscaping
            solutions for new builds and existing homes. We focus on tidy workmanship, turning up
            when we say we will, and leaving your property cleaner than we found it.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section section-card contact-section">
          <h2>Request a Quote</h2>
          <p>Fill out the form below and we’ll get back to you as soon as possible.</p>

          <form
            className="contact-form"
            action="https://formsubmit.co/jsllandscaping@outlook.com.au"
            method="POST"
          >
            {/* Formsubmit config */}
            <input
              type="hidden"
              name="_subject"
              value="New enquiry from JSL Landscaping website"
            />
            <input type="hidden" name="_captcha" value="false" />
            {/* Optional: redirect to a thank-you page if you have one */}
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

            <div className="form-row">
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Phone
                <input type="tel" name="phone" required />
              </label>
            </div>

            <div className="form-row">
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Suburb
                <input type="text" name="suburb" required />
              </label>
            </div>

            <label className="full-width">
              Job details
              <textarea
                name="message"
                rows={4}
                placeholder="New build / existing home? What would you like done?"
                required
              />
            </label>

            <button type="submit" className="submit-button">
              Send Enquiry
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>JSL Landscaping · North of the river · 0415 893 100</p>
        <p>ABN · jsllandscaping@outlook.com.au</p>
      </footer>
    </div>
  );
}

export default App;
