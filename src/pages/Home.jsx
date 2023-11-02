// import { useContext } from "react";
import Header from "../components/Header";
import LoginMain from "../components/Login/LoginMain";
// import { TweetContext } from "../store";

function Home() {
  // const store = useContext(TweetContext);

  return (
    <div className="flex h-screen flex-col">
      <Header />

      <LoginMain />
    </div>
  );
}

export default Home;
