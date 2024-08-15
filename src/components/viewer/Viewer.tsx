import CardId from "./card-id/CardId";
import LanguageSwitch from "./language-switch/LanguageSwitch";
import Presentation from "./presentation/Presentation";

export default function Viewer() {
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute'
    }}>
      <LanguageSwitch/>
      <Presentation></Presentation>
      <CardId></CardId>
    </div>
  )
}
