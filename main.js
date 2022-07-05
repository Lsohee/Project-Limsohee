const root2 = document.getElementById("root2")
window.onload = function () {
  let req = new XMLHttpRequest();
  let jsonObj
  req.addEventListener("load", function () {
    jsonObj = JSON.parse(req.responseText);
    console.log(jsonObj.intro)

  }, false);
  req.open("GET", "textContents.JSON", true);
  req.send(null);
}