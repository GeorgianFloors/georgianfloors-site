'use client';

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {[
          {
            quote: "The mobile showroom made choosing a carpet so easy. I loved being able to see samples in my home!",
            author: "— Sarah M., Barrie"
          },
          {
            quote: "Quick, clean install and super helpful staff. Will definitely use them again.",
            author: "— Jason T., Innisfil"
          },
        ].map((testimonial, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow">
            <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
            <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
