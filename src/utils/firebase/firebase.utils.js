import { initializeApp } from "firebase/app";
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAdBIhuQsALt_jRhlPBFxwxk8E1pihUz64",
    authDomain: "valorousathletic.firebaseapp.com",
    projectId: "valorousathletic",
    storageBucket: "valorousathletic.appspot.com",
    messagingSenderId: "666155703603",
    appId: "1:666155703603:web:eebbae38c792779b907246"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
