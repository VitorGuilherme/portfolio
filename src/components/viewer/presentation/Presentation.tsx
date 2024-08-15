import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import i18n from "../../../i18n.json";
import style from "./Presentation.module.css";

export default function Presentation() {
  const { language } = useLanguage();  // Obtendo o idioma atual do contexto

  return (
    <div className={style.presentation_container}>
      <h2 className={style.presentation_title}>{language.title}</h2>
      <div className={style.circles_container} style={{ marginLeft: '100px' }}>
        <div
          id="about"
          className={`${style.presentation_circle} ${style.first}`}
        >
          <p>{language.about}</p>
        </div>
        <div
          id="projects"
          className={`${style.presentation_circle} ${style.second}`}
        >
          <p>{language.projects}</p>
        </div>
      </div>
      <div className={style.circles_container}>
        <div
          id="contacts"
          className={`${style.presentation_circle} ${style.third}`}
        >
          <p>{language.contacts}</p>
        </div>
        <div
          id="techs"
          className={`${style.presentation_circle} ${style.fourth}`}
        >
          <p>{language.techs}</p>
        </div>
      </div>
    </div>
  );
}
