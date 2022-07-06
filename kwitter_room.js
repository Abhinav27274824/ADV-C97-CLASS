const firebaseConfig = {
      apiKey: "AIzaSyDfX27TNbDbZFHT0zlLf07CBmoMSGCILAw",
      authDomain: "kwitterdatabase-d8013.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-d8013-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-d8013",
      storageBucket: "kwitterdatabase-d8013.appspot.com",
      messagingSenderId: "465433379864",
      appId: "1:465433379864:web:717b7b514190ed7b72af6d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

room_name = localStorage.getItem("room_name")
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name  + "!"

function addRoom(){
    room_name = document.getElementById("room_name").value 
    firebase.database().ref("/").child(room_name).update({
      purpose : "Adding room name"
    })
    localStorage.setItem("room_name", room_name)
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names)
       row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div>"
       document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name", name)
window.location = "kwitter_page.html"
}

function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "index.html"
}








