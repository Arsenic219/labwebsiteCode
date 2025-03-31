import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akashkumar62/labwebsite/main/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  const filterStudents = (category) => {
    setFilter(category);
    setVisibleCount(3);
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const filteredStudents = filter === "All" ? students : students.filter((s) => s.role.includes(filter));

  return (
    <section id="students" className="p-6 text-center bg-slate-200">
      <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2 text-black">Research Team</h2>
      <div className="flex justify-center space-x-3 mb-6">
        <button onClick={() => filterStudents("All")} className={`px-4 py-2 rounded-lg border-black hover:bg-blue-600 ${filter === "All" ? "bg-black text-white" : "bg-gray-200 text-black"}`}>All</button>
        <button onClick={() => filterStudents("PhD")} className={`px-4 py-2 rounded-lg hover:bg-blue-600 ${filter.includes("PhD") ? "bg-black text-white" : "bg-gray-200 text-black"}`}>PhD Students</button>
        <button onClick={() => filterStudents("Masters")} className={`px-4 py-2 rounded-lg hover:bg-blue-600 ${filter.includes("Masters") ? "bg-black text-white" : "bg-gray-200 text-black"}`}>Masters Students</button>
        <button onClick={() => filterStudents("Alumni")} className={`px-4 py-2 rounded-lg hover:bg-blue-600 ${filter === "Alumni" ? "bg-black text-white" : "bg-gray-200 text-black"}`}>Alumni</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredStudents.slice(0, visibleCount).map((student, index) => (
          <div key={index} className="bg-white text-black p-6 rounded-lg shadow-md text-center">
            <img src={student.image} alt={student.name} className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h3 className="text-xl font-semibold mb-1">{student.name}</h3>
            <p className="text-blue-500 mb-2">{student.role}</p>
            <p className="text-gray-600">Research Focus: {student.focus}</p>
            <p className="text-sm text-gray-500">Year: {student.year}</p>
            <div className="flex justify-center space-x-4 mt-4">
              {student.linkedin && (
                <a href={student.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              )}
              {student.github && (
                <a href={student.github} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              )}
              {student.email && (
                <a href={`mailto:${student.email}`} className="text-red-600 hover:text-red-800">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {visibleCount < filteredStudents.length && (
        <div className="text-center mt-6">
          <button onClick={loadMore} className="px-4 py-2 bg-gray-700 text-white rounded-lg">View More Students</button>
        </div>
      )}
    </section>
  );
}
