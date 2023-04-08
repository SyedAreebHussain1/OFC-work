// const { Message } = require("@material-ui/icons");

// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// const config={
//     apiKey: "AIzaSyDbhGzYGLcvmnKuS85V8IjuLJaQ3lS_vBo",
//   authDomain: "notificationofcrm.firebaseapp.com",
//   projectId: "notificationofcrm",
//   storageBucket: "notificationofcrm.appspot.com",
//   messagingSenderId: "964971837592",
//   appId: "1:964971837592:web:9120eae8973f6d80e0f8ed",
//   measurementId: "G-B1LPFKQGGE"

// }
// firebase.initializeApp(config);
// const messaging= firebase.messaging();
// messaging.onBackgroundMessage(function (payload){

//     const notificationTittle=payload.notification.title;
//     const notificationOptions={
//         body:payload.notification.body,

//     }
//     return self.registration.showNotification(
//         notificationOptions,
//         notificationOptions
//     );
// });

// //const app = admin.initializeApp();
// // const messaging = firebase.messaging();
//  //const initMessaging=firebase.messaging()

importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "617507241800",
});
//const app = admin.initializeApp();
const initMessaging = firebase.messaging();
