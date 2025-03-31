export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-2"
    >
      <div className="w-full flex flex-col p-4 rounded-lg shadow-lg border border-gray-700 mt-8 mb-8 text-center shadow-blue-500/40 items-center bg-gray-800">
        <div className="w-full text-center mb-6">
          <h1 className="my-2 p-1 text-start text-3xl font-bold">
            Highly motivated scholars can join our group for Ph.D and you can contact me (Akash) for more details
          </h1>
        </div>
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
      </div>

      <div className="mt-20 max-w-6xl text-center">
  <h2 className="text-3xl font-bold text-gray-100">Academia</h2>
  <div className="flex flex-col md:flex-row items-center mt-6 space-y-6 md:space-y-0 md:space-x-6">
    {[
      {
        title: "Academic Background",
        description:
          "Professor of [Field] with over 15 years of research experience. Specialized in advanced research methodologies and innovative laboratory techniques.",
      },
      {
        title: "Research Focus",
        description:
          "Currently leading groundbreaking research in [specific area], with an emphasis on sustainable solutions and technological advancement.",
      },
      {
        title: "Teaching Philosophy",
        description:
          "Committed to nurturing the next generation of researchers through hands-on experience and innovative teaching methods.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-100 text-black p-6 rounded-lg shadow-md w-full md:w-1/3 
                   hover:shadow-xl hover:-translate-y-2 transition-transform transition-shadow 
                   duration-500 ease-out"
      >
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-700 mt-2">{item.description}</p>
      </div>
    ))}
  </div>
</div>


        {/* Key Achievements */}
        <div className="bg-black text-white p-6 rounded-lg shadow-lg mt-8 mb-8 max-w-4xl  items-start">
          <h3 className="text-xl font-bold">Key Achievements</h3>
          <ul className="text-start mt-4 space-y-3 text-lg ml-6">
            <li className="flex items-center">
              ✅ Published over 50 research papers in top-tier journals
            </li>
            <li className="flex items-center">
              ✅ Supervised 25+ PhD students to successful completion
            </li>
            <li className="flex items-center">
              ✅ Secured multiple research grants worth $2M+
            </li>
            <li className="flex items-center">
              ✅ Multiple international research collaborations
            </li>
          </ul>
        </div>
    </section>
  );
}
