import ProfileAvatar from "../../assets/profile_avatar.png";
import Button from "../../components/Button";
import NewTweetButton from "../../components/NewTweetButton";
import Tweet from "../../components/Tweet";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { URLs } from "../../constants";
import LinkIcon from "../../assets/link-icon.svg";
import CalenderIcon from "../../assets/calendar-icon.svg";
function UserProfile() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="w-full border-b border-neutral-700">
        <Banner />
        <section className="relative px-4 pb-3 pt-2">
          {/* Profile Icon */}
          <img
            className="absolute -top-8 h-4.2rem w-4.2rem rounded-7xl border-4 border-neutral-1000"
            src={ProfileAvatar}
          />
          {/* Edit profile */}
          <div className="flex justify-end">
            <Link to={URLs.edit}>
              <Button variant="outline" type="secondary">
                Edit Profile
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col items-start justify-end gap-1">
              <h1 className="text-xl font-bold leading-normal text-neutral-50">
                Ajinkya Bodke
              </h1>
              <h2 className="text-0.9rem font-normal leading-normal text-neutral-500">
                @AjinkyaB
              </h2>
            </div>
            {/* Bio */}
            <div className="text-base font-normal leading-normal text-neutral-50">
              Full Stack Developer👨‍💻
              <br />
              Endurance Athlete 🏊🚴‍♂️🏃
            </div>
            {/* Links */}
            <div className="flex flex-shrink items-start gap-5">
              <div className="flex items-center gap-1">
                <img src={LinkIcon} alt="link-icon" />
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="max-w-[140px] flex-wrap truncate text-base font-normal leading-normal text-twitter-default lg:hidden"
                  href="https://ajinkyabodke.netlify.app/"
                >
                  ajinkyabodke.netlify.app
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="hidden text-base font-normal leading-normal text-twitter-default lg:flex"
                  href="https://ajinkyabodke.netlify.app/"
                >
                  ajinkyabodke.netlify.app
                </a>
              </div>
              <div className="flex items-center gap-1">
                <img src={CalenderIcon} alt="calender-icon" />
                <p className="whitespace-nowrap text-base font-normal leading-normal text-neutral-500">
                  Joined September 2019
                </p>
              </div>
            </div>
            {/* Followers */}
            <div className="flex items-end gap-5">
              <div className="flex items-end gap-1">
                <p className="text-base font-medium leading-normal text-neutral-50">
                  99
                </p>
                <p className="text-base font-normal leading-normal text-neutral-500">
                  Following
                </p>
              </div>
              <div className="flex items-end gap-1">
                <p className="text-base font-medium leading-normal text-neutral-50">
                  199
                </p>
                <p className="text-base font-normal leading-normal text-neutral-500">
                  Followers
                </p>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main className="flex-1 overflow-y-auto mb-16">
        {/* Tweets */}
        <Tweet tweetdata="Don't wish for it, work for it." />
        <Tweet
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
        />
        <Tweet
          tweetdata={
            <>
              Writing gets easier after the first sentence.
              <br />
              <br />
              Lifting gets easier after the first set.
              <br />
              <br />
              People think and think and think until they finally decide to act.
              Their attention shifts from internal to external, and the
              difficulty they created in their mind vanishes.
            </>
          }
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
      </main>

      <NewTweetButton />
      <Footer page="profile" />
    </div>
  );
}

export default UserProfile;
