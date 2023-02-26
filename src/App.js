import React from "react";
import { HashRouter } from "react-router-dom";

import { InfoProvider } from "./contexts/InfoProvider";
import Router from "./routes/Router";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <InfoProvider>
          <Header>
            <Router />
          </Header>
        </InfoProvider>
      </HashRouter>
    </div>
  );
};

export default App;
