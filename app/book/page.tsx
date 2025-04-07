// app/book/page.tsx
'use client';
import React from 'react';

export default function BookPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
        Let’s help you find the perfect flooring. Fill out the form below or give us a call to get started.
      </p>
      <div className="max-w-2xl mx-auto border border-gray-200 shadow-md rounded-lg p-6">
        {/* Placeholder: Replace this with a real form or calendar later */}
        <p className="text-gray-500 italic">
          Booking form or calendar integration coming soon...
        </p>
      </div>
    </main>
  );
}
