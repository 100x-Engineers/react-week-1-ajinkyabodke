import Tweet from "../../components/Tweet";

import Toast from "../../components/Toast";

import NewTweet from "../../components/NewTweetButton";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import ProfileAvatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import { TweetContext } from "../../store/index";
import { useContext } from "react";

function Home() {
  const tweets = useContext(TweetContext);
  console.log(tweets.userTweets);
  return (
    <div className="bg-neutral-1000">
      <header className="top-0 flex w-full flex-col items-center bg-neutral-1000">
        <section className="flex w-full items-center border-b border-neutral-700 px-4 py-5">
          <ProfileAvatar />
          <Header />
        </section>
      </header>
      <Tabs />
      <main className="flex w-full flex-col pb-20">
        <section>
          {tweets.userTweets.map((tweet, index) => (
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

        {/* Tweets */}
        {/* <section>
          
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata="Don't wish for it, work for it."
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata={
              <>
                i've seen people absolutely despise auto layout in figma but I
                think it's a lifesaver -<br />
                1. tidies everything nice and compact
                <br />
                2. makes responsive design effortless
                <br />
                3. no manual adjustments post any tweaks
                <br />
                4. saves a tonnn of time
                <br />
                <br />
                Sorry, but will stay an auto layout maxi all life.
              </>
            }
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata={
              <>
                Writing gets easier after the first sentence.
                <br />
                <br />
                Lifting gets easier after the first set.
                <br />
                <br />
                People think and think and think until they finally decide to
                act. Their attention shifts from internal to external, and the
                difficulty they created in their mind vanishes.
              </>
            }
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata="Don't wish for it, work for it."
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata="Don't wish for it, work for it."
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
        </section> */}
        <Toast message="Copied to clipboard." />

        <NewTweet />

        <Footer page="home" />
      </main>
    </div>
  );
}

export default Home;
