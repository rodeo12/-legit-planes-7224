document.querySelector("#submit").addEventListener("click", signup);

function signup() {
  var form = document.querySelector("form");
  // var fname=document.getElementById("fname").value
  var fname = form.fname.value;
  var lname = form.lname.value;
  var email = form.email.value;
  var remail = form.remail.value;
  var Password = form.password.value;
  var username = form.username.value;
  var mon = form.mon.value;
  var day = form.day.value;
  var year = form.year.value;
  var country = form.country.value;
  var state = form.state.value;

  if (
    fname &&
    lname &&
    email &&
    remail &&
    Password &&
    username &&
    country &&
    state
  ) {
    let signUpobj = {
      fname,
      lname,
      email,
      remail,
      Password,
      username,
      mon,
      day,
      year,
      country,
      state,
    };
    //console.log(signUpobj)

    window.location.href = "./index.html";
    localStorage.setItem("User-Credentials", JSON.stringify(signUpobj));
    alert("successfully signup");
  } else {
    alert("fill all details");
  }
}
