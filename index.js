let button = document.getElementById("button");
let currentImage = "";
document.getElementById("loader").style.display = "none";
// let imageArray = [
// "images/Riza.png",
// "images/Jerry.png",
// "images/Soze.png",
// "images/Jules.png",
// "images/Des.png",
// "images/Junior.png",
// "images/Ethan.png",
// "images/Chino.png",
// "images/Tokio.jpeg",
// "images/Art.png",
// "images/Charmed.png",
// "images/Purr.png",
//   "images/Ari.png",
//   "images/Puffco.png",
//   "images/Will.png",
//   "images/Michael.png",
// ];
let imageArray = [
  "images/Riza.png",
  "images/Chino.png",
  "images/Ari.png",
  "images/Puffco.png",
  "images/Will.png",
  "images/Michael.png",
];
function showLoadingLogo() {
  // need to change this property
  var logo = document.getElementById("loader");
  var img = document.getElementById("myImageId");
  if (logo.style.display === "none" && img.style.display === "block") {
    logo.style.display = "block";
    img.style.display = "none";
  } else {
    logo.style.display = "none";
    img.style.display = "block";
  }
}

function changeImage() {
  document.getElementById("instructions").style.display = "none";
  let index = Math.floor(Math.random() * imageArray.length);
  let srcImage = imageArray[index];
  while (srcImage == currentImage) {
    index = Math.floor(Math.random() * imageArray.length);
    srcImage = imageArray[index];
  }
  document.getElementById("myImageId").src = srcImage;
  currentImage = srcImage;
}

button.addEventListener("click", () => {
  document.getElementById("loader").style.display = "block";

  setTimeout(() => {
    changeImage();
    document.getElementById("loader").style.display = "none";
    const myInputArea = document.getElementById("inputQuestion").value;

    let finalString = "The " + myInputArea;
    let stringName = currentImage;
    stringName = stringName.substring(7);
    stringName = stringName.slice(0, -4);
    finalString += " is " + stringName;
    document.getElementById("answer").innerText = finalString;
  }, 2000);
});
