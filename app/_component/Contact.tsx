"use client";

import { Send } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<"" | "sending" | "success" | "error">("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Lock body scroll when form is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus("");
        setOpen(false);
      }, 2500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* CONTACT FORM */}
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-xl space-y-6 bg-black border border-white/10 rounded-2xl p-8"
            aria-busy={status === "sending"}
          >
            <h2 className="text-2xl font-semibold text-white text-center">
              Let’s Talk 🚀
            </h2>

            {/* Name */}
            <div>
              <label className="block text-white mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white resize-none focus:outline-none focus:border-purple-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold transition hover:scale-105 disabled:opacity-50"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send className="w-5 h-5" />
                </>
              )}
            </button>

            {/* Feedback */}
            {status === "success" && (
              <div className="text-green-400 text-center">
                Message sent successfully! ✅
              </div>
            )}

            {status === "error" && (
              <div className="text-red-400 text-center">
                Something went wrong. Please try again.
              </div>
            )}

            {/* Close */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="w-full text-gray-400 hover:text-white transition"
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        /* CONTACT SECTION */
        <section
          id="Contact"
          className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 bg-gradient-to-b from-black via-gray-900 to-black text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] bg-clip-text text-transparent">
            Get In Touch
          </h1>

          <p className="mt-6 max-w-2xl text-gray-400 text-lg">
            I am actively seeking new career opportunities where I can
            contribute, learn, and create real impact. If you have an idea and
            want to transform it into a real-world solution, I’d love to
            collaborate. My inbox is always open—whether it’s a job opportunity,
            a project, or just a connection.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-[#00e786] to-cyan-400 text-black font-semibold hover:scale-105 transition"
          >
            Say Hello 👋
          </button>
        </section>
      )}
    </div>
  );
}
