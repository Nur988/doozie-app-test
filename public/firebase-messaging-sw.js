 // Scripts for firebase and firebase messaging
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
 importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

 // Initialize the Firebase app in the service worker by passing the generated config
 const firebaseConfig = {
  apiKey: "AIzaSyDSgQ_3nOJCG7rBChoJymR6RSP45LduRuQ",
    authDomain: "doozie-app-f9ccc.firebaseapp.com",
    projectId: "doozie-app-f9ccc",
    storageBucket: "doozie-app-f9ccc.appspot.com",
    messagingSenderId: "493671688296",
    appId: "1:493671688296:web:b12e1751045e01c3c373dd",
    measurementId: "G-PK6WSLQHWW"
 };

 firebase.initializeApp(firebaseConfig);

 // Retrieve firebase messaging
 const messaging = firebase.messaging();

 messaging.onBackgroundMessage(function(payload) {
   console.log("Received background message ", payload);

   const notificationTitle = payload.notification.title;
   const notificationOptions = {
     body: payload.notification.body,
   };

   self.registration.showNotification(notificationTitle, notificationOptions);
 });