import ScrollProgress from '@/components/ScrollProgress';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Ship from '@/components/Ship';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Ship />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
