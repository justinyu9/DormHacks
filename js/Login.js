$(document).ready(function(){ // start js once document loads
//creating a firebase reference 
var ref = new Firebase("https://DormHacks.firebaseio.com");
$("#submit").click(function(){
   var email = $("#email").val();
   var pwd = $("#pwd").val();
   //login will recieve email and password from user
  ref.authWithPassword({
  email    : email,
  password : pwd
}, function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
   
}
);
});