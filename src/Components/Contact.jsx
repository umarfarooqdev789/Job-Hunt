import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.submit();
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="w-full bg-[#f8f9fc] py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-10">
        <div className="pt-10 space-y-6">
          <h2 className="text-2xl font-semibold text-black">Contact Us</h2>

          <p className="text-gray-600 leading-relaxed">
            Fill out the form and our team will reach out to you
            within 1–2 business days.
          </p>

          <div className="pt-4 border-t border-gray-300">
            <h3 className="text-lg font-semibold text-black">Email</h3>
            <p className="text-gray-700 mt-1">someone@example.com</p>
          </div>
        </div>
        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-sm">
          <form
            onSubmit={handleSubmit}
            method="POST"
            action="https://formspree.io/f/xojkbqer"
            target="form-target"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md "
              />

              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md "
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject (optional)"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md "
            />
            <textarea
              name="message"
              rows="6"
              placeholder="Enter Your Message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md"
            ></textarea>

            <button
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md font-medium"
            >
              Send Message
            </button>
          </form>

          <iframe
            name="form-target"
            style={{ display: "none" }}
            title="hiddenFrame"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;