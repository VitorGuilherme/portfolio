import "@radix-ui/themes/styles.css";

import BackgroundLayer from "../components/background-layer/BackgroundLayer";
import Viewer from "@/components/viewer/Viewer";


export default function Home() {
  return (
    <main>
      <BackgroundLayer></BackgroundLayer>
      <Viewer></Viewer>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
        html {
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
