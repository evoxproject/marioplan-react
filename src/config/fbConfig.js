import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDC9wfhbTm_d8TUr1R3-xgdG5IToPnuAwg",
    authDomain: "aaron-mario-plan.firebaseapp.com",
    databaseURL: "https://aaron-mario-plan.firebaseio.com",
    projectId: "aaron-mario-plan",
    storageBucket: "aaron-mario-plan.appspot.com",
    messagingSenderId: "384416537842",
    appId: "1:384416537842:web:0f75e5b14d54790d0a846b",
    measurementId: "G-FEQ6B2XR6D"
  };

  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.fireStore().settings({ timestampsInSnapshots : true});

  export default firebase;