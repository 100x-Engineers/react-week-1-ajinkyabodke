import { createContext, useState } from "react";
export const TweetContext = createContext();
import PropTypes from "prop-types"; // ES6

export const TweetProvider = ({ children }) => {
  const [userTweets, setUserTweets] = useState(SampleTweets);

  return (
    <TweetContext.Provider value={{ userTweets, setUserTweets }}>
      {children}
    </TweetContext.Provider>
  );
};

TweetProvider.propTypes = {
  children: PropTypes.node,
};

const SampleTweets = [
  {
    id: "1",
    name: "Ajinkya B",
    username: "ajinkyabodke",
    postedAt: "1699355379971",
    tweetText: "Don't wish for it, work for it.",
    comments: 11,
    retweets: 269,
    likes: 1869,
    reach: 99,
    isLiked: false,
    isRetweeted: false,
  },
];
