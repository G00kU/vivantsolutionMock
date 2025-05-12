import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <HomePage />
    </>
  );
}

const HomePage = () => {
  return (
    <div className="bg-white text-[#576089] font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#576089]">
            Vivant Solutions
          </h1>
          <nav className="space-x-6 text-[#858084]">
            {/* <a href="#" className="hover:text-[#576089]">
              Home
            </a>
            <a href="#about" className="hover:text-[#576089]">
              About
            </a> */}
            <a href="#processes" className="hover:text-[#576089]">
              Home
            </a>
            <a href="#contact" className="hover:text-[#576089]">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1350&q=80')",
        }}
      >
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Excellence in Aluminum Manufacturing
          </h2>
          <p className="text-[#858084] text-lg mb-6">
            Specializing in Aluminum Extrusion, Powder Coating, and Anodizing
          </p>
          <a
            href="#contact"
            className="bg-[#576089] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#444b5d]"
          >
            Get a Quote
          </a>
        </div>
      </section>
      <div className="p-10">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="transform hover:scale-105 transition duration-500 ease-in-out shadow-lg rounded-lg overflow-hidden bg-white">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url(asset/aluminiumExtrusion.jpg)",
              }}
            ></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-[#576089]">
                Aluminium Extrusion
              </h4>
              <p className="text-[#858084]">
                Advanced extrusion lines for precise profiles, delivering
                strength and design flexibility.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transform hover:scale-105 transition duration-500 ease-in-out shadow-lg rounded-lg overflow-hidden bg-white">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url(asset/powder-coatings.jpg)",
              }}
            ></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-[#576089]">
                Powder Coating
              </h4>
              <p className="text-[#858084]">
                Eco-friendly and durable coatings with an extensive palette of
                colors and textures.
              </p>
            </div>
          </div>
          <div className="transform hover:scale-105 transition duration-500 ease-in-out shadow-lg rounded-lg overflow-hidden bg-white">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: "url(asset/anodizing-min.jpg)",
              }}
            ></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2 text-[#576089]">
                Anodizing
              </h4>
              <p className="text-[#858084]">
                Enhanced surface protection and aesthetic appeal with uniform
                anodized finishes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Industry Applications Section */}
      <section className="py-20 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">Industry Applications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "asset/automotive_frame.webp",
                title: "Automotive",
                desc: "Lightweight extrusions for frames and bumpers.",
              },
              {
                icon: "asset/construction-Frame.jpg",
                title: "Construction",
                desc: "Facades, doors, curtain walls & structures.",
              },
              {
                icon: "asset/solar-frames.jpg",
                title: "Renewable Energy",
                desc: "High-strength solar & wind frames.",
              },
              {
                icon: "asset/custom-Frames.avif",
                title: "Machinery",
                desc: "Custom profiles for automation systems.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 shadow-md rounded-xl hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 mx-auto mb-4"
                />
                <h4 className="text-xl font-semibold text-[#576089] mb-2">
                  {item.title}
                </h4>
                <p className="text-[#858084] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#f9f9f9]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">About Vivant Solutions</h3>
          <p className="text-[#858084] max-w-3xl mx-auto mb-6">
            Vivant Solutions, founded in 2012, has rapidly emerged as a leader
            in aluminium extrusion manufacturing in Chennai, Tamil Nadu. With a
            state-of-the-art facility providing advanced aluminium solutions
            across industries.
          </p>
          <p className="text-[#858084] max-w-3xl mx-auto mb-6">
            Our manufacturing process begins with high-grade aluminium ingots
            which are melted, cast into billets, and then extruded using one of
            our three advanced presses. This ensures flexibility in handling
            complex and customized profiles to meet diverse industrial needs.
          </p>
          <p className="text-[#858084] max-w-3xl mx-auto">
            As part of our commitment to quality, we use only 100% homogenized
            billets sourced from leading suppliers like Vedanta (BALCO), and
            implement stringent quality control at every stage of the production
            process.
          </p>
        </div>
      </section>

      {/* Value Added Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Value Added Services</h3>
          <p className="text-[#858084] max-w-3xl mx-auto mb-6">
            Vivant Solutions provides comprehensive end-to-end aluminium
            fabrication services. Our in-house operations include precision
            slotting, cutting, tapping, drilling, and chamfering, enabling us to
            supply ready-to-install components.
          </p>
          <p className="text-[#858084] max-w-3xl mx-auto">
            We cater to customer-specific design requirements with precision
            engineering, reducing project lead times and enhancing production
            efficiency for our clients.
          </p>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 bg-gradient-to-b from-[#f9f9f9] to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold text-[#1a1a1a] mb-8">
            Infrastructure
          </h3>
          <p className="text-[#858084] max-w-3xl mx-auto mb-4">
            Our facility is powered by Ming-Sheng machinery imported from China
            and equipped with modern hot log shear and melting furnaces. We
            support 24/7 operations across multiple production lines, ensuring
            both speed and consistency in output.
          </p>
          <p className="text-[#858084] max-w-3xl mx-auto mb-4">
            Our infrastructure includes automated handling systems, computerized
            process control, and robust warehousing solutions, supporting a
            monthly output capacity of over 700 metric tonnes.
          </p>
          <p className="text-[#858084] max-w-3xl mx-auto mb-12">
            In addition to our extrusion lines, we have dedicated facilities
            for:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Precision Tooling",
                desc: "In-house die manufacturing and maintenance using CNC and EDM technology for exacting specifications.",
                img: "asset/tooling.jpg",
              },
              {
                title: "Thermal Break Production",
                desc: "Advanced polyamide strip insertion lines for energy-efficient building systems.",
                img: "asset/thermal.jpg",
              },
              {
                title: "Powder Coating Plants",
                desc: "Fully automated vertical and horizontal coating lines for uniform finishes.",
                img: "asset/powder-coating.jpg",
              },
              {
                title: "Anodizing Units",
                desc: "Electrochemical stations with controlled baths for consistent surface treatment and color.",
                img: "asset/anodizing.webp",
              },
              {
                title: "Fabrication Workshop",
                desc: "Precision saws, punching machines, tapping units, and CNC machining centers.",
                img: "asset/fabrication.jpg",
              },
              {
                title: "Packaging & Logistics",
                desc: "Automated wrapping, labeling, and logistics systems for product safety and efficiency.",
                img: "asset/logistics.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="text-xl font-semibold text-[#334155] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#6b7280] text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#858084] max-w-3xl mx-auto mt-12">
            This holistic infrastructure empowers us to handle complex projects,
            maintain consistent quality, and deliver scalable production
            volumes.
          </p>
        </div>
      </section>

      {/* Quality and Capacity Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Quality & Capacity</h3>
          <p className="text-[#858084] max-w-3xl mx-auto mb-6">
            Quality is at the heart of our operations. Our 5-step quality
            control process includes raw material inspection, process audits,
            in-line testing, finished product validation, and dispatch clearance
            — all aligned with international ISO/TS 16949:2009 standards.
          </p>
          <p className="text-[#858084] max-w-3xl mx-auto">
            With a workforce of over 200 skilled professionals, we deliver more
            than 700 tons of precision aluminium extrusions monthly. Our
            scalable operations can handle bulk orders with assured timelines.
          </p>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Innovation & Sustainability
          </h3>
          <p className="text-[#858084] max-w-3xl mx-auto mb-6">
            Vivant Solutions is committed to sustainable manufacturing. Our
            processes emphasize energy-efficient production, responsible
            material sourcing, and recycling initiatives to reduce environmental
            impact.
          </p>
          <p className="text-[#858084] max-w-3xl mx-auto">
            We invest in R&D to explore next-gen aluminium applications and
            improve process automation — offering customers unmatched quality
            and sustainability in every product.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#576089] text-white py-6 text-center">
        <p>&copy; 2025 Vivant Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
