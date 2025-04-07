'use client';

export default function Services() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Mobile Showroom', desc: 'We bring hundreds of carpet samples to your home.' },
          { title: 'Expert Installation', desc: 'Our licensed installers handle furniture, old flooring, and more.' },
          { title: 'Commercial Flooring', desc: 'We offer durable solutions for offices, rentals, and retail.' },
        ].map((service, i) => (
          <div key={i} className="p-6 border rounded-lg shadow-sm bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
