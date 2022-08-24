function loadHtml(id, filename){
  console.log(`div id : ${id}, filename : ${filename}`);

  let xhttp;
  let element = document.getElementById(id);
  let file = filename;

  if(file){
     xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
          if(this.status == 200){
            element.innerHTML = this.responseText;
          }
          if(this.status == 404){
            element.innerHTML = "<h2>Page not found</h2>";
          }
        }
     }

     xhttp.open("GET", `HTML/${file}`, true);
     xhttp.send();
     return;
  }
}

//Currently not being used
function sendEmail() {
  Email.send({
    Host: "smtp.mailtrap.io",
    Username: "cb71c879331ae3",
    Password: "732a4058f419d9",
    To: "ted@gmail.com",
    From: "xyz@gmail.com",
    Subject: "You have a new enquiry",
    Body: "Well that was easy!!",
  }).then(function (message) {
    alert("Data Submitted successfully");
  });
}

//Currently not being used
function gotowhatsapp() {
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var url =
    "https://wa.me/918983567848?text=" +
    "Name: " +
    firstName +
    "%20" +
    lastName +
    "%0a" +
    "Phone: " +
    phone +
    "%0a" +
    "Email: " +
    email +
    "%0a" +
    "Message: " +
    message;

  window.open(url, "_blank").focus();
}