import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";

function CreateAccountStep2() {
  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <StepHeading>Create your account</StepHeading>
          <Fieldset text="Name" type="text" />
          <Fieldset text="Email" type="email" />
          <Fieldset text="Date of Birth" type="text" />
        </div>
      </section>

      <Link
        to={URLs.signUpStep3}
        className="fixed bottom-16 left-1/2 w-20.8rem -translate-x-1/2 -translate-y-1/2 transform"
      >
        <Button variant="solid" size="full" disabled={false}>
          Sign up
        </Button>
      </Link>
    </>
  );
}
export default CreateAccountStep2;
