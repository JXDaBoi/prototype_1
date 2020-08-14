var length = document.querySelector(".content").children.length;

function input() {
  var context = document.getElementById("search").value.toUpperCase();
  search(context);
}

function search(context) {
  for (var i = 0; i < length; i++) {
    if (
      document
        .getElementById("main-content")
        .children[i].id.toUpperCase()
        .indexOf(context) > -1
    ) {
      document.getElementById("main-content").getElementsByTagName("div")[
        i
      ].style.display = "";
    } else if (context == "") {
      document.getElementById("main-content").getElementsByTagName("div")[
        i
      ].style.display = "";
    } else {
      document.getElementById("main-content").getElementsByTagName("div")[
        i
      ].style.display = "none";
    }
  }
}
