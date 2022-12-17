function mainlogin() {
  var sigdata = JSON.parse(localStorage.getItem("User-Credentials"));
  var login_email = document.querySelector("#login_email").value;
  var login_password = document.querySelector("#login_password").value;

  if (login_email && login_password) {
    if (login_email == sigdata.email && login_password == sigdata.Password) {
      alert("login successfully");
      window.location.href = "index.html";
    } else {
      alert("wrong creditonals");
    }
  } else {
    alert("fill details");
  }
}
