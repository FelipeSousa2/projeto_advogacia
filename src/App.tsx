import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PracticeAreas from "./components/PracticeAreas";

import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <PracticeAreas />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
