// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE43i5S7gpUae3Ubv2wcWhdFvNB_LYq9g",
  authDomain: "labwebsite-che.firebaseapp.com",
  projectId: "labwebsite-che",
  storageBucket: "labwebsite-che.appspot.com",  // Fixed this
  messagingSenderId: "767726313316",
  appId: "1:767726313316:web:1b0e51eb1b9cfca2c42471",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAE43i5S7gpUae3Ubv2wcWhdFvNB_LYq9g",
//   authDomain: "labwebsite-che.firebaseapp.com",
//   projectId: "labwebsite-che",
//   storageBucket: "labwebsite-che.firebasestorage.app",
//   messagingSenderId: "767726313316",
//   appId: "1:767726313316:web:1b0e51eb1b9cfca2c42471",
//   measurementId: "G-KQYMC2NEV4"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
