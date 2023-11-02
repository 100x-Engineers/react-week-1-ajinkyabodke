import PasswordEye from "../assets/password-eye.svg";
import PropTypes from "prop-types"; // ES6

Fieldset.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
};
function Fieldset({ text, type, inputValue, onInputChange, ...rest }) {
  return (
    <fieldset className="group flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2 focus-within:border-twitter-default">
      <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
        <div className="px-2">{text}</div>
      </legend>
      <input
        type={type}
        placeholder={text}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        className="w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
        {...rest}
      />
      {type === "password" && <img src={PasswordEye} alt="Password Eye" />}
    </fieldset>
  );
}

export default Fieldset;
