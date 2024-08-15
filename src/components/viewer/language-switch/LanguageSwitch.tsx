import { useLanguage } from "@/context/LanguageContext"; // Atualize o caminho conforme necessário
import styles from "./LanguageSwitch.module.css";
import i18n from "../../../i18n.json";

const LanguageSwitch = () => {
  const { setLanguage } = useLanguage(); // Use o hook para obter a função de definir o idioma

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
          setLanguage(i18n.pt); // Defina o idioma usando o contexto
          animation(false);
        }}
        id="pt-btn"
      >
        <img src="/icons/portuguese-icon.png" width="30px" />
      </button>
      <button
        className={styles.btn}
        onClick={() => {
          setLanguage(i18n.en); // Defina o idioma usando o contexto
          animation(true);
        }}
        id="en-btn"
      >
        <img src="/icons/english-icon.png" width="30px" />
      </button>
      <div className={styles.bottom_bar}>
        <div className={styles.inside_bottom_bar} id="inside-bottom-bar" />
      </div>
    </div>
  );
};

export default LanguageSwitch;
