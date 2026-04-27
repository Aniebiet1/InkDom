import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stories } from "@/components/landing/Stories";
import { Genres } from "@/components/landing/Genres";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Writers } from "@/components/landing/Writers";
import { ReadingExperience } from "@/components/landing/ReadingExperience";
import { WhyAndFAQ } from "@/components/landing/WhyAndFAQ";
import { Moods } from "@/components/landing/Moods";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <main id="top" className="min-h-screen bg-background text-foreground overflow-x-hidden scroll-smooth">
    <Navbar />
    <Hero />
    <Stories />
    <Genres />
    <HowItWorks />
    <Writers />
    <ReadingExperience />
    <WhyAndFAQ />
    <Moods />
    <Testimonials />
    <CTA />
    <Footer />
  </main>
);

export default Index;
