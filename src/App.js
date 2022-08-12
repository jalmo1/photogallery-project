import React, { useState } from "react";
import "./App.css";
import Navigation from "./Components/Navigation/index.js";
import Homepage from "./Components/Homepage";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

const [currentPage, handlePageChange] = useState("Homepage");

const renderPage = () => {
  switch (currentPage) {
    case "Gallery":
      return <Gallery />;
    case "About":
      return <About />;
    default:
      return <Homepage />;
  }
}

  return (
    <div id="main" class="App">
      <main>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </main>
      {/* <div>
        <Homepage />
      </div> */}
      <div>
        {renderPage(currentPage)}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
