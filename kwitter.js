function addUser()
{
    user_name = document.getElementById("user_name").Value;

    localStorage.setItem("user_name", user_name);

    window.location = "kwitter_room.html";
}

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBnNXeo_lMTEKhvZkV-BF4dImv-2CrGTwQ",
  authDomain: "class-test-a3fa4.firebaseapp.com",
  projectId: "class-test-a3fa4",
  storageBucket: "class-test-a3fa4.appspot.com",
  messagingSenderId: "278816235448",
  appId: "1:278816235448:web:1ef1d0b2fbd7de4901b94d"
};

const app = initializeApp(firebaseConfig);


