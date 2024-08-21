import { useState } from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="columns">
        <Navigation />
        <main>Main</main>
        <Sidebar />
      </div>
      <Footer />
    </>
  );
}

export default App;
