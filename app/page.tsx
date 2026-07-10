import Navbar   from '@/components/Navbar';
import Hero     from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import About    from '@/components/About';
import Skills   from '@/components/Skills';
import Projects from '@/components/Projects';
import Process  from '@/components/Process';
import CTA      from '@/components/CTA';
import Footer   from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Skills />
        <Projects />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
