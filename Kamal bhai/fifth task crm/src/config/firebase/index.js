


import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCBe2u11HhUdfZEMsldYNRwBLjeUWSWGrg",
  authDomain: "sqaure-pro-one.firebaseapp.com",
  projectId: "sqaure-pro-one",
  storageBucket: "sqaure-pro-one.appspot.com",
  messagingSenderId: "935865794702",
  appId: "1:935865794702:web:92898f66df925afc6249df",
  measurementId: "G-TQLZFED6KS"
};
// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
// 
//       resolve(payload);
//     });
// });
firebase.initializeApp(firebaseConfig);


export default firebase;