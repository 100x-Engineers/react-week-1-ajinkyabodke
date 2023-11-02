import { createContext, useState } from "react";
export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [userTweets, setUserTweets] = useState(SampleTweets);

  return (
    <TweetContext.Provider value={{ userTweets, setUserTweets }}>
      {children}
    </TweetContext.Provider>
  );
};

const SampleTweets = [
  {
    id: "ajinkyabodke",
    name: "Ajinkya B",
    handle: "ajinkyabodke",
    time: "12h",
    timestamp: "10h",
    tweetText: "Don't wish for it, work for it.",
    comments: "11",
    retweets: "269",
    likes: "1869",
    reach: "69.9k",
  },
];
