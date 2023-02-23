function checkPassword() {
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(password, cnfrmPassword);
    let message = document.getElementById("message");

    if (password.lenght != 0 ) {
      if(password == cnfrmPassword) {
        message.textContent = "Passwords match";
        message.style.backgroundColor = "#3ae374";
      }
      else{
        message.textContent = "Passwords don't match";
        message.style.backgroundColor = "#ff4d4d";
      }
    }
}