import React from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";
import { useAuth } from "../../context/auth";
const GoogleLogin = ({
  isSignUp = false,
  className,
}: {
  isSignUp?: boolean;
  className?: string;
}) => {
  const { googleSignIn } = useAuth();
  return (
    <Button
      onClick={googleSignIn}
      className={`bg-[#4484f3] w-full py-2 relative text-center font-normal ${className}`}
    >
      <div className="absolute left-3 flex items-center h-full top-0">
        <FcGoogle size={23} color="white" />
      </div>

      <span className="text-white">
        {isSignUp ? "Continue with Google" : "Login with Google"}
      </span>
    </Button>
  );
};

export default GoogleLogin;
