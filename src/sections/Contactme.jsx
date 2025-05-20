import { useState } from 'react';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/xpwpnekg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6 md:p-10 mt-8 border-t-4 border-amber-300">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        {touched ? 'Contact Me / Collab' : 'Contact Me'}
      </h2>

      {submitted ? (
        <p className="text-green-600 font-medium text-center">Thanks for reaching out!</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
          onFocus={() => setTouched(true)}
        >
          {/* Floating Input Fields */}
          {[
            { id: 'name', label: 'Your Name', type: 'text' },
            { id: 'email', label: 'Your Email', type: 'email' },
          ].map(({ id, label, type }) => (
            <div className="relative" key={id}>
              <input
                type={type}
                name={id}
                id={id}
                required
                value={formData[id]}
                onChange={handleChange}
                className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder={label}
              />
              <label
                htmlFor={id}
                className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500"
              >
                {label}
              </label>
            </div>
          ))}

          {/* Message Textarea */}
          <div className="relative">
            <textarea
              name="message"
              id="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-3 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-yellow-500"
            >
              Your Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
