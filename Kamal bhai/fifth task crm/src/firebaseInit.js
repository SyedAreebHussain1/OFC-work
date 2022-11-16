// import {firebase} from "firebase/app";
//import * as firebase from "firebase/messaging";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import "@firebase/messaging";

const config = {
  apiKey: "AIzaSyDbhGzYGLcvmnKuS85V8IjuLJaQ3lS_vBo",
  authDomain: "notificationofcrm.firebaseapp.com",
  projectId: "notificationofcrm",
  storageBucket: "notificationofcrm.appspot.com",
  messagingSenderId: "964971837592",
  appId: "1:964971837592:web:9120eae8973f6d80e0f8ed",
  measurementId: "G-B1LPFKQGGE",
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;
export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {}
  return currentToken;
};

export const onMessageListner = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
