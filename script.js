// Android VS Apple

// Android Button

// Event listener
document
  .getElementById("chooseAndroid")
  .addEventListener("click", changeToAndroid);
// Function
function changeToAndroid() {
  document.getElementById("image").src = "images/Android-Logo.jpg";
  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").style.background = "#a4c93b";
  document.getElementById("link").href = "https://www.android.com/";
  document.getElementById("html").style.background = "#a4c93b";
  document.getElementById("body").style.fontFamily = "Roboto";
  document.getElementById("chooseAndroid").classList.add("active");
  document.getElementById("chooseApple").classList.remove("active");
}

// Apple Button

// Event Listener
document.getElementById("chooseApple").addEventListener("click", changeToApple);
// Function
function changeToApple() {
  document.getElementById("image").src = "images/Apple-Logo.jpg";
  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").style.background = "#b6bcca";
  document.getElementById("link").href = "https://www.apple.com/";
  document.getElementById("body").style.background = "#b6bcca";
  document.getElementById("body").style.fontFamily = "Brygada 1918";
  document.getElementById("chooseApple").classList.add("active");
  document.getElementById("chooseAndroid").classList.remove("active");
}
