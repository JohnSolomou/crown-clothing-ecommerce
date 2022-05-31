import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  SignInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5Deulh1E3rFFPq5V3JgGEs0dClhl0gqU",
  authDomain: "crwn-clothing-database-59dfc.firebaseapp.com",
  projectId: "crwn-clothing-database-59dfc",
  storageBucket: "crwn-clothing-database-59dfc.appspot.com",
  messagingSenderId: "503220526255",
  appId: "1:503220526255:web:74286d0c1aac46e411c85a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    return userDocRef;
  }
  //if user data does not exist

  //create/set the document with the data from userAuth in my collection

  //if user data exists
};
