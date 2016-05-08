$(document).ready(function(){ // start js once document loads
//creating a firebase reference 
var ref = new Firebase("https://DormHacks.firebaseio.com");
$("#SubmitItems").click(function(){
   var items = $("#items").val();
   //login will recieve email and password from user
console.log(items);
   var url_ramen = "https://dormhacks.firebaseio.com/user_ramen";
   new Firebase(url_ramen).once('value',function(snap){
      var ramen = snap.val().ramen; 
      i=ramen.length;
      ramen[i]=items;
      console.log(ramen);
      ref.child("user_ramen").update({
         ramen
   
      });
      
   });
});
$("#menu1").click(function(){
   var items = $("#items").val();
   //login will recieve email and password from user
console.log(items);
   var url_ramen = "https://dormhacks.firebaseio.com/user_ramen";
   new Firebase(url_ramen).once('value',function(snap){
      var ramen = snap.val().ramen; 
      console.log(ramen);
      localStorage["ramen_test1"] = JSON.stringify(ramen);
   });

   }
   );
});