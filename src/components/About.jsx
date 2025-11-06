import React from 'react';

const skills = {
  Languages: ['Python', 'C++', 'JavaScript', 'Java'],
  Frameworks: ['React', 'Node.js', 'FastAPI', 'NumPy', 'Pandas', 'Scikit-learn'],
  Tools: ['Git', 'Docker', 'Arduino', 'Figma'],
  Concepts: ['Data Structures', 'Algorithms', 'Operating Systems', 'Machine Learning']
};

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">About Me</h2>
            <p className="mt-4 text-gray-700">
              I'm Dhairya Soni, a computer science student focused on building modern, scalable, and human-centered software products. I love taking ideas from scratch to launch — blending strong fundamentals with a creative mindset.
            </p>
            <p className="mt-3 text-gray-700">
              My interests span full‑stack development, data systems, and applied machine learning. I thrive in collaborative environments and enjoy turning complex requirements into delightful user experiences.
            </p>
            <div className="mt-6">
              <a
                href="/resume.pdf"
                className="rounded-md bg-[#FFB800] px-4 py-2 text-sm font-medium text-[#0A2540] hover:brightness-95"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Skills & Technologies</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group}>
                  <h4 className="text-sm font-medium text-gray-800">{group}</h4>
                  <ul className="mt-2 space-y-1">
                    {list.map((item) => (
                      <li key={item} className="text-sm text-gray-600">• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
