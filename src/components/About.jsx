import React from "react";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">About Our Research Lab</h1>
      
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
