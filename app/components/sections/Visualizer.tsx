'use client';
import { useState } from 'react';

export default function Visualizer() {
  const [roomImage, setRoomImage] = useState<string | null>(null);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Try Carpets in Your Room
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Room Upload */}
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <p className="mb-4">Upload your room photo</p>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setRoomImage(URL.createObjectURL(e.target.files[0]));
                }
              }}
              className="block mx-auto"
            />
          </div>
          
          {/* Preview Area */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            {roomImage ? (
              <div className="relative">
                <img 
                  src={roomImage} 
                  alt="Your room" 
                  className="w-full h-auto rounded"
                />
                {/* This is where the carpet overlay would go */}
                <div className="absolute inset-0 bg-blue-500/20 pointer-events-none">
                  <p className="text-center mt-4 text-white bg-black/50 p-2">
                    Carpet preview will appear here
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-gray-200 h-64 flex items-center justify-center rounded">
                <p>Your room will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}