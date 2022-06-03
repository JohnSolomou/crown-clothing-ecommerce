import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form copy/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(user, userDocRef);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
