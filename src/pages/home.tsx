import Navigation from '../componets/Navigation';
import Hero from '../componets/Hero';
import About from '../componets/About';
import Collections from '../componets/Collections';
import Contact from '../componets/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#cfb8a9]">
      <Navigation />
      <Hero />
      <Collections />
      <About />
      <Contact />
    </div>
  );
}
