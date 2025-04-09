import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGraduationCap, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faFacebook,
  faTwitter,
  faGoogleScholar,
  faOrcid,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";


export default function Students() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/akashkumar62/labwebsite/main/students.json")
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  const filterStudents = (category) => setFilter(category);

  const filteredStudents =
    filter === "All" ? students : students.filter((s) => s.role.includes(filter));

  return (
    <section id="students" className="p-6 text-center bg-slate-800 font-sans">
      <h2 className="font-sans text-3xl md:text-5xl font-bold mb-6 border-b-2 pb-2 text-slate-50">
        Research Team
      </h2>

      {/* Proff */}

      <h2 className="font-mono text-4xl md:text-6xl text-start md:ml-24 ">Principal Investigator</h2>

      <div className="max-w-7xl mx-auto py-12 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* <h1 className="text-4xl font-bold">
              Highly motivated scholars can join our group for Ph.D for Advancing Inorganic Chemistry for a Sustainable and Greener Future.
            </h1> */}
            <div className="text-start text-white mb-1">
              <h2 className="text-2xl font-semibold">Dr. SaravanaKumar Elangovan</h2>
              <p className="text-lg mb-1">Assistant Professor, Department of Chemistry</p>
              <p>IIT (BHU) Varanasi</p>
              {/* <p className="font-semibold mb-1">Postdoctoral Researcher:</p>
              <p>Technische Universität Berlin, University of Groningen</p>
              <p className="font-semibold mb-1">Research Associate:</p>
              <p>Syngene International Limited</p> */}
              <p className="font-semibold mb-1">Area of Interest:</p>
              <p>Organometallic Chemistry, Homogeneous Catalysis, Biomass Conversions, Green Chemistry</p>
              <p className="font-semibold mt-2 mb-1">Phone: +91-12345678</p>
              <p className="font-semibold">Email: <a href="mailto:abcd.chy@iitbhu.ac.in" className="text-blue-600 underline">abcd.chy@iitbhu.ac.in</a></p>



               {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4 text-2xl">
              <a
                href="https://www.researchgate.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-600"
              >
                <FontAwesomeIcon icon={faResearchgate} />
              </a>
              <a
                href="https://scholar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-600"
              >
                <FontAwesomeIcon icon={faGoogleScholar} />
              </a>
              <a
                href="https://orcid.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-lime-600"
              >
                <FontAwesomeIcon icon={faOrcid} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sky-400"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>

              <a
                href="/about"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="mt-0">
            <img
              className="w-full md:w-3/4 shadow-lg"
              src="https://m.economictimes.com/thumb/msid-108212368,width-1200,height-900,resizemode-4,imgsize-69468/ms-dhoni.jpg"
              alt="Professor"
            />
          </div>
        </div>
      </div>


      <div className="flex justify-center flex-wrap gap-4 mb-28">
        {["All", "PhD", "Masters", "Alumni"].map((category) => (
          <button
            key={category}
            onClick={() => filterStudents(category)}
            className={`px-4 py-2 rounded-lg border hover:bg-blue-600 transition ${
              filter === category ? "bg-black text-white" : "bg-gray-200 text-black"
            }`}
          >
            {category === "PhD"
              ? "PhD Students"
              : category === "Masters"
              ? "Masters Students"
              : category}
          </button>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredStudents.map((student, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-xl shadow-lg text-center"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-40 h-40 object-cover object-center mx-auto rounded-full mb-4 border-1 border-gray-500"
            />
            <h3 className="text-xl font-bold mb-1">{student.name}</h3>
            <p className="text-blue-500 font-medium mb-2">{student.role}</p>
            <p className="text-gray-600 mb-1">
              <strong>Focus:</strong> {student.focus}
            </p>
            <p className="text-sm text-gray-500 mb-3">Year: {student.year}</p>

            <div className="flex justify-center gap-4">
              {student.linkedin && (
                <a
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              )}
              {student.github && (
                <a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 hover:text-black"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
              )}
              {student.email && (
                <a
                  href={`mailto:${student.email}`}
                  className="text-red-600 hover:text-red-800"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div> */}
<div className="md:mx-28 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {filteredStudents.map((student, index) => (
    <div
      key={index}
      className="bg-stone-700 md:w-auto mb-14  text-black p-6  shadow-md hover:shadow-lg transition-shadow duration-300 relative pt-20" // Increased pt-20 for larger image
    >
      {/* Student Image - Positioned higher with dotted border */}
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <div className="p-4 rounded-full border-2 border-dotted border-gray-300"> {/* Dotted border container */}
          <img
            src={student.image}
            alt={student.name}
            className="w-40 h-40 object-cover rounded-full" // Larger image size
          />
        </div>
      </div>

      {/* Student Info - Starts below the image */}
      <div className="mt-20 text-center"> {/* Adjusted mt-10 for larger image */}
        {/* Name and Email */}
        <h3 className="text-white text-xl font-bold">{student.name}</h3>
        <p className="text-blue-500 font-medium mb-1">{student.role}</p>
        <a 
          href={`mailto:${student.email}`} 
          className="text-slate-200 hover:underline text-sm block mb-3 cursor-pointer"
        >
          {student.email}
        </a>

        {/* Research Focus */}
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Research Field</h4>
          <p className="text-sm text-orange-300">
            {student.focus}
          </p>
        </div>

        {/* Year and Social Links */}
        <div className="flex flex-col items-center space-y-2">
  <p className="text-xs text-gray-500">Year: {student.year}</p>
  <div className="flex space-x-4">
    {student.linkedin && (
      <a
        href={student.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </a>
    )}
    {student.scholar && (
      <a
        href={student.scholar}
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-600 hover:text-indigo-800"
        title="Google Scholar"
      >
        <FontAwesomeIcon icon={faGraduationCap} size="lg" />
      </a>
    )}
    {student.orcid && (
      <a
        href={student.orcid}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-800"
        title="ORCID"
      >
        <FontAwesomeIcon icon={faIdBadge} size="lg" />
      </a>
    )}
  </div>
</div>
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
