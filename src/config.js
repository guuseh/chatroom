// Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyAult4FCViO-zNGsCTl4E3AYH44FGChIoc",
  authDomain: "dollhouse-e4ddb.firebaseapp.com",
  databaseURL: "https://dollhouse-e4ddb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dollhouse-e4ddb",
  storageBucket: "dollhouse-e4ddb.firebasestorage.app",
  messagingSenderId: "272526989839",
  appId: "1:272526989839:web:bafc162c25a65bbb63217a"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = initializeApp(config);
const db = getDatabase(app);
export default db;