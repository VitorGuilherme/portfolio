import { Inter } from "next/font/google";
import background from "./background.module.css"

const inter = Inter({ subsets: ["latin"] });

export default function BackgroundLayer() {
  return (
    <div className={background.mainContainer}>
      <div className={[background.ball, background.first].join(" ")}></div>      
      <div className={[background.ball, background.second].join(" ")}></div>      
      <div className={[background.ball, background.third].join(" ")}></div>      
      <div className={[background.ball, background.fourth].join(" ")}></div>      
      <div className={[background.ball, background.fifth].join(" ")}></div>      
    </div>
  )
}
