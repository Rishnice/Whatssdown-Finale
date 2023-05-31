var firebaseConfig = {
    apiKey: "AIzaSyAdYCvV1ysIsAmTTjo6P7D_66JatpCKzEM",
    authDomain: "whatssdown-854df.firebaseapp.com",
    databaseURL: "https://whatssdown-854df-default-rtdb.firebaseio.com",
    projectId: "whatssdown-854df",
    storageBucket: "whatssdown-854df.appspot.com",
    messagingSenderId: "283044872713",
    appId: "1:283044872713:web:b7e4e1e13db67b10016ed8"
  };

  user_name = localStorage.getItem("user_name")
  room_name = localStorage.getItem("room_name")

  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
  
          });});}
    getData();

  function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });

    document.getElementById("msg").value = "";
}

  function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name"); 

    window.location = "index.html";
}