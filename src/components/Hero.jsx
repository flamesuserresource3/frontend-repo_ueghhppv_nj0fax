import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

// Utility glow styles using Tailwind drop-shadow filters for a neon effect
const neon = {
  label: 'text-sky-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.55)]',
  title: 'text-cyan-50 drop-shadow-[0_0_14px_rgba(125,211,252,0.75)]',
  subtitle: 'text-slate-200 drop-shadow-[0_0_10px_rgba(226,232,240,0.35)]',
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-[84vh] md:h-[92vh] w-full overflow-hidden bg-[#0A192F] text-white"
      aria-label="Intro section with interactive keyboard"
    >
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle vignette + depth overlay (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,12,27,0)_0%,rgba(2,12,27,0.35)_55%,rgba(2,12,27,0.85)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020C1B]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <p className={`mb-3 text-[11px] md:text-xs uppercase tracking-[0.22em] ${neon.label}`}>
          DHAIRYA SONI • COMPUTER SCIENCE STUDENT
        </p>
        <h1 className={`text-4xl font-semibold leading-tight md:text-6xl ${neon.title}`}>
          Crafting bold, human-centered software
        </h1>
        <p className={`mt-4 max-w-2xl text-sm md:text-lg ${neon.subtitle}`}>
          I turn complex problems into approachable, scalable products across the stack — with a strong foundation in algorithms, systems, and machine learning.
        </p>

        {/* Primary CTAs */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center rounded-md bg-[#FFB800] px-5 py-3 text-[#0A2540] transition hover:brightness-95"
          >
            View My Work <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-md border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Interactive Key Areas overlaying the 3D keypad */}
      {/* These are positioned to sit around the lower-center of the hero, sized large for accessibility */}
      <div className="absolute inset-0 z-10 flex items-end justify-center pb-16 md:pb-20">
        <div className="flex gap-3 md:gap-4">
          {/* Works key */}
          <a
            href="#projects"
            aria-label="Go to Projects"
            className="group relative select-none rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur-sm transition md:px-5 md:py-2.5 md:text-base cursor-pointer
                       hover:border-cyan-300/60 hover:bg-cyan-400/15
                       hover:shadow-[0_0_18px_rgba(34,211,238,0.55),0_0_2px_rgba(34,211,238,0.9)_inset]
                       active:scale-[0.98] active:translate-y-[1px]"
          >
            <span className="pointer-events-none">Works</span>
          </a>

          {/* Hire Me key */}
          <a
            href="#contact"
            aria-label="Go to Contact"
            className="group relative select-none rounded-lg border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2 text-sm font-medium text-fuchsia-100 backdrop-blur-sm transition md:px-5 md:py-2.5 md:text-base cursor-pointer
                       hover:border-fuchsia-300/60 hover:bg-fuchsia-400/15
                       hover:shadow-[0_0_18px_rgba(232,121,249,0.55),0_0_2px_rgba(232,121,249,0.9)_inset]
                       active:scale-[0.98] active:translate-y-[1px]"
          >
            <span className="pointer-events-none">Hire Me</span>
          </a>

          {/* About key (optional) */}
          <a
            href="#about"
            aria-label="Go to About"
            className="group relative select-none rounded-lg border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur-sm transition md:px-5 md:py-2.5 md:text-base cursor-pointer
                       hover:border-sky-300/60 hover:bg-sky-400/15
                       hover:shadow-[0_0_18px_rgba(56,189,248,0.55),0_0_2px_rgba(56,189,248,0.9)_inset]
                       active:scale-[0.98] active:translate-y-[1px]"
          >
            <span className="pointer-events-none">About</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
