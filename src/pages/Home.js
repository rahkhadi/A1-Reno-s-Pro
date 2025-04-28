import React from 'react';

function Home() {
  return (
    <section className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}>
      <div className="text-center text-white bg-black bg-opacity-60 p-10 rounded-lg">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to A1 Reno's Pro</h2>
        <p className="text-lg md:text-xl mb-6">Expert interior renovation services.</p>
      </div>
    </section>
  );
}

export default Home;