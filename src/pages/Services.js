// src/pages/Services.js
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { title: 'Kitchen Renovations', link: '/services/kitchen-renovations', desc: 'Modern, functional kitchens.' },
  { title: 'Bathroom Remodeling', link: '/services/bathroom-remodeling', desc: 'Spa-like bathrooms.' },
  { title: 'Flooring Installation', link: '/services/flooring-installation', desc: 'Durable and stylish floors.' },
  { title: 'Painting & Wall Finishes', link: '/services/painting-wall-finishes', desc: 'Professional painting.' },
  { title: 'Drywall Installation', link: '/services/drywall-installation', desc: 'Seamless walls.' },
  { title: 'Lighting Design', link: '/services/lighting-design', desc: 'Enhancing home ambiance.' },
];

function Services() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link key={idx} to={service.link} className="bg-white shadow-md hover:shadow-xl rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
