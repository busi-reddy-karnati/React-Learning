import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Feature from "./Feature";
import Footer from "./Footer";
import AllCards from "./AllCards";
const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Feature></Feature>
      <AllCards></AllCards>
      <Footer></Footer>
    </div>
  );
};
export default App;
