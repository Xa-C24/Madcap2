import React, { useEffect } from "react";

const LanguageSwitcher = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/static/js/language.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      <button className="p-2 rounded bg-gray-200 dark:bg-gray-800 flex items-center gap-2">
        <img src={`/static/images/Flag_France.jpg`} className="w-6 h-4" alt="Langue" />
        <span className="arrow">▼</span>
      </button>
      <ul className="absolute mt-2 w-32 bg-white dark:bg-gray-900 shadow-lg rounded">
        <li>
          <button className="language-option flex items-center px-4 py-2" onClick={(e) => e.preventDefault()}>
          <img src={`/static/images/Flag_Uk.jpg`} className="w-6 h-4 mr-2" alt="English" />
            English
          </button>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
