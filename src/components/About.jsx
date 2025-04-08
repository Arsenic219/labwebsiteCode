import React from "react";

export default function About() {
  return (

    



    <div className="bg-white text-black font-sans mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center border-b-2 pb-2 text-black">About Our Research Lab</h1>
       

      {/* sir info */}
      <div className="max-w-7xl mx-auto py-12 text-black">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {/* <h1 className="text-4xl font-bold">
              Highly motivated scholars can join our group for Ph.D for Advancing Inorganic Chemistry for a Sustainable and Greener Future.
            </h1> */}
            <div className="text-start">
              <h2 className="text-2xl font-semibold">Dr. SaravanaKumar Elangovan</h2>
              <p className="text-lg">Assistant Professor, Department of Chemistry</p>
              <p>IIT (BHU) Varanasi</p>
              <p className="font-semibold">Postdoctoral Researcher:</p>
              <p>Technische Universität Berlin, University of Groningen</p>
              <p className="font-semibold">Research Associate:</p>
              <p>Syngene International Limited</p>
              <p className="font-semibold">Area of Interest:</p>
              <p>Organometallic Chemistry, Homogeneous Catalysis, Biomass Conversions, Green Chemistry</p>
              <p className="font-semibold mt-2">Phone: +91-12345678</p>
              <p className="font-semibold">Email: <a href="mailto:abcd.chy@iitbhu.ac.in" className="text-blue-600 underline">abcd.chy@iitbhu.ac.in</a></p>
              <a
                href="/about"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Learn More
              </a>
            </div>
          </div>
          <div>
            <img
              className="w-full rounded-lg shadow-lg"
              src="https://m.economictimes.com/thumb/msid-108212368,width-1200,height-900,resizemode-4,imgsize-69468/ms-dhoni.jpg"
              alt="Professor"
            />
          </div>
        </div>
      </div>

      <div className="mx-12">
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
        Our group focuses on the development of novel ligands, base metal complexes, and sustainable synthetic methods that enable the valorization of biomass. To date, most of the valuable chemicals are produced from fossil fuels that result in adverse 
        climate change. Hence, our main motive is the synthesis of bio-based chemicals, pharmaceuticals, polymers, etc. using inexpensive ligands and metals as catalysts concerning sustainability, green chemistry, and circular economy. 
        </p>
      </section>

      {/* Team Section */}
      <section>
  <h2 className="text-2xl font-semibold">Our Team</h2>
  <p>
    Our team consists of dedicated researchers, PhD scholars, and visiting faculty from renowned 
    institutions worldwide.
  </p>

  {/* Research Scholars */}
  <h3 className="text-xl font-semibold mt-4">Research Scholars</h3>
  <ul className="list-disc pl-6">
    <li><strong>Mohd Farhan Ansari</strong> (<a href="mailto:mohdfarhanansari.rs.chy22@itbhu.ac.in" className="text-blue-500">mohdfarhanansari.rs.chy22@itbhu.ac.in</a>)</li>
    <li><strong>Atul Kumar Maurya</strong> (<a href="mailto:atulkumarmaurya.rs.chy23@itbhu.ac.in" className="text-blue-500">atulkumarmaurya.rs.chy23@itbhu.ac.in</a>)</li>
    <li><strong>Rashid Khan</strong> (<a href="mailto:rashidkhan.rs.chy24@itbhu.ac.in" className="text-blue-500">rashidkhan.rs.chy24@itbhu.ac.in</a>)</li>
    <li><strong>Ratnakar Singh</strong> (<a href="mailto:ratnakarsingh.rs.chy24@itbhu.ac.in" className="text-blue-500">ratnakarsingh.rs.chy24@itbhu.ac.in</a>)</li>
  </ul>

  {/* Master Students */}
  <h3 className="text-xl font-semibold mt-4">Master Students</h3>
  <ul className="list-disc pl-6">
    <li><strong>Mansi Yadav</strong></li>
    <li><strong>Alka Yadav</strong></li>
  </ul>

  {/* IDD Students */}
  <h3 className="text-xl font-semibold mt-4">IDD Students</h3>
  <ul className="list-disc pl-6">
    <li><strong>Akash Kumar</strong></li>
    <li><strong>Pakhi Awasthi</strong></li>
    <li><strong>Ankita Patra</strong></li>
  </ul>

  {/* Alumni */}
  <h3 className="text-xl font-semibold mt-4">Alumni</h3>
  <ul className="list-disc pl-6">
    <li><strong>Anshika</strong> (M.Sc. 2023; Current position: Ph.D. student, Michigan State University, USA)</li>
    <li><strong>Abhishek Kumar</strong> (M.Sc. 2024)</li>
    <li><strong>Nitin Acchelal Yadav</strong> (M.Sc. 2024)</li>
  </ul>
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
    <li className="flex justify-between">
      <span><strong>Assistant Professor</strong>, Indian Institute of Technology (BHU), Varanasi</span>
      <span>July 2022 – Present</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Ramanujan Fellow</strong>, National Institute of Technology, Trichy</span>
      <span>Mar 2022 – June 2022</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Humboldt Post-Doctoral Fellow</strong>, Technical University of Berlin, Germany</span>
      <span>Aug 2019 – Feb 2022</span>
    </li>
    <li className="flex justify-between">
      <span>Advisor: Prof. Dr. Martin Oestreich</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Post-Doctoral Researcher</strong>, University of Groningen, The Netherlands</span>
      <span>Feb 2017 – July 2019</span>
    </li>
    <li className="flex justify-between">
      <span>Advisor: Prof. Dr. Katalin Barta</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Professor</strong>, Indian Institute of Technology (BHU)</span>
      <span>2015 – Present</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Postdoctoral Research</strong>, University of Warwick</span>
      <span>2012 – 2015</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Research Associate</strong>, Syngene International Ltd, Bangalore</span>
      <span>Feb 2010 – Aug 2012</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Research Associate</strong>, XYZ Institute</span>
      <span>2009 – 2012</span>
    </li>
    <li className="flex justify-between">
      <span><strong>Chemist</strong>, Advinus Therapeutics Private Ltd, Bangalore, India</span>
      <span>June 2009 – Dec 2010</span>
    </li>
  </ul>
</section>


      {/* Awards */}
      <section>
  <h2 className="text-2xl font-semibold">Awards & Recognitions</h2>
  <ul className="list-disc pl-6 mb-9">
    <li><strong>Beijing Youth Talent Funding Program</strong> – Visiting program for young foreign scholars</li>
    <li><strong>Ramanujan Fellowship</strong> <span className="float-right">2021</span></li>
    <li><strong>Alexander Von Humboldt Fellowship</strong> <span className="float-right">Aug 2019 – July 2021</span></li>
    <li><strong>Selected for 70th Lindau Nobel Laureate Meeting</strong> <span className="float-right">2020</span></li>
    <li><strong>Ph.D. Fellowship</strong>, Leibniz-Institut für Katalyse, Rostock, Germany <span className="float-right">Feb 2015 – July 2016</span></li>
    <li><strong>Ph.D. Fellowship (ARED)</strong>, Conseil Régional de Bretagne, Rennes, France <span className="float-right">Oct 2013 – Jan 2015</span></li>
    <li><strong>Charpak Scholarship of Excellence</strong> for International Master Program, University of Rennes1, France <span className="float-right">Sep 2012 – June 2013</span></li>
    <li><strong>The Tamilnadu Educational Trust</strong> – Fresh Scholarship for Master Studies <span className="float-right">2007 – 2008</span></li>
    <li><strong>Best Researcher Award</strong>, XYZ Organization <span className="float-right">2021</span></li>
    <li><strong>National Science Fellowship</strong> <span className="float-right">2018</span></li>
    <li><strong>Innovative Chemist Award</strong> <span className="float-right">2015</span></li>
  </ul>
</section>


      {/* Academic Background */}
      <section>
  <h2 className="text-2xl font-semibold">Academic Background</h2>
  <ul className="list-disc pl-6 mb-9">
    <li>
      <strong>Ph.D. in Organometallics and Catalysis</strong>, Université de Rennes 1, Rennes, France, Leibniz-Institut für Katalyse e. V., Rostock, Germany 
      <span className="float-right">2013 – 2017</span>
      <br />
      Advisors: Prof. Christophe Darcel and Prof. Dr. Matthias Beller
    </li>
    <li>
      <strong>International Master Program</strong> in Molecular Catalysis and Green Chemistry, Université de Rennes 1, France 
      <span className="float-right">2012 – 2013</span>
    </li>
    <li>
      <strong>Master of Science in Chemistry</strong>, St. Joseph’s College, Trichy, India 
      <span className="float-right">2007 – 2009</span>
    </li>
    <li>
      <strong>Bachelor of Science in Chemistry</strong>, AVVM Sri Pushpam College, Thanjavur, India 
      <span className="float-right">2003 – 2006</span>
    </li>
  </ul>
</section>

<section>
  <h2 className="text-2xl font-semibold">Teaching</h2>
  <p>
    Below are the courses taught, covering fundamental and advanced topics in Chemistry.
  </p>

  <table className="w-full border-collapse border border-gray-300 mt-4">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-300 px-4 py-2">Entry</th>
        <th className="border border-gray-300 px-4 py-2">Course Name</th>
        <th className="border border-gray-300 px-4 py-2">Course Code</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border border-gray-300 px-4 py-2">1</td><td className="border border-gray-300 px-4 py-2">Chemistry I</td><td className="border border-gray-300 px-4 py-2">CY-101</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">2</td><td className="border border-gray-300 px-4 py-2">Chemistry II</td><td className="border border-gray-300 px-4 py-2">CY-102</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">3</td><td className="border border-gray-300 px-4 py-2">Chemistry of Transition and Inner Transition Elements</td><td className="border border-gray-300 px-4 py-2">CY-405</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">4</td><td className="border border-gray-300 px-4 py-2">Chemistry of Coordination Compounds</td><td className="border border-gray-300 px-4 py-2">CHI-341</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">5</td><td className="border border-gray-300 px-4 py-2">Chemistry of Transition and Inner Transition Elements</td><td className="border border-gray-300 px-4 py-2">CHI-342</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">6</td><td className="border border-gray-300 px-4 py-2">Organometallic Chemistry</td><td className="border border-gray-300 px-4 py-2">CHI-441</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">7</td><td className="border border-gray-300 px-4 py-2">Chemistry of Coordination Compounds</td><td className="border border-gray-300 px-4 py-2">CY-408</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">8</td><td className="border border-gray-300 px-4 py-2">Organometallic Chemistry</td><td className="border border-gray-300 px-4 py-2">CY-501</td></tr>
      <tr><td className="border border-gray-300 px-4 py-2">9</td><td className="border border-gray-300 px-4 py-2">Inorganic Chemistry M.Sc Lab-I</td><td className="border border-gray-300 px-4 py-2">CY-492</td></tr>
    </tbody>
  </table>
</section>

      </div>

      

    </div>
  );
}
