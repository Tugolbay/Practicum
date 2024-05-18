import { useRef } from "react";
import { Header } from "./components/developer1/header/Header";
import { Main } from "./components/developer1/main/Main";
import { Main2 } from "./components/developer1/main2/Main2";
import { Main3 } from "./components/developer1/main3/Main3";
import { Main4 } from "./components/developer1/main4/Main4";
import { Main5 } from "./components/developer1/main5/Main5";
import { Main6 } from "./components/developer1/main6/Main6";
import { Main7 } from "./components/developer1/main7/Main7";
import { Main8 } from "./components/developer1/main8/Main8";
import { Main9 } from "./components/developer1/main9/Main9";
import { Main10 } from "./components/developer1/main10/Main10";
import { Main11 } from "./components/developer1/main11/Main11";
import { Main12 } from "./components/developer1/main12/Main12";
import { Footer } from "./components/developer1/footer/Footer";

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
      <Main resultRef={resultRef} tarifRef={tarifRef} />
      <Main2 whoRef={whoRef} />
      <Main3 tarifRef={tarifRef} />
      <Main4 placeRef={placeRef} />
      <Main5 spicerRef={spicerRef} />

      <Main6 tarif={tarifRef} />
      <Main7 bonusRef={bonusRef} tarifRef={tarifRef} />
      <Main8 />
      <Main9 />
      <Main10 />
      <Main11 />
      <Main12 />
      <Footer />
    </div>
  );
}

export default App;
