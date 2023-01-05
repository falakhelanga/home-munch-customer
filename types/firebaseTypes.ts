import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";

export interface FireBaseTypes {
  db: Firestore;
  auth: Authh;
}
