import { useState } from "react";

import styles from "./LanguageSwitch.module.css";
import i18n from "../../../i18n.json";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(i18n.pt);

  function animation(isEnglish: boolean) {
    isEnglish
      ? document
          .getElementById("inside-bottom-bar")
          ?.style.setProperty("right", "0")
      : document
          .getElementById("inside-bottom-bar")
          ?.style.setProperty("right", "5vw");
  }

  return (
    <div style={{ marginLeft: "2rem", marginTop: "1rem" }}>
      <button
        className={styles.btn}
        onClick={() => {
          setLanguage(i18n.pt), animation(false);
        }}
        id="pt-btn"
      >
        <img src="/icons/portuguese-icon.png" width="30px" />
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setLanguage(i18n.en), animation(true);
        }}
        id="en-btn"
      >
        <img src="/icons/english-icon.png" width="30px" />
      </button>

      <div className={styles.bottom_bar}>
        <div className={styles.inside_bottom_bar} id="inside-bottom-bar" />
      </div>
      <h2>{language.title}</h2>
    </div>
  );
};

export default LanguageSwitch;
