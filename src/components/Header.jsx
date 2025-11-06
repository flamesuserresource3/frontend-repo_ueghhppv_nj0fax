import React from 'react';
import { Github, Linkedin, Menu } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0A2540]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Dhairya Soni
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#home" className="text-sm text-white/80 hover:text-white">Home</a>
          <a href="#about" className="text-sm text-white/80 hover:text-white">About</a>
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/15 bg-white/5 p-2 text-white/80 hover:text-white"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/15 bg-white/5 p-2 text-white/80 hover:text-white"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="#projects"
            className="rounded-md bg-[#FFB800] px-4 py-2 text-sm font-medium text-[#0A2540] hover:brightness-95"
          >
            View Work
          </a>
        </div>
        <button
          className="block rounded-md border border-white/15 bg-white/5 p-2 text-white/90 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-[#0A2540]/80 px-6 py-3 text-white md:hidden">
          <div className="flex flex-col space-y-3">
            <a href="#home" onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">About</a>
            <a href="#projects" onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="text-sm text-white/80 hover:text-white">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
