import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateAccountStep1 from "./pages/login/CreateAccountStep1";
import CreateAccountStep2 from "./pages/login/CreateAccountStep2";
import CreateAccountStep3 from "./pages/login/CreateAccountStep3";
import CreateAccountStep4 from "./pages/login/CreateAccountStep4";
import { Base } from "./pages/login/templates";
import { URLs } from "./constants";
import HomeFeed from "./pages/home-feed/Home";
import Profile from "./pages/user-profile/UserProfile";
import EditProfile from "./pages/user-profile/EditProfile";
import ComposeTweet from "./pages/compose-tweet/ComposeTweet";
import { TweetProvider } from "./contexts/index";
import { UserProvider } from "./contexts/UserContext";

const router = createBrowserRouter([
  {
    path: URLs.home,
    element: <Home />,
  },
  {
    path: URLs.signUpStep1,
    element: (
      <Base step="1">
        <CreateAccountStep1 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep2,
    element: (
      <Base step="2">
        <CreateAccountStep2 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep3,
    element: (
      <Base step="3">
        <CreateAccountStep3 />
      </Base>
    ),
  },
  {
    path: URLs.signUpStep4,
    element: (
      <Base step="4">
        <CreateAccountStep4 />
      </Base>
    ),
  },
  {
    path: URLs.feed,
    element: <HomeFeed />,
  },
  {
    path: URLs.profile,
    element: <Profile />,
  },
  {
    path: URLs.edit,
    element: <EditProfile />,
  },
  {
    path: URLs.compose,
    element: <ComposeTweet />,
  },
]);

export default function App() {
  return (
    <UserProvider>
      <TweetProvider>
        <div className="bg-neutral-1000 ">
          <RouterProvider router={router} />
        </div>
      </TweetProvider>
    </UserProvider>
  );
}
