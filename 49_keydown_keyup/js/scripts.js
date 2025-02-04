// Keydown

document.addEventListener("keydown", function(event) {
  console.log(event.key);

  if(event.key === "Enter") {
    console.log("Apertou Enter!");
  }
})

// Keyup

document.addEventListener("keyup", function(e) {
  if(event.key === "Enter") {
    console.log("Soltou o Enter");
  }
})