import firebase_app from "../firebase";
import { getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signOut() {
  let result = null,
    error = null;
  try {
    result = await auth.signOut();
  } catch (e) {
    error = e;
  }

  return { result, error };
}
