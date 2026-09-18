import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Education } from './sections/Education';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <div id="experience">
        <Experience />
        <Education />
      </div>
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </MainLayout>
  );
}

export default App;
