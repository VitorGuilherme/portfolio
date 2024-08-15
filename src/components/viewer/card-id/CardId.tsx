import { useLanguage } from '@/context/LanguageContext';
import style from './card-id.module.css';

export default function CardId() {
  const {language} = useLanguage();

    return (
      <div className={style.flex}>
        <div className={style.shadow_img}> 
          <img src="/photo.png" className={style.card_img} width="145px"/>
        </div>
        <p className={style.text_small}>{language.name}</p>
        <span className={style.text_xsmall}>{language.profession}</span>
      </div>
    )
  }
