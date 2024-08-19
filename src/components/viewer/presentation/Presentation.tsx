import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import style from "./Presentation.module.css";

export default function Presentation() {
  const { language } = useLanguage(); // Obtendo o idioma atual do contexto

  return (
    <div className={style.presentation_container}>
      <h2 className={style.presentation_title}>{language.title}</h2>
      <div className={style.circles_container} style={{ marginLeft: "100px" }}>
        <div
          id="about"
          className={`${style.presentation_circle} ${style.first}`}
        >
          <img src="/presentation-icons/about_icon.png" />
          <p>{language.about}</p>
        </div>
        <div
          id="projects"
          className={`${style.presentation_circle} ${style.second}`}
        >
          <img src="/presentation-icons/projects_icon.png" />

          <p>{language.projects}</p>
        </div>
      </div>
      <div className={style.circles_container}>
        <div
          id="contacts"
          className={`${style.presentation_circle} ${style.third}`}
        >
          <img src="/presentation-icons/contacts_icon.png" />
          <p>{language.contacts}</p>
        </div>
        <div
          id="techs"
          className={`${style.presentation_circle} ${style.fourth}`}
        >
          <img src="/presentation-icons/techs_icon.png" />
          <p>{language.techs}</p>
        </div>
      </div>
    </div>
  );
}
