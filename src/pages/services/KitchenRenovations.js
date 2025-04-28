import React from 'react';

function KitchenRenovations() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Kitchen Renovations</h2>

        {/* Main Introduction Image */}
        <img src="/images/kitchen.jpeg" alt="Main Kitchen" className="w-full h-96 object-cover rounded-lg mb-8" />

        {/* Introduction Text */}
        <p className="text-lg text-center max-w-2xl mx-auto mb-12">
          Transform your kitchen into a modern, functional space with custom cabinetry, premium countertops, and innovative layouts.
        </p>

        {/* Photo Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image 1 */}
          <div className="text-center">
            <img src="/images/kitchen2.jpeg" alt="Kitchen Project 1" className="w-full h-80 object-cover rounded-lg" />
            <p className="mt-2 text-gray-600">Custom cabinet installation and marble countertop</p>
          </div>

          {/* Image 2 */}
          <div className="text-center">
            <img src="/images/kitchen3.jpeg" alt="Kitchen Project 2" className="w-full h-80 object-cover rounded-lg" />
            <p className="mt-2 text-gray-600">Modern kitchen layout with smart lighting</p>
          </div>

          {/* Image 3 */}
          <div className="text-center">
            <img src="/images/kitchen4.jpeg" alt="Kitchen Project 3" className="w-full h-80 object-cover rounded-lg" />
            <p className="mt-2 text-gray-600">Open concept design with premium flooring</p>
          </div>

          {/* Image 4 */}
          <div className="text-center">
            <img src="/images/kithcen1.jpeg" alt="Kitchen Project 4" className="w-full h-80 object-cover rounded-lg" />
            <p className="mt-2 text-gray-600">Island counter with modern appliances</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KitchenRenovations;
