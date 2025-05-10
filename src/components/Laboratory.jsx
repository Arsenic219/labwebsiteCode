import React, { useEffect, useState } from "react";

export default function Laboratory() {
  const [labItems, setLabItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLabData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/akashkumar62/labwebsite/main/laboratory.json"
        );
        const data = await response.json();
        setLabItems(data);
      } catch (error) {
        console.error("Error fetching laboratory data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLabData();
  }, []);

  return (
    <section id="laboratory" className="p-6 bg-white text-black">
      <h2 className="font-sans text-4xl font-bold text-center mb-8 border-b-2 pb-4">
        Laboratory Facilities
      </h2>

      {loading ? (
        <p className="text-center text-gray-400">Loading laboratory data...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {labItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
