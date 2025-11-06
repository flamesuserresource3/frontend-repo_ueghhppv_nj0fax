import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Vision Dashboard',
    desc: 'Web app streaming and analyzing video frames in realtime with GPU-accelerated inference.',
    tags: ['Python', 'FastAPI', 'React', 'WebSockets'],
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#',
    category: 'Data Science',
  },
  {
    title: 'IoT Health Monitor',
    desc: 'Edge device pipeline with MQTT broker and cloud dashboard for vitals monitoring.',
    tags: ['C++', 'Arduino', 'Node.js', 'React'],
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#',
    category: 'Hardware',
  },
  {
    title: 'Dev Portfolio Platform',
    desc: 'Template system for fast portfolio deployment with Markdown-based case studies.',
    tags: ['JavaScript', 'Vite', 'Tailwind'],
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    live: '#',
    repo: '#',
    category: 'Web Dev',
  },
];

const Tag = ({ children }) => (
  <span className="rounded-full border border-[#0A2540]/10 bg-[#0A2540]/5 px-3 py-1 text-xs text-[#0A2540]/80">{children}</span>
);

const ProjectCard = ({ p }) => (
  <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
    <div className="relative h-48 w-full overflow-hidden">
      <img src={p.img} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
    </div>
    <div className="space-y-3 p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
        <div className="flex items-center gap-2">
          <a href={p.live} className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="Live Demo">
            <ExternalLink className="h-5 w-5" />
          </a>
          <a href={p.repo} className="rounded-md p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900" aria-label="GitHub Repo">
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-600">{p.desc}</p>
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [filter, setFilter] = React.useState('All');
  const categories = ['All', 'Data Science', 'Web Dev', 'Hardware'];
  const filtered = projects.filter((p) => (filter === 'All' ? true : p.category === filter));

  return (
    <section id="projects" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Selected Projects</h2>
            <p className="mt-2 max-w-2xl text-gray-600">A snapshot of work across data, web, and hardware — designed, built, and shipped with care.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  filter === c
                    ? 'bg-[#0A2540] text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
