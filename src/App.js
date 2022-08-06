import React from "react";
import "./App.css";
import Navigation from "./Components/Nav";
import Homepage from "./Components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="main" class="App">
      <main>
        <Navigation />
      </main>
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
