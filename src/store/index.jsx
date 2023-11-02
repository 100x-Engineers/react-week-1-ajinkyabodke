import { createContext, useState } from "react";

const defaultData = {
  userTweets: [],
  setUserTweets: () => {},
};
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
    id: "37164922154371394",
    name: "Name",
    handle: "handle",
    timestamp: "10h",
    tweetText: "Don't wish for it, work for it.",
    comments: "11",
    retweets: "269",
    likes: "1869",
    reach: "69.9k",
  },
];
