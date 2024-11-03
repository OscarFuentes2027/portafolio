import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import Header from './components/Header';
import Abaut from './components/Abaut';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footter from './components/Footter';

function App() {
  // Especifica que el estado es de tipo 'es' | 'en'
  const [language, setLanguage] = useState<'es' | 'en'>("es"); // Estado para el idioma

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
  };

  return (
    <>
      <Header toggleLanguage={toggleLanguage} language={language} />
      <Abaut language={language} />
      <Skills />
      <Projects language={language} />
      <Footter />
    </>
  );
}

export default App;
