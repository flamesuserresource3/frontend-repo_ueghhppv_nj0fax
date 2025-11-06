import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0A2540] via-[#0a2b57] to-[#0A2540] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A2540]/30 via-[#0A2540]/50 to-[#0A2540]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#FFB800]">Dhairya Soni • Computer Science Student</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Crafting bold, human-centered software
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          I turn complex problems into approachable, scalable products across the stack — with a strong foundation in algorithms, systems, and machine learning.
        </p>

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
    </section>
  );
};

export default Hero;
