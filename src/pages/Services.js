import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    { title: "Kitchen Renovations", path: "/services/kitchen-renovations", desc: "Transform your kitchen into a modern, functional space." },
    { title: "Bathroom Remodeling", path: "/services/bathroom-remodeling", desc: "Create a spa-like retreat with our bathroom services." },
    { title: "Flooring Installation", path: "/services/flooring-installation", desc: "Upgrade your home with quality flooring options." },
    { title: "Painting & Wall Finishes", path: "/services/painting-wall-finishes", desc: "Refresh your interiors with professional painting." },
    { title: "Drywall Installation & Repair", path: "/services/drywall-installation", desc: "Achieve smooth, seamless walls." },
    { title: "Lighting Design & Installation", path: "/services/lighting-design", desc: "Elevate your home’s ambiance." }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link to={service.path} key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition cursor-pointer">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
