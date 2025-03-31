import { useEffect, useState } from "react";

export default function Publications() {
  const [publications, setPublications] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedYear, setSelectedYear] = useState("All");

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

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const filterByYear = (year) => {
    setSelectedYear(year);
    setVisibleCount(3);
  };

  const filteredPublications =
    selectedYear === "All"
      ? publications
      : publications.filter((pub) => pub.year === selectedYear);

  return (
    <section id="publications" className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 border-b-2 pb-2">
        Publications
      </h2>

      {/* Professor's Google Scholar Link */}
      <div className="text-center mb-6">
        <a
          href="https://scholar.google.com/citations?user=XXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Professor's Google Scholar
        </a>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-3 mb-6">
        <button
          onClick={() => filterByYear("All")}
          className={`px-4 py-2 rounded-lg ${
            selectedYear === "All" ? "bg-black text-white" : "bg-gray-200 text-black"
          }`}
        >
          All
        </button>
        {[2023, 2022, 2021].map((year) => (
          <button
            key={year}
            onClick={() => filterByYear(year)}
            className={`px-4 py-2 rounded-lg ${
              selectedYear === year ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Publication List */}
      <div className="space-y-6">
        {filteredPublications.slice(0, visibleCount).map((pub, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
            <p className="text-gray-600">{pub.journal}</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {pub.topics.map((topic, idx) => (
                <span key={idx} className="px-3 py-1 text-sm rounded-full bg-blue-200">
                  {topic}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-500 mt-2">Authors: {pub.authors}</p>

            <div className="mt-4 flex space-x-4">
              <a
                href={pub.scholarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Google Scholar
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPublications.length && (
        <div className="text-center mt-6">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
          >
            Load More Publications
          </button>
        </div>
      )}
    </section>
  );
}
