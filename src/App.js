import { useRef } from "react";
import { Header } from "./components/layout/header/Header";
import { Target } from "./components/main/target/Target";
import { Opportunity } from "./components/main/opportunity/Opportunity";
import { Program } from "./components/main/program/Program";
import { Location } from "./components/main/location/Location";
import { MainSpeaker } from "./components/main/mainSpeaker/MainSpeaker";
import { BuyTickets } from "./components/main/tickets/BuyTickets";
import { Rate } from "./components/main/rate/Rate";
import { Partner } from "./components/main/partner/Partner";
import { Manager } from "./components/main/manager/Manager";
import { Questions } from "./components/main/questions/Questions";
import { SocialNetwork } from "./components/main/socialNetwork/SocialNetwork";
import { Footer } from "./components/layout/footer/Footer";
import { Format } from "./components/main/format/Format";

function App() {
  const whoRef = useRef(null);
  const resultRef = useRef(null);
  const placeRef = useRef(null);
  const tarifRef = useRef(null);
  const spicerRef = useRef(null);
  const bonusRef = useRef(null);

  return (
    <div className="App">
      <Header
        whoRef={whoRef}
        resultRef={resultRef}
        placeRef={placeRef}
        spicerRef={spicerRef}
        tarifRef={tarifRef}
        bonusRef={bonusRef}
      />
      <Target resultRef={resultRef} tarifRef={tarifRef} />
      <Opportunity whoRef={whoRef} />
      <Program tarifRef={tarifRef} />
      <Location placeRef={placeRef} />
      <MainSpeaker spicerRef={spicerRef} />
      <Format tarif={tarifRef} />
      <BuyTickets bonusRef={bonusRef} tarifRef={tarifRef} />
      <Rate />
      <Partner />
      <Manager />
      <Questions />
      <SocialNetwork />
      <Footer />
    </div>
  );
}

export default App;
