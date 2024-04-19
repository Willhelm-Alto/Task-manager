import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCaCybEu8IdB9n-l40tXr2sQ6kp3FLU-D4",
  authDomain: "task-manager-ed149.firebaseapp.com",
  databaseURL: "https://task-manager-ed149-default-rtdb.firebaseio.com",
  projectId: "task-manager-ed149",
  storageBucket: "task-manager-ed149.appspot.com",
  messagingSenderId: "1095019449811",
  appId: "1:1095019449811:web:f36bb225065dde3d5bb326",
  measurementId: "G-SDNVZ7SJPY",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//const analytics = getAnalytics(app);
export { database };
