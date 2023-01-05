import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  User,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useFireBase } from "../firebase";
// const auth = getAuth();
const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
interface AuthType {
  userSignUp: (email: string, password: string) => Promise<User>;
  userSignIn: (email: string, password: string) => Promise<User>;
  user: User | null;
  facebookSignIn: () => Promise<void | User>;
  googleSignIn: () => Promise<User>;
  redirectUrl: string | null;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const [user, setUser] = useState<User | null>(null);
  const { auth } = useFireBase();
  const router = useRouter();
  const [userState, setUserState] = useState<User | null>(null);
  const [redirectUrl, setRedirectUrl] = useState<string | null>(null);
  // const redirectUrl = useRef<string>(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      setUserState(user);
      // userRef.current = user;
      if (redirectUrl) {
        router.push(redirectUrl!!);
      }

      // ...
    } else {
      setUserState(null);
      // userRef.current = null;
      // User is signed out
      // ...
    }
  });

  const userSignUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return Promise.resolve(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Promise.reject(error);
        // ..
      });
  };

  const userSignIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return Promise.resolve(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return Promise.reject(error);
      });
  };

  const facebookSignIn = () => {
    return signInWithPopup(auth, facebookProvider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;
        return Promise.resolve(user);

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        Promise.reject(error);

        // ...
      });
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        return Promise.resolve(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        return Promise.reject(error);
        // ...
      });
  };

  const logOut = () => {
    return signOut(auth);
  };
  return (
    <AuthContext.Provider
      value={{
        user: userState,
        userSignIn,
        userSignUp,
        facebookSignIn,
        googleSignIn,
        redirectUrl,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext) as AuthType;
