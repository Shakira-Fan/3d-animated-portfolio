import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-inner contactInner">
        <div className="contactCopy">
          <p className="eyebrow">Next drop</p>
          <h2 className="spray-title">
            Build the first <span className="marker">real collection.</span>
          </h2>
          <p>
            Start with a small release: one wall archive, one shirt graphic, one
            board mockup, and one pocket object. The site can grow as the real
            work grows.
          </p>
        </div>

        <form className="contactForm">
          <label>
            Name
            <input type="text" placeholder="Collector / shop / collaborator" />
          </label>
          <label>
            Email
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Message
            <textarea rows={5} placeholder="Tell us what surface you want to make." />
          </label>
          <button type="button">Draft inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
