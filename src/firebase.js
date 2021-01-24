const firebase = require("firebase");
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase

var firebaseConfig = {
    apiKey: "AIzaSyBJ7HYwg9EEBNKsE63ol3PzmXawqmNyWnA",
    authDomain: "prrrfolio.firebaseapp.com",
    projectId: "prrrfolio",
    storageBucket: "prrrfolio.appspot.com",
    messagingSenderId: "360422386522",
    appId: "1:360422386522:web:66f05b0f1ddc823caaa163",
    measurementId: "G-H0PWSDCN24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
  
export default firebase.firestore();