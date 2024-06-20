// Assuming these imports are at the top of your file
import { auth } from './firebase'; // Adjust the import path as necessary
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut as firebaseSignOut } from 'firebase/auth';

export const signUp = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOut = async () => {
  return await firebaseSignOut(auth);
};