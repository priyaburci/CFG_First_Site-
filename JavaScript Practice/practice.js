function changeText() {
  var elements = document.getElementsByTagName("h1")
  var tag = elements[0]
}

function changeText(score) {
  var elements = document.getElementsByTagName("h1")
  var tag = elements[0];
  tag.innerText = "Was great at Eurovision" + score;
}
