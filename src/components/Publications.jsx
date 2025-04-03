import { useEffect, useState } from "react";

export default function Publications() {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    async function fetchPublications() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/akashkumar62/labwebsite/main/publications.json"
        );
        const data = await response.json();
        setPublications(data);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    }
    fetchPublications();
  }, []);

  return (
    <section className="p-6 bg-white text-black">
      <h2 className="text-2xl font-bold text-center mb-4">Publications</h2>

      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="p-4 ">
            <p className="text-gray-700">{pub.description}</p>
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 block"
              >
                Read More
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
