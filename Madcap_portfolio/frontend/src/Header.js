import React  from "react";
import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Header.css";


const Header = () => {
  
  return (
    <>
      {/* Vidéo d'arrière-plan */}
      <div className="relative w-full h-64 overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop playsInline>
        <source src="/static/videos/gif.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo HTML5.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
      </div>

      {/* Barre supérieure contenant le logo, le texte et les icônes sociales */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full p-4 bg-white/10 backdrop-blur-md border-b border-white/20 dark:bg-black/20 dark:border-white/10 flex justify-between items-center z-50"
      >
        <div className="flex items-center">
          <img src="/static/images/logo3.png" alt="Logo Madcap" className="w-16 h-16" />
          <h2 className="text-white text-lg ml-4">Madcap, le plus vieux côtre-pilote</h2>
        </div>

        {/* Icônes sociales et switch de langue */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/profile.php?id=100077266193402&locale=fr_FR" target="_blank" rel="noopener noreferrer">
            <img src="/static/images/Fb_logo2.png" alt="Facebook" className="w-8 h-8" />
          </a>
          <a href="https://www.youtube.com/@AssociationMadcap1874" target="_blank" rel="noopener noreferrer">
            <img src="/static/images/Youtube_logo.png" alt="YouTube" className="w-8 h-8" />
          </a>
          <LanguageSwitcher />
        </div>
      </motion.header>

      {/* Menu de navigation */}
      <nav className="bg-black/50 py-2 px-4 flex justify-center gap-4 text-white">
        <a href="/" className="hover:text-gray-300">Accueil</a>
        <a href="/association" className="hover:text-gray-300">À propos</a>
        <a href="/histoire" className="hover:text-gray-300">Histoire</a>
        <a href="/evenements" className="hover:text-gray-300">Événements</a>
        <a href="/don" className="hover:text-gray-300">Soutenir</a>
        <a href="/livre_dor" className="hover:text-gray-300">Votre Expérience</a>
        <a href="/contact" className="hover:text-gray-300">Contact</a>
      </nav>
    </>
  );
};


export default Header;
