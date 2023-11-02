import PasswordEye from "../assets/password-eye.svg";
import PropTypes from "prop-types"; // ES6

Fieldset.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
};
function Fieldset(props) {
  const { text, type } = props;
  return (
    <fieldset className="group flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2 focus-within:border-twitter-default">
      <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
        <div className="px-2">{text}</div>
      </legend>
      <input
        type={type}
        placeholder={text}
        className="w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
      />
      {type === "password" && <img src={PasswordEye} alt="Password Eye" />}
      {/* {(() => {
        if (false) {
          return <img src={Hide} />;
        }
      })()} */}
    </fieldset>
  );
}

export default Fieldset;
