import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Bookings from "./components/Bookings";

export default function Home() {
  return (
    <main className="bg-slate-950">
      <Hero />
      <Services />
      <Gallery />
      <Testimonial />
      <Bookings />
    </main>
  );
}
