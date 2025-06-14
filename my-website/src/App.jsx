import './App.css';

function App() {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Your Modern Website</h1>
        <p>Beautiful, responsive, and ready to impress.</p>
        <a href="#contact" className="cta-btn">Contact Us</a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Us</h2>
        <p>
          We create stunning, modern websites that help you stand out online. Our team is passionate about design, usability, and performance.
        </p>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Features</h2>
        <div className="features-list">
          <div className="feature-card">
            <h3>Modern Design</h3>
            <p>Clean, elegant, and up-to-date with the latest trends.</p>
          </div>
          <div className="feature-card">
            <h3>Responsive</h3>
            <p>Looks great on any device, big or small.</p>
          </div>
          <div className="feature-card">
            <h3>Fast & Secure</h3>
            <p>Optimized for speed and security from the ground up.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your Modern Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
