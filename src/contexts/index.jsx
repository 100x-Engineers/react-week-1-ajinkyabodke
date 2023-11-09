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
    tweetText: "Join us on 100X because on a scale of 1 to X, we're 100X !",
    comments: 11,
    retweets: 269,
    likes: 1869,
    reach: 99,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: "2",
    name: "Ajinkya B",
    username: "ajinkyabodke",
    postedAt: "1699363303000",
    tweetText: "X is where you started, but 100X is where you'll thrive.",
    comments: 11,
    retweets: 299,
    likes: 189,
    reach: 99,
    isLiked: false,
    isRetweeted: false,
  },
];
