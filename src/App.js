import { useRef } from "react";
import { Header } from "./components/developer1/header/Header";
import { Main } from "./components/developer1/main/Main";
import { Main2 } from "./components/developer1/main2/Main2";
import { Main3 } from "./components/developer1/main3/Main3";
import { Main4 } from "./components/developer1/main4/Main4";
import { Main5 } from "./components/developer1/main5/Main5";

function App() {
  const whoRef = useRef(null);
  const resultRef = useRef(null);
  const spicerRef = useRef(null);
  const placeRef = useRef(null);
  const formatRef = useRef(null);
  const liveRef = useRef(null);
  const tarifRef = useRef(null);
  const answersRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="App">
      <Header
        whoRef={whoRef}
        resultRef={resultRef}
        placeRef={placeRef}
        spicerRef={spicerRef}
        formatRef={formatRef}
        liveRef={liveRef}
        tarifRef={tarifRef}
        answersRef={answersRef}
        footerRef={footerRef}
      />
      <Main resultRef={resultRef} />
      <Main2 whoRef={whoRef} />
      <Main3 />
      <Main4 placeRef={placeRef} />
      <Main5 spicerRef={spicerRef} />
    </div>
  );
}

export default App;
