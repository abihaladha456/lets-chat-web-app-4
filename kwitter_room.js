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
 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
    console.log("Room Name - " + Room_names);
    row = "<div  class= 'room_name' id= "+Room_names+" onclick='redirectToRoomName(this.id)' ># " + Room_names + "</div><hr>"
   //End code
   });});}
getData();

function addRoom (){
   room_name.document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
   purpose : "adding room name"
   });
   
   localStorage.setItem("room_name" , room_name);
   window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
   console.log(name);
   localStorage.setItem("room_name" , name);
   window.location = "kwitter_page.html"
}
function Logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
       window.location = "index.html";
   }
   
