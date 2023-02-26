import React from "react";
import { BrowserRouter } from "react-router-dom";

import { InfoProvider } from "./contexts/InfoProvider";
import Router from "./routes/Router";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <InfoProvider>
          <Header>
            <Router />
          </Header>
        </InfoProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
