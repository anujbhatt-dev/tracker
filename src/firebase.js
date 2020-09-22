import * as firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCEgVbZayZ9YJs42WzNSLoPOhznv0v7W4M",
    authDomain: "penizgun.firebaseapp.com",
    databaseURL: "https://penizgun.firebaseio.com",
    projectId: "penizgun",
    storageBucket: "penizgun.appspot.com",
    messagingSenderId: "930573291180",
    appId: "1:930573291180:web:feafc37c5f09d20bc39909",
    measurementId: "G-TF8Y8EBQYE"
  };
  // Initialize Firebase
var firedb =  firebase.initializeApp(firebaseConfig);


export default firedb.database().ref();
