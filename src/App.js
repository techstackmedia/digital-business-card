import React from "react";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Interests from "./components/Interests/Interests";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Profile />
      <About />
      <Interests />
      <Footer className="App-Footer" />
    </div>
  );
};

export default App;