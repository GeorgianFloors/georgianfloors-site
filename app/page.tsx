'use client';
import Hero from '@/components/sections/Hero';
import Visualizer from '@/components/sections/Visualizer';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/ui/Footer';
import Navbar from '@/app/components/layout/Navbar';



export default function Home() {
  return (
    <main>
      <Hero />
      <Visualizer />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
