import React from "react";

export default function About() {
  return (

    



    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">About Our Research Lab</h1>
       

      {/* sir info */}
      <div className="flex flex-col md:flex-row w-full items-center">
          <div className="p-4 flex justify-center w-full md:w-auto">
            <img
              className="max-w-xs md:max-w-md rounded-lg shadow-2xl border border-x-gray-700 transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
              src="https://m.economictimes.com/thumb/msid-108212368,width-1200,height-900,resizemode-4,imgsize-69468/ms-dhoni.jpg"
              alt="Professor"
            />
          </div>

          <div className="text-start relative w-full md:w-auto h-full bg-cover bg-center p-4 text-white">
            <h2 className="text-3xl font-bold">Dr. SaravanKumar Elangovan</h2>
            <p className="mt-2 font-semibold text-lg">Assistant Professor</p>
            <p className="text-md">Department of Chemistry</p>
            <p className="text-md">Indian Institute of Technology (BHU), Varanasi</p>
            <p className="text-lg font-semibold">Postdoctoral Researcher</p>
            <p className="text-md">Technische Universität Berlin, University of Groningen</p>
            <p className="text-lg font-semibold">Research Associate</p>
            <p className="text-md">Syngene International Limited</p>
            <p className="mt-2 font-semibold text-lg">Phone No(s):</p>
            <p className="text-md">+91-12345678</p>
            <p className="mt-2 font-semibold text-lg">Email:</p>
            <p>
              <a href="mailto:abcd.chy@iitbhu.ac.in" className="text-blue-400 hover:underline text-md">
                abcd.chy@iitbhu.ac.in
              </a>
            </p>
            {/* Learn More Button */}
            <a
              href="/about"
              className="mt-4 inline-block px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-700 text-lg"
            >
              Learn More
            </a>
          </div>
        </div>

      {/* Research Lab Overview */}
      <section>
        <h2 className="text-2xl font-semibold">Research Lab</h2>
        <p>
          Our lab focuses on groundbreaking research in chemistry and biotechnology, aiming to develop
          sustainable solutions for industrial and academic advancements.
        </p>
      </section>

      {/* Mission Statement */}
      <section>
        <h2 className="text-2xl font-semibold">Mission</h2>
        <p>
          To push the boundaries of scientific innovation while fostering a collaborative and inclusive research
          environment.
        </p>
      </section>

      {/* Vision Statement */}
      <section>
        <h2 className="text-2xl font-semibold">Vision</h2>
        <p>
          Our vision is to lead the way in transformative scientific discoveries that contribute to a
          better and more sustainable world.
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <p>
          Our team consists of dedicated researchers, PhD scholars, and visiting faculty from renowned
          institutions worldwide.
        </p>
      </section>

      {/* Join Us Section */}
      <section>
        <h2 className="text-2xl font-semibold">Join Us</h2>
        <p>
          We welcome highly motivated scholars to join our research team. Reach out to us for more details
          on opportunities available in our lab.
        </p>
      </section>

      {/* Personal Experience */}
      <section>
        <h2 className="text-2xl font-semibold">Personal Experience</h2>
        <ul className="list-disc pl-6">
          <li className="flex justify-between"><span>Professor at IIT BHU</span> <span>2015 - Present</span></li>
          <li className="flex justify-between"><span>Postdoctoral Research at University of Warwick</span> <span>2012 - 2015</span></li>
          <li className="flex justify-between"><span>Research Associate at XYZ Institute</span> <span>2009 - 2012</span></li>
        </ul>
      </section>

      {/* Awards */}
      <section>
        <h2 className="text-2xl font-semibold">Awards & Recognitions</h2>
        <ul className="list-disc pl-6">
          <li className="flex justify-between"><span>Best Researcher Award, XYZ Organization</span> <span>2021</span></li>
          <li className="flex justify-between"><span>National Science Fellowship</span> <span>2018</span></li>
          <li className="flex justify-between"><span>Innovative Chemist Award</span> <span>2015</span></li>
        </ul>
      </section>

      {/* Academic Background */}
      <section>
        <h2 className="text-2xl font-semibold">Academic Background</h2>
        <ul className="list-disc pl-6">
          <li className="flex justify-between"><span>PhD in Chemistry - XYZ University</span> <span>2009</span></li>
          <li className="flex justify-between"><span>M.Sc. in Chemistry - ABC University</span> <span>2005</span></li>
          <li className="flex justify-between"><span>B.Sc. in Chemistry - DEF College</span> <span>2003</span></li>
        </ul>
      </section>
    </div>
  );
}
