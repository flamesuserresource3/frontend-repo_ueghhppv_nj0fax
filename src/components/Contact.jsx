import React from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#0A2540] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Let's Connect</h2>
          <p className="mt-2 text-white/80">I'm currently seeking new opportunities. My inbox is always open.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thanks! Your message has been recorded for this demo.');
            }}
            className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-white/80">Name</label>
                <input type="text" required className="w-full rounded-md border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#FFB800]" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-white/80">Email</label>
                <input type="email" required className="w-full rounded-md border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#FFB800]" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Subject</label>
              <input type="text" required className="w-full rounded-md border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#FFB800]" placeholder="What's this about?" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-white/80">Message</label>
              <textarea required rows={4} className="w-full rounded-md border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-[#FFB800]" placeholder="Write your message..." />
            </div>
            <button type="submit" className="inline-flex items-center rounded-md bg-[#FFB800] px-5 py-3 text-[#0A2540] transition hover:brightness-95">
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">Reach me directly</h3>
              <a href="mailto:your.email@example.com" className="inline-flex items-center text-white/90 hover:text-white">
                <Mail className="mr-2 h-5 w-5" /> your.email@example.com
              </a>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:text-white"
                >
                  <Github className="h-5 w-5" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" /> LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-lg font-semibold">Location & Availability</h3>
              <p className="text-white/80">Open to internships and part‑time roles. Comfortable with remote-first teams across time zones.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
