// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK2AwuenM4wlGBiDjOI7pjadltH64mPwA",
  authDomain: "squarepro1-5dadf.firebaseapp.com",
  projectId: "squarepro1-5dadf",
  storageBucket: "squarepro1-5dadf.appspot.com",
  messagingSenderId: "666168647698",
  appId: "1:666168647698:web:c3d92a7e8a0d363ee8b8cb",
  measurementId: "G-9HJ03CDT9L",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCR6O13TYsq2_lo64kgK2rcLWCNQyhOyb0",
//   authDomain: "todo-app000.firebaseapp.com",
//   projectId: "todo-app000",
//   storageBucket: "todo-app000.appspot.com",
//   messagingSenderId: "617539827060",
//   appId: "1:617539827060:web:dc8142973e449afdfae821",
//   measurementId: "G-C64N0ZLPGY",
// };
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);
// console.log(process.env.REACT_APP_VAPID_KEY);
export const requestForToken = () => {
  return getToken(messaging, {
    vapidKey: process.env.REACT_APP_VAPID_KEY,
  })
    .then((currentToken) => {
      if (currentToken) {
        // console.log("current token for client: ", currentToken);
        localStorage.setItem("FCM",currentToken)
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log(
          "No registration token available. Request permission to generate one."
        );
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      // console.log("payload", payload);
      resolve(payload);
    });
  });
