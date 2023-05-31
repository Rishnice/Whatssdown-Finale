var firebaseConfig = {
  apiKey: "AIzaSyAdYCvV1ysIsAmTTjo6P7D_66JatpCKzEM",
  authDomain: "whatssdown-854df.firebaseapp.com",
  databaseURL: "https://whatssdown-854df-default-rtdb.firebaseio.com",
  projectId: "whatssdown-854df",
  storageBucket: "whatssdown-854df.appspot.com",
  messagingSenderId: "283044872713",
  appId: "1:283044872713:web:b7e4e1e13db67b10016ed8"
};

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name")
  document.getElementById("user_name").innerHTML = "Welcome " + user_name;
  
  function addRoom(){
    room_name = document.getElementById("room-name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html"
  }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML += row;

        });});}
  getData();
  
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name"); 

  window.location = "index.html";
}
