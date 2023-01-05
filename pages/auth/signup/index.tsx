import React, { useMemo } from "react";
import Form from "../../../components/elements/Form";
import TextInput from "../../../components/elements/TextInput";
import Button from "../../../components/elements/Button";
import { signUpValidationSchema } from "../../../components/sections/auth/validationSchema";
import Body from "../../../components/elements/Body";
import { useAuth } from "../../../context/auth";
import FaceBookLogin from "../../../components/elements/FaceBookLogin";
import GoogleLogin from "../../../components/elements/GoogleLogin";

const AuthPage = () => {
  const initialValues = useMemo(
    () => ({
      emailAdress: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );
  const { userSignUp, userSignIn, facebookSignIn, googleSignIn } = useAuth();
  const handleSubmit = (values: typeof initialValues) => {
    userSignUp(values.emailAdress, values.password);
    // console.log(values);
  };
  return (
    <Body>
      <Form
        validationSchema={signUpValidationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <TextInput name="emailAdress" placeholder="Enter your email address" />
        <TextInput name="password" placeholder="Enter your password" />
        <TextInput name="confirmPassword" placeholder="Confirm your password" />
        <Button type="submit" className="mt-4">
          Sign Up
        </Button>
        <FaceBookLogin isSignUp />
        <GoogleLogin isSignUp />
      </Form>
    </Body>
  );
};

export default AuthPage;
