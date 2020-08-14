import React from "react";
import DrumMachine from "./components/drummachine/DrumMachine";
import { ModelProvider } from "./context/ModelContext";

const App = () => {
  return (
    <ModelProvider>
      <div className="App">
        <DrumMachine />
      </div>
    </ModelProvider>
  );
};

export default App;
