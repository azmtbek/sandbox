import firebase_app from "../firebase";
import { signInWithEmailAndPassword, getAuth, AuthError } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  let result = null,
    error: AuthError | null = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e as AuthError;
  }

  return { result, error };
}