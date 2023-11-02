import Button from "../../components/Button";
import ProfileAvatar from "../../assets/profile_avatar.png";
import BackArrow from "../../assets/back.svg";
import AddImageIcon from "../../assets/add-image.svg";
import CancelIcon from "../../assets/cancel-g.svg";
import Banner from "../../components/Banner";
import Fieldset from "../../components/Fieldset";
import { Link } from "react-router-dom";
import { URLs } from "../../constants";

function EditProfile() {
  return (
    <div className="px-4">
      <header className="flex flex-col items-start gap-3">
        <section className="flex items-center justify-between self-stretch py-3">
          <div className="flex items-center gap-5">
            <Link to={URLs.profile}>
              <img src={BackArrow} />
            </Link>
            <p className="text-base font-bold leading-normal text-neutral-50">
              Edit profile
            </p>
          </div>
          <Link to={URLs.profile}>
            <Button size="md">Save</Button>
          </Link>
        </section>
        {/* Banner Image */}
        <div className="relative flex w-full">
          <Banner />
          <div className="absolute flex h-full w-full items-center justify-center gap-2">
            <img src={AddImageIcon} />
            <img src={CancelIcon} />
          </div>
        </div>
      </header>
      <main className="relative">
        {/* Profile Icon */}
        <img
          className="w-4.2rem h-4.2rem absolute -top-12 left-1 rounded-7xl border-4 border-neutral-1000"
          src={ProfileAvatar}
        />
        <section className="relative flex flex-col items-center gap-5 self-stretch pt-5">
          <Fieldset text="Name" type="text" />
          <Fieldset text="Bio" type="text" />
          <Fieldset text="Location" type="text" />
          <Fieldset text="Website" type="text" />
        </section>
      </main>
    </div>
  );
}

export default EditProfile;
