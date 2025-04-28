import React from 'react';

function Projects() {
  const projects = [
    { title: "Modern Kitchen", desc: "Sleek cabinetry and smart appliances." },
    { title: "Luxury Spa Bathroom", desc: "Serene redesign with rainfall shower." },
    { title: "Living Room Upgrade", desc: "Warm living space with hardwood flooring." }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;