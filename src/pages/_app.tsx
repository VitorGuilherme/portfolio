import { Inter } from "next/font/google";
import '@radix-ui/themes/styles.css';

import BackgroundLayer from "../components/background-layer/background";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
          html {
            overflow: hidden;
          }
      `}</style>
    </div>
      <BackgroundLayer></BackgroundLayer>
    </main>
  );
}