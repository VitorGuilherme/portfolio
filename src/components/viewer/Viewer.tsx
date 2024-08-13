import CardId from "./card-id/CardId";
import Presentation from "./presentation/Presentation";

export default function Viewer() {
  return (
    <div style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute'
    }}>
      <CardId></CardId>
      <Presentation></Presentation>
    </div>
  )
}
