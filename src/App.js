import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from 'react';
import Header from './components/Header';
import Abaut from './components/Abaut';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footter from './components/Footter';
function App() {
    // Especifica que el estado es de tipo 'es' | 'en'
    const [language, setLanguage] = useState("es"); // Estado para el idioma
    const toggleLanguage = () => {
        setLanguage((prevLang) => (prevLang === "es" ? "en" : "es"));
    };
    return (_jsxs(_Fragment, { children: [_jsx(Header, { toggleLanguage: toggleLanguage, language: language }), _jsx(Abaut, { language: language }), _jsx(Skills, {}), _jsx(Projects, { language: language }), _jsx(Footter, {})] }));
}
export default App;
