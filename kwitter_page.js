var firebaseConfig = {
    apiKey: "AIzaSyAdM5nIPtPds4x4vTEo1R1ipoSy3Zg2MU0",
    authDomain: "kwitter-8d2cc.firebaseapp.com",
    databaseURL: "https://kwitter-8d2cc-default-rtdb.firebaseio.com",
    projectId: "kwitter-8d2cc",
    storageBucket: "kwitter-8d2cc.appspot.com",
    messagingSenderId: "102803805103",
    appId: "1:102803805103:web:cc690a1f1f9e1c0a25155a"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("user_name");
   room_name=localStorage.getItem("room_name");
   

   function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name , 
        message:msg , 
       like:0
    });
    document.getElementById("msg").value="";
   }