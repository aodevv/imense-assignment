import React, { useState, useEffect, useRef } from "react";

import { AnimatePresence, motion } from "framer-motion";
import Dropdown from "../Dropdown/Dropdown";

import "./LanguageSelect.scss";

const languagePath = "./flags/flag";
const languages = [
  { id: "EN", language: "English", icon: `${languagePath}-en.png` },
  { id: "FR", language: "Français", icon: `${languagePath}-fr.png` },
  { id: "NL", language: "Nederlands", icon: `${languagePath}-nl.png` },
  { id: "ES", language: "Espanol", icon: `${languagePath}-es.png` },
  { id: "DE", language: "Deutsch", icon: `${languagePath}-de.png` },
];

const LanguageSelect = () => {
  const [isClose, setIsClose] = useState(true);
  const [selectedLan, setSelectedLan] = useState("EN");
  let menuRef = useRef();
  let dotsRef = useRef();

  useEffect(() => {
    let closeDropdown = (e) => {
      if (!isClose) {
        if (
          !menuRef.current.contains(e.target) &&
          !dotsRef.current.contains(e.target)
        )
          setIsClose(true);
      }
    };
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, [isClose]);

  return (
    <div className="ls">
      <div
        ref={dotsRef}
        onClick={() => setIsClose(!isClose)}
        className="ls__selected"
      >
        <img
          src={`${languagePath}-${selectedLan.toLowerCase()}.png`}
          alt="lan"
        />
      </div>
      <AnimatePresence>
        {!isClose && (
          <motion.div
            initial={{
              opacity: 0,
              position: "absolute",
              right: 0,
              zIndex: 30,
            }}
            animate={{
              opacity: 1,
              position: "absolute",
              right: 0,
              zIndex: 30,
            }}
            exit={{
              opacity: 0,
              position: "absolute",
              right: 0,
              zIndex: 30,
            }}
            transition={{ duration: 0.15 }}
            ref={menuRef}
          >
            <Dropdown closeState={isClose}>
              {languages.map((el) => {
                const { id, language, icon } = el;
                return (
                  <li key={`lg-${id}`} onClick={() => setSelectedLan(id)}>
                    <img src={icon} alt="ln-icon" className="dropdown__icon" />
                    <p
                      className={`dropdown__language ${
                        id !== selectedLan ? "muted" : ""
                      }`}
                    >{`${language}(${id.toUpperCase()})`}</p>
                  </li>
                );
              })}
            </Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelect;
