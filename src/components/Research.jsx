import React, { useEffect, useState } from "react";

export default function Research() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/akashkumar62/labwebsite/main/research.json"
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching research data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResearchData();
  }, []);

  return (
    <section id="research" className="p-6">
      <h2 className="font-sans text-4xl font-bold text-center mb-4">Research Areas</h2>
      {loading ? (
        <p className="text-center text-gray-400">Loading research projects...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6 mt-16 mb-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${project.color} text-white text-2xl mb-4`}
              >
                {project.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <ul className="text-gray-300">
                {project.findings.map((finding, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    ✅ <span>{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
