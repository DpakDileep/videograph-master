"use client";

import axios from "axios";

export default function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      website: formData.get("website"),
      message: formData.get("message"),
    };

    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", data);

      alert("Message submitted successfully!");
      e.target.reset();
    } catch (error) {
      console.error(error.response?.data || error);
      alert("Failed to submit message.");
    }
  };

  return (
    <section className="contact spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798902705!2d-74.25986790365917!3d40.697670067823786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1596152431947!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <div className="contact__form">
              <h3>Get in touch</h3>

              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" required />

                <input type="email" name="email" placeholder="Email" required />

                <input type="text" name="website" placeholder="Website" />

                <textarea name="message" placeholder="Message" required />

                <button type="submit" className="site-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
