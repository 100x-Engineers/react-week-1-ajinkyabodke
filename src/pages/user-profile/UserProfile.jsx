import NewTweetButton from "../../components/NewTweetButton";
import Tweet from "../../components/Tweet";
import Footer from "../../components/Footer";
import { TweetContext } from "../../contexts/index";
import { useContext } from "react";
import ProfileHeader from "../../components/ProfileHeader";

function UserProfile() {
  const tweets = useContext(TweetContext);
  const tweetsData = [...tweets.userTweets].reverse();
  return (
    <div className="flex min-h-screen flex-col">
      <ProfileHeader />

      <main className="flex-1 overflow-y-auto mb-16">
        {/* Tweets */}
        <section>
          {tweetsData.map((tweet, index) => (
            <Tweet
              key={index}
              id={tweet.id}
              name={tweet.name}
              handle={tweet.handle}
              time={tweet.time}
              tweetdata={tweet.tweetText}
              comments={tweet.comments}
              retweets={tweet.retweets}
              likes={tweet.likes}
              reach={tweet.reach}
            />
          ))}
        </section>
      </main>

      <NewTweetButton />
      <Footer page="profile" />
    </div>
  );
}

export default UserProfile;
