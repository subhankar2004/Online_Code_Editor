import React, { useState, useRef, useEffect } from "react";
import { LANGUAGE_VERSIONS } from "./constants";

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const languages = Object.entries(LANGUAGE_VERSIONS);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang) => {
    onSelect(lang);
    setIsOpen(false);
  };

  return (
    <div className="ml-2 mb-4">
      <p className="mb-2 text-lg">Language:</p>
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-48 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {language}
          <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-48 mt-2 origin-top-right bg-[#110c1b] rounded shadow-lg border border-gray-700">
            {languages.map(([lang, version]) => (
              <button
                key={lang}
                className={`block w-full text-left px-4 py-2 hover:bg-gray-900 focus:outline-none focus:bg-gray-900 ${
                  lang === language ? "text-blue-400 bg-gray-900" : "text-white"
                }`}
                onClick={() => handleSelect(lang)}
              >
                <div className="flex items-center justify-between">
                  <span>{lang}</span>
                  <span className="text-gray-600 text-sm">({version})</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
