// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyAXExwAXVV6Z2ORbU7U-DBJDA7f1VOt22o",
  authDomain: "activity-fetcher2-0.firebaseapp.com",
  projectId: "activity-fetcher2-0",
  storageBucket: "activity-fetcher2-0.appspot.com",
  messagingSenderId: "395271285001",
  appId: "1:395271285001:web:60ba50e224ab52b4c38bd8",
  measurementId: "G-NX632841R8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
let analytics;

   if (typeof window !== 'undefined') {
     analytics = getAnalytics(app); // Only initialize analytics on the client side
   }

export { auth, analytics };