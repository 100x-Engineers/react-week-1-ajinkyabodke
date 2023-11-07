import Comment from "@/assets/comment.svg";
import Heart from "@/assets/heart.svg";
import UserAvatar from "@/assets/profile_avatar.png";
import Reach from "@/assets/reach.svg";
import Share from "@/assets/share.svg";
import { TweetsStoreContext } from "@/contexts";
import { cn } from "@/utils";
import PropTypes from "prop-types";
import { useContext } from "react";
import Button from "./Button";

function Tweet({
  id,
  name,
  username,
  postedAt,
  tweetText,
  comments,
  retweets,
  likes,
  reach,
  isLiked,
  isRetweeted,
}) {
  const { userTweets, setUserTweets } = useContext(TweetsStoreContext);

  return (
    <div
      data-tweet-id={id}
      className="box-border flex h-min border-b border-neutral-700 px-4 py-2"
    >
      <div className="mr-4 h-12 min-w-fit">
        <img
          src={UserAvatar}
          alt="User Picture"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="mb-1">
          <div className="mb-1 flex gap-1 text-neutral-50">
            <span className="text-base font-medium">{name}</span>
            <span className="text-neutral-500">@{username}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-500">{postedAt}</span>
          </div>
          <p className="font-regular text-0.9rem text-neutral-50">
            {tweetText}
          </p>
        </div>
        <div className="flex items-center justify-between py-3 text-neutral-500 lg:pr-5">
          {/* <Icon type="Comment" value={comments} /> */}
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Comment} />
            <span className="text-sm font-normal text-neutral-500">
              {comments}
            </span>
          </div>

          <Button
            onClick={() => {
              // Search for the tweet with the id
              // Get its index
              // Then set the tweet with the index to the new value

              const tweets = [...userTweets];

              const currentTweetIndex = tweets.findIndex(
                (tweet) => tweet.id === id,
              );

              const updatedTweet = {
                id,
                name,
                username,
                postedAt,
                tweetText,
                comments,
                retweets,
                likes,
                reach,
                isLiked,
                isRetweeted: !isRetweeted,
              };

              // set the tweet with the index to the new value

              tweets[currentTweetIndex] = updatedTweet;

              setUserTweets(tweets);
            }}
            className={cn(
              isRetweeted ? "text-blue-500" : "text-neutral-500",
              "flex items-center justify-between gap-0.3rem",
            )}
          >
            <svg
              // width="21"
              // height="15"
              viewBox="0 0 21 15"
              fill="none"
              className={cn(
                isRetweeted ? "stroke-blue-500" : "stroke-neutral-500",
                "h-4 w-4",
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="retweet-sv">
                <path
                  id="Vector 5"
                  d="M3.72097 1.48621L1.56409 3.64312M3.72097 1.48621L5.87787 3.64312M3.72097 1.48621L3.72097 10.7214C3.72097 12.2918 4.99404 13.5649 6.56445 13.5649L11.4858 13.5649"
                  stroke="currentColor"
                  strokeWidth="1.42174"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector 4"
                  d="M17.2507 13.5649L19.4076 11.408M17.2507 13.5649L15.0938 11.408M17.2507 13.5649L17.2507 4.32975C17.2507 2.75934 15.9776 1.48627 14.4072 1.48627L9.48585 1.48627"
                  stroke="currentColor"
                  strokeWidth="1.42174"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>

            <span className={"text-sm font-normal"}>
              {isRetweeted ? retweets + 1 : retweets}
            </span>
          </Button>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Heart} />
            <span className="text-sm font-normal text-neutral-500">
              {likes}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Reach} />
            <span className="text-sm font-normal text-neutral-500">
              {reach}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Share} />
          </div>
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  tweetText: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  reach: PropTypes.number.isRequired,

  isLiked: PropTypes.bool.isRequired,
  isRetweeted: PropTypes.bool.isRequired,
};

export default Tweet;
