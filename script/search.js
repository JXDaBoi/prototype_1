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

function amount(val) {
  document.getElementById("value").value = val;
}

function changeAmount(val) {
  document.getElementById("amount").value = val;
}

function randomizer() {
  const val = document.getElementById("value").value;
  var numHold;
  var numArr = [];

  if (val == 1) {
    numHold = Math.floor(Math.random() * 10);
    document.getElementById("main-content").getElementsByTagName("div")[
      numHold
    ].style.display = "";

    if (numHold == 0) {
      for (var x = 1; x < length; x++) {
        document.getElementById("main-content").getElementsByTagName("div")[
          x
        ].style.display = "none";
      }
    } else if (numHold > 0) {
      for (var x = 0; x < numHold; x++) {
        document.getElementById("main-content").getElementsByTagName("div")[
          x
        ].style.display = "none";
      }

      for (var y = numHold + 1; y < length; y++) {
        document.getElementById("main-content").getElementsByTagName("div")[
          y
        ].style.display = "none";
      }
    }
  } else if (val > 1 && val < length) {
    var j = 0;
    var flag = false;

    do {
      numHold = Math.floor(Math.random() * 10);
      if (j > 0) {
        for (var x = 0; x < j; x++) {
          if (numHold == numArr[x]) {
            flag = true;
          }
        }
      }

      if (!flag) {
        numArr[j] = numHold;
        j++;
      } else if (flag) {
        flag = false;
      }
    } while (j < val);

    for (var x = 0; x < length; x++) {
      document.getElementById("main-content").getElementsByTagName("div")[
        x
      ].style.display = "none";
    }

    console.log(numArr);

    for (var x = 0; x < numArr.length; x++) {
      document.getElementById("main-content").getElementsByTagName("div")[
        numArr[x]
      ].style.display = "";
    }
  } else {
    for (var x = 0; x < length; x++) {
      document.getElementById("main-content").getElementsByTagName("div")[
        [x]
      ].style.display = "";
    }
  }
}
