// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
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
//   measurementId: "G-C64N0ZLPGY"
// };
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});