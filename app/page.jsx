import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Pillars from "../components/landing/Pillars";
import DashboardPreview from "../components/landing/DashboardPreview";
import Workouts from "../components/landing/Workouts";
import CTA from "../components/landing/CTA";
import Footer from "../components/landing/Footer";

export default function Dashboard() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Pillars />
      <DashboardPreview />
      <Workouts />
      <CTA />
      <Footer />

    </div>
  );
}