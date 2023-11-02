// import { useContext } from "react";
import Header from "../components/Header";
import LoginMain from "../components/Login/LoginMain";

function Home() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <LoginMain />
    </div>
  );
}

export default Home;
