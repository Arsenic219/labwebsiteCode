export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <div className="w-full flex flex-col p-4 rounded-lg shadow-lg border border-gray-700 mt-12 text-center shadow-blue-500/40 items-center bg-gray-800">
        <div className="w-full text-center mb-6">
          <h1 className="text-start text-3xl font-bold">
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

          <div className="text-start relative w-full md:w-auto h-full bg-cover bg-center p-8 text-white">
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
    </section>
  );
}
