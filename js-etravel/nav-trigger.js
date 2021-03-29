var image_tracker = 'blue';

document.querySelector(".full-nav-trigger").onclick = function() {
  document.querySelector(".full-nav-trigger").classList.toggle("active");
  document.querySelector(".full-nav-close").classList.toggle("full-nav-open");
  document.querySelector("body").classList.toggle("full-nav-open");
  var image = document.getElementById('imgclkchange');
  if (image_tracker == 'blue') {
    image.src = 'ressources-etravel/etravel-logo-white.png';
    image_tracker = 'white';
  } else {
    image.src = 'ressources-etravel/etravel-logo.png';
    image_tracker = 'blue';
  }
}



<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title></title>


</head>

<body>

  <img src="ressources-etravel/etravel-logo.png" alt="logo" id="imgclkchange">
</body>
<footer>
  <script type="text/javascript src=" coolimgswitch.js"></script>
</footer>

</html>
