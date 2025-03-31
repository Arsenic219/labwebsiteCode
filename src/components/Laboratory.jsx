import React, { useEffect, useState } from "react";

export default function Laboratory() {
  const [labData, setLabData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLabData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/akashkumar62/labwebsite/main/laboratory.json"
        );
        const data = await response.json();
        setLabData(data);
      } catch (error) {
        console.error("Error fetching laboratory data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLabData();
  }, []);

  return (
    <section id="laboratory" className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 border-b-2 pb-2">Laboratory Facilities</h2>
      {loading ? (
        <p className="text-center text-gray-400">Loading laboratory data...</p>
      ) : (
        <>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Main Laboratory Equipment */}
            <div className="bg-gray-100 text-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Main Laboratory Equipment</h3>
              <ul className="space-y-3">
                {labData.equipment.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className={item.color}>{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Research Facilities */}
            <div className="bg-gray-100 text-black p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Research Facilities</h3>
              <ul className="space-y-3">
                {labData.facilities.map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className={item.color}>{item.icon}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Laboratory Statistics */}
          <div className="bg-gray-900 text-white p-6 rounded-lg mt-6 text-center grid md:grid-cols-4 gap-4">
            {labData.statistics.map((stat, index) => (
              <div key={index}>
                <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
