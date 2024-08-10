import { useState } from "react";
import i18n from "../i18n.json";

import styles from "./LanguageSwitch.module.css";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState(i18n.pt);


  return (
    <div>
      <button className={styles.btn} onClick={() => setLanguage(i18n.pt)}>
        Portuguese
      </button>
      <button className={styles.btn} onClick={() => setLanguage(i18n.en)}>
        English
      </button>
      <h2>{language.title}</h2>
    </div>
  );
};

export default LanguageSwitch;
