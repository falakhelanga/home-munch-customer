import React, { useMemo, useState } from "react";
import Body from "../../elements/Body";

import { signUpValidationSchema } from "./validationSchema";
import TextInput from "../../elements/TextInput";
import Button from "../../elements/Button";
import FaceBookLogin from "../../elements/FaceBookLogin";
import GoogleLogin from "../../elements/GoogleLogin";
import Form from "../../elements/Form";
import { useAuth } from "../../../context/auth";

const AuthModal = () => {
  const initialValues = useMemo(
    () => ({
      emailAdress: "",
      password: "",
      confirmPassword: "",
    }),
    []
  );
  const { userSignUp, userSignIn, facebookSignIn, googleSignIn } = useAuth();
  const [authForm, setAuthForm] = useState("register");
  const handleSubmit = (values: typeof initialValues) => {
    userSignUp(values.emailAdress, values.password);
    // console.log(values);
  };
  return (
    <div className=" md:mx-0 mx-4">
      {authForm === "register" && (
        <div className="bg-white pb-[6rem] pt-[2rem] md:px-6 px-2 rounded-lg">
          <h2 className="text-center font-bold text-2xl mb-2 capitalize">
            Register with us
          </h2>
          <Form
            validationSchema={signUpValidationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <TextInput
              name="emailAdress"
              placeholder="Enter your email address"
            />
            <TextInput
              name="password"
              placeholder="Enter your password"
              containerClassNames="my-4"
            />
            <TextInput
              name="confirmPassword"
              placeholder="Confirm your password"
              containerClassNames="mb-4"
            />
            <Button type="submit" className="mt-4 text-white ">
              Sign Up
            </Button>
            <div className="w-full flex items-center gap-4 my-6">
              <div className="flex-1 h-[1px] bg-[#d8d8d8]"></div>
              <span className="text-gray-500">or</span>
              <div className="flex-1 h-[1px] bg-[#d8d8d8]"></div>
            </div>
            <FaceBookLogin isSignUp className="my-3" />
            <GoogleLogin isSignUp />
            <div className="text-center mt-6 text-gray-300">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setAuthForm("signin");
                }}
                className="text-blue-400 cursor-pointer"
              >
                Sign in
              </span>
            </div>
          </Form>
        </div>
      )}
      {authForm === "signin" && (
        <div className="bg-white pb-[6rem] pt-[2rem] md:px-6 px-2 rounded-lg">
          <h2 className="text-center font-bold text-2xl mb-2 capitalize">
            Sign in
          </h2>
          <Form
            validationSchema={signUpValidationSchema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <TextInput
              name="emailAdress"
              placeholder="Enter your email address"
            />
            <TextInput
              name="password"
              placeholder="Enter your password"
              containerClassNames="my-4"
            />

            <Button type="submit" className="mt-4 text-white ">
              Sign In
            </Button>
            <div className="w-full flex items-center gap-4 my-6">
              <div className="flex-1 h-[1px] bg-[#d8d8d8]"></div>
              <span className="text-gray-500">or</span>
              <div className="flex-1 h-[1px] bg-[#d8d8d8]"></div>
            </div>
            <FaceBookLogin className="my-3" />
            <GoogleLogin />
            <div className="text-center mt-6 text-gray-300">
              Not a member?{" "}
              <span
                onClick={() => {
                  setAuthForm("register");
                }}
                className="text-blue-400 cursor-pointer"
              >
                Sign up
              </span>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default AuthModal;
