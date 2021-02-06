// // importScripts("https://www.gstatic.com/firebasejs/8.2.6/firebase-app.js")

// import firebase from 'firebase'
// // import "../firebase-messaging-sw"

// var firebaseConfig = {
//     apiKey: "AIzaSyC0LZ3zBxoNyqS8_0s7yvpsB4xVJY4eSQQ",
//     authDomain: "spring-fcm-53f32.firebaseapp.com",
//     projectId: "spring-fcm-53f32",
//     storageBucket: "spring-fcm-53f32.appspot.com",
//     messagingSenderId: "930262767667",
//     appId: "1:930262767667:web:42667ed2b2402acd82eb46",
//     measurementId: "G-DS5E39P4KF"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);


 

//   const messaging= firebase.messaging();
// //   messaging.requestPermission()
// // //     .then(()=>{
// // //       alert("got permission")
// // //   })
// //   .then((token)=>{
// //       alert(token)
// //         console.log(token);
// //   })
// //   .then((token)=>{
// //     alert(token)
// //       console.log(token);
// // })
// //   .catch((err)=>{
// //     alert("permission not granted");
// //   })

// messaging.getToken("BIZmpoTVeKzIqkOeghfYrkS4JKlBPOpigK0yPxTuE8PYOyk0PKPAH_qE9q5vDlComtFOfifGaJUskETl_hqHROE")
// .then(res=>
//     console.log("res"))


//   messaging.onMessage((data)=>{
//       alert("reciened notification")
//   })



//   if('serviceWorker' in navigator) { 
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//   .then(function(registration) {
//    console.log("Service Worker Registered");
//   messaging.useServiceWorker(registration);  
//     }); 
//     }