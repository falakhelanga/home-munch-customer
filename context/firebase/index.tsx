import { Context, createContext, ReactNode, useContext } from "react";
import { functions } from "./functions";
import { FireBaseTypes } from "../../types/firebaseTypes";

const FireBaseContext = createContext<FireBaseTypes | null>(null);

const FireBaseProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FireBaseContext.Provider value={functions}>
      {children}
    </FireBaseContext.Provider>
  );
};

export default FireBaseProvider;
export const useFireBase = () => useContext(FireBaseContext) as FireBaseTypes;
