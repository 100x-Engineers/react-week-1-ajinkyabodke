import Button from "../../components/Button";
import ProfileAvatar from "../../assets/profile_avatar.png";
import BackArrow from "../../assets/back.svg";
import AddImageIcon from "../../assets/add-image.svg";
import CancelIcon from "../../assets/cancel-g.svg";
import Banner from "../../components/Banner";
import Fieldset from "../../components/Fieldset";
import { Link } from "react-router-dom";
import { URLs } from "../../constants";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { formData, setFormData } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const userData = formData;
  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    name: userData.name,
    bio: userData.bio,
    location: userData.location,
    website: userData.website,
  });

  const handleInputChange = (field, value) => {
    setInputValues((c) => {
      const updatedValues = {
        ...c,
        [field]: value,
      };
      console.log("🎉updated form :", updatedValues);
      return updatedValues;
    });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    // Simulating an API call with a timeout
    setTimeout(() => {
      setFormData(inputValues);
      console.info("💸your submitted values:", inputValues);
      navigate(URLs.profile);
      setIsLoading(false);
    }, 300);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="px-4"
    >
      <header className="flex flex-col items-start gap-3">
        <section className="flex items-center justify-between self-stretch py-3">
          <div className="flex items-center gap-5">
            <Link to={URLs.profile}>
              <img alt="back_button" src={BackArrow} />
            </Link>
            <p className="text-base font-bold leading-normal text-neutral-50">
              Edit profile
            </p>
          </div>

          <Button size="sm" type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </section>
        {/* Banner Image */}
        <div className="relative flex w-full">
          <Banner />
          <div className="absolute flex h-full w-full items-center justify-center gap-2">
            <img alt="add_image" src={AddImageIcon} />
            <img alt="cancel_image" src={CancelIcon} />
          </div>
        </div>
      </header>
      <main className="relative">
        {/* Profile Icon */}
        <img
          className="absolute -top-12 left-1 h-4.2rem w-4.2rem rounded-7xl border-4 border-neutral-1000"
          src={ProfileAvatar}
          alt="profile_avatar"
        />

        <div className="relative flex flex-col items-center gap-5 self-stretch pt-5">
          <Fieldset
            text="Name"
            inputValue={inputValues.name}
            onInputChange={(value) => handleInputChange("name", value)}
            type="text"
          />
          <Fieldset
            text="Bio"
            inputValue={inputValues.bio}
            onInputChange={(value) => handleInputChange("bio", value)}
            type="text"
          />
          <Fieldset
            text="Location"
            inputValue={inputValues.location}
            onInputChange={(value) => handleInputChange("location", value)}
            type="text"
          />
          <Fieldset
            text="Website"
            inputValue={inputValues.website}
            onInputChange={(value) => handleInputChange("website", value)}
            type="text"
          />
        </div>
      </main>
    </form>
  );
}

export default EditProfile;
