// import { useContext } from "react";
import Header from "../components/Header";
import LoginMain from "../components/LoginMain";
import { URLs } from "../constants.js";

function Home() {


  return (
    <div className="flex h-screen flex-col">
      <Header />
      <LoginMain onSignIn={onSignIn} />
    </div>
  );
}

export default Home;
