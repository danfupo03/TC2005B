//Contraseña
function checkPassword(){
  let password = document.getElementById("password").value;
  let cnfrmPassword = document.getElementById("cnfrm-password").value;
  console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
  let message = document.getElementById("message");

  if(password.length != 0){
      if(password == cnfrmPassword){
          message.textContent = " Passwords match ";
          message.style.color = "#1dcd59";
      }
      else{
          message.textContent = " Password don't match ";
          message.style.color = "#ff4d4d";
      }
  }
  else {
      message.textContent = " Please enter a password ";
      message.style.color = "#000000";
  }
}

//Alerta
const textElement = document.getElementById("myText");

function displayAlert() {
  alert("¡Puedes poner <<password>> o <<123>>, seguro no las olvidarás!");
}

let timerId;

textElement.addEventListener("mouseover", function() {
  timerId = setTimeout(displayAlert, 3000); 
});

textElement.addEventListener("mouseout", function() {
  clearTimeout(timerId);
});
