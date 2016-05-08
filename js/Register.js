$(document).ready(function(){ // start js once document loads
//creating a firebase reference 
var ref = new Firebase("https://DormHacks.firebaseio.com");
$("#submit").click(function(){
   var name = $("#name").val();
   var school = $("#School").val();
   var email = $("#email").val();
   var pwd = $("#pwd").val();
   //submit will store all user input when they click on the submit page
   
   
  ref.createUser({
  email    : email,
  password : pwd
}, function(error, userData) {
  if (error) {
    console.log("Error creating user:", error);
  } else {
    console.log("Successfully created user account with uid:", userData.uid);
    var UserRef = ref.child("users").child(userData.uid);
    UserRef.set({
       name: name, 
       school: school
    });
  }
});
   
}
);
});