import React, { useEffect, useState } from "react";

export default function Research() {
  const [projects, setProjects] = useState([]);
  const [highlightSections, setHighlightSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const projectsRes = await fetch(
          "https://raw.githubusercontent.com/Arsenic219/labwebsite/main/research.json"
        );
        const highlightsRes = await fetch(
          "https://raw.githubusercontent.com/Arsenic219/labwebsite/main/researchHighlights.json"
        );

        const projectData = await projectsRes.json();
        const highlightsData = await highlightsRes.json();

        setProjects(projectData);
        setHighlightSections(highlightsData);
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, []);

  return (
    <section id="research" className="bg-white text-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Research Focus
        </h2>

        {/* Highlighted Research Sections */}
        <div className="space-y-20">
          {highlightSections.map((section, index) => (
            <div
              key={index}
              className="rounded-3xl bg-gradient-to-br from-gray-100 to-white shadow-md p-8"
            >
              <div className="md:flex md:items-start md:space-x-8">
                <div className="md:w-1/2 mb-6 md:mb-0">
                  <h3 className="text-3xl font-semibold mb-4">{section.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`research-${idx}`}
                      className="w-full  object-cover shadow hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        {/* <div className="mt-20">
          <h3 className="text-3xl font-bold mb-6 text-center">Featured Research Areas</h3>
          {loading ? (
            <p className="text-center text-gray-500">Loading research projects...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-xl ${project.color}`}
                  >
                    {project.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <ul className="space-y-2 text-sm">
                    {project.findings.map((finding, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-green-400">✔️</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div> */}
      </div>
    </section>
  );
}
