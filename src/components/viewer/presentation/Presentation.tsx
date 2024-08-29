import React, { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import style from "./Presentation.module.css";

// presentation data
import dynamicCircles from "../../../components/dynamicCircle";

export default function Presentation() {
  const { language } = useLanguage(); // Obtendo o idioma atual do contexto
  const [animation, setAnimation] = useState(false);

  const openAnimation = (screen: any) => {
    if (screen) {
      setAnimation(true);
    }
  };

  return (
    <div className={style.presentation_container}>
      <h2 className={style.presentation_title}>{language.title}</h2>
      <div className={style.circles_container} style={{ marginLeft: "100px" }}>
        {dynamicCircles.map((circle) => {
          let name = circle.name; // about
          let circleName = name as keyof typeof language; 
          return (
            <div
              id={circle.name}
              className={`${style.presentation_circle}`}
            >
              <img src={`/icons/${circle.img}.png `} />
              <p>{language[circleName]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
