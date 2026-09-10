"use client";

import { Send, Mail, Sparkles, X } from "lucide-react";
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
    return () => {
      document.body.style.overflow = "auto";
    };
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
    <div className="w-full">
      {/* CONTACT FORM MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-lg my-8 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-[#00e786]/5">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-900 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00e786]/10 border border-[#00e786]/20 text-[#00e786] text-xs font-semibold mb-2">
                <Sparkles className="w-3 h-3" /> Get In Touch
              </div>
              <h2 className="text-2xl font-bold text-white">Let&apos;s Build Together</h2>
              <p className="text-xs text-zinc-400 mt-1">Have a project, opportunity, or idea? Send me a message.</p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              aria-busy={status === "sending"}
            >
              {/* Name */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#00e786] focus:ring-1 focus:ring-[#00e786]/40 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#00e786] focus:ring-1 focus:ring-[#00e786]/40 transition-all"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project or Role Discussion"
                  className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#00e786] focus:ring-1 focus:ring-[#00e786]/40 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell me about your project, timeline, or requirements..."
                  className="w-full px-4 py-2.5 bg-zinc-900/90 border border-zinc-800 rounded-xl text-white text-sm placeholder-zinc-500 resize-none focus:outline-none focus:border-[#00e786] focus:ring-1 focus:ring-[#00e786]/40 transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#00e786] via-teal-300 to-cyan-400 text-black font-bold text-sm shadow-lg shadow-[#00e786]/20 hover:shadow-[#00e786]/40 transition-all hover:scale-[1.01] disabled:opacity-50 cursor-pointer"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Feedback Notifications */}
              {status === "success" && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium text-center">
                  Message sent successfully! I will respond promptly. &check;
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium text-center">
                  Something went wrong. Please email directly at nishchalsundan04@gmail.com
                </div>
              )}
            </form>
          </div>
        </div>
      )}

      {/* CONTACT SECTION */}
      <section
        id="Contact"
        className="relative min-h-[85vh] w-full flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-zinc-950 to-black text-center overflow-hidden"
      >
        {/* Glow ambient */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[500px] h-96 sm:h-[500px] bg-[#00e786] rounded-full blur-[160px] opacity-[0.07]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00e786]/30 bg-[#00e786]/10 text-[#00e786] text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
            <Mail className="w-3.5 h-3.5" />
            Connect With Me
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400 mb-4">
            Let&apos;s Build Something <span className="bg-gradient-to-r from-[#00e786] via-cyan-400 to-[#00e786] bg-clip-text text-transparent">Extraordinary</span>
          </h2>

          <div className="mt-4 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#00e786] to-transparent rounded-full mb-6" />

          <p className="mt-4 max-w-2xl mx-auto text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed">
            I am actively seeking software engineering opportunities and impactful freelance collaborations. If you are building high-scale applications, autonomous AI agents, or automation pipelines, let&apos;s discuss how I can contribute.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00e786] via-teal-300 to-cyan-400 text-black font-bold text-sm shadow-xl shadow-[#00e786]/20 hover:shadow-[#00e786]/40 hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <span>Say Hello</span>
              <span className="text-base">&rarr;</span>
            </button>

            <a
              href="mailto:nishchalsundan04@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-zinc-900/80 border border-zinc-700/80 text-zinc-300 hover:text-[#00e786] hover:border-[#00e786] font-semibold text-sm transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              <span>nishchalsundan04@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
