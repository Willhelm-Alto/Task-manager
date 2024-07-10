import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKUuMTi_3AN6T9nLnjgRDtdygqGBcnZao",
  authDomain: "task-manager-143bb.firebaseapp.com",
  databaseURL: "https://task-manager-143bb-default-rtdb.firebaseio.com",
  projectId: "task-manager-143bb",
  storageBucket: "task-manager-143bb.appspot.com",
  messagingSenderId: "20719270963",
  appId: "1:20719270963:web:3c1a345af4d8c951093746"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
