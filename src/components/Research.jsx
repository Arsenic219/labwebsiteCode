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


     {/* div1 */}
     <div className="bg-white py-12 px-4 text-black">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Designing of earth-abundant transition metal complexes</h2>
  <p className="text-lg md:text-xl mb-8 text-gray-600">
  Catalysis is integral to contemporary chemical industries, underscoring the significance of
catalyst development for the production of diverse value-added products. From both economic
and sustainability perspectives, the design of catalysts utilizing inexpensive and abundant
metals is particularly noteworthy. Consequently, our laboratory is dedicated to the
advancement of innovative catalysts employing earth-abundant transition metals for a range of
catalytic organic transformations.
  </p>

  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
    <img
      src="https://www.energy.gov/sites/default/files/2024-07/doe-explains-catalysts.png"
      alt="Catalyst"
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
    />
    <img
      src="https://cdn-images-1.medium.com/max/860/1*Xhmgia44I9FV-J1NeBgGrA.jpeg"
      alt="Green Chemistry"
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
    />
    <img
      src="https://scitechdaily.com/images/Green-Chemistry-Energy-Catalyst-Art.jpg"
      alt="Simulation"
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
    />
  </div>
     </div>

      {/* div2 */}
      <div className="bg-white py-12 px-4 text-black">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Valorization of biomass into high-value chemicals</h2>
  <p className="text-lg md:text-xl mb-8 text-gray-600">
  In pursuit of a comfortable and sophisticated lifestyle, we often exploit the Earth&#39;s resources,
resulting in global warming, climate change, etc. The rapid depletion of fossil fuels necessitates
the exploration of alternative resources to ensure a safer living environment. Biomass, being an
abundant and carbon-neutral resource with functionalized moieties, presents a viable solution.
Therefore, our research group is dedicated to developing sustainable and catalytic
methodologies for the valorization of biomass into high-value chemicals.
  </p>

  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
    <img
      src="https://www.energy.gov/sites/default/files/2024-07/doe-explains-catalysts.png"
      alt="Catalyst"
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
    />
    <img
      src="https://cdn-images-1.medium.com/max/860/1*Xhmgia44I9FV-J1NeBgGrA.jpeg"
      alt="Green Chemistry"
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
    />
    <img
      src="https://scitechdaily.com/images/Green-Chemistry-Energy-Catalyst-Art.jpg"
      alt="Simulation"
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
    />
  </div>
</div>


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
