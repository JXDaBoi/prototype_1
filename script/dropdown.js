var topFlag = [0, 0, 0, 0, 0, 0];
var numTopFlag = ["one", "two", "three", "four", "five", "six"];
var conTopFlag = [
  "oneCon",
  "twoCon",
  "threeCon",
  "fourCon",
  "fiveCon",
  "sixCon",
];
var buttonTopFlag = [
  "oneButton",
  "twoButton",
  "threeButton",
  "fourButton",
  "fiveButton",
  "sixButton",
];

function dropdownMain() {
  if (
    getComputedStyle(document.querySelector("#dropdown-content")).display ==
    "none"
  ) {
    document.getElementById("dropdown-content").style.display = "block";
  } else if (
    getComputedStyle(document.querySelector("#dropdown-content")).display ==
    "block"
  ) {
    document.getElementById("dropdown-content").style.display = "none";
  }
}

function dropdownMisc() {
  if (
    getComputedStyle(document.querySelector("#drop-links")).display == "none"
  ) {
    document.getElementById("drop-links").style.display = "block";
  } else if (
    getComputedStyle(document.querySelector("#drop-links")).display == "block"
  ) {
    document.getElementById("drop-links").style.display = "none";
  }
}

window.onclick = function (e) {
  if (!e.target.matches("#categoryTab")) {
    if (
      getComputedStyle(document.querySelector("#drop-links")).display == "block"
    ) {
      document.getElementById("drop-links").style.display = "none";
    }
  }
};

function cardAni(a) {
  if (a == 1 && window.innerWidth <= 767 && topFlag[0] == 0) {
    document.getElementById("one").classList.add("topTop");
    document.getElementById("one").classList.remove("topMid");
    document.getElementById("oneCon").classList.add("appearOpacity");
    document.getElementById("oneCon").classList.remove("disappearOpacity");
    document.getElementById("oneButton").classList.add("appearDisplay");
    document.getElementById("oneButton").classList.remove("disappearDisplay");
    topFlag[0] = 1;
    for (var i = 1; i < 6; i++) {
      topFlag[i] = 0;
    }
  } else if (a == 1 && window.innerWidth <= 767 && topFlag[0] == 1) {
    document.getElementById("one").classList.add("topMid");
    document.getElementById("one").classList.remove("topTop");
    document.getElementById("oneCon").classList.add("disappearOpacity");
    document.getElementById("oneCon").classList.remove("appearOpacity");
    document.getElementById("oneButton").classList.add("disappearDisplay");
    document.getElementById("oneButton").classList.remove("appearDisplay");
    topFlag[0] = 0;
  }
  if (a == 2 && window.innerWidth <= 767 && topFlag[1] == 0) {
    document.getElementById("two").classList.add("topTop");
    document.getElementById("two").classList.remove("topMid");
    document.getElementById("twoCon").classList.add("appearOpacity");
    document.getElementById("twoCon").classList.remove("disappearOpacity");
    document.getElementById("twoButton").classList.add("appearDisplay");
    document.getElementById("twoButton").classList.remove("disappearDisplay");
    topFlag[1] = 1;
    topFlag[0] = 0;
    for (var i = 2; i < 6; i++) {
      topFlag[i] = 0;
    }
  } else if (a == 2 && window.innerWidth <= 767 && topFlag[1] == 1) {
    document.getElementById("two").classList.add("topMid");
    document.getElementById("two").classList.remove("topTop");
    document.getElementById("twoCon").classList.add("disappearOpacity");
    document.getElementById("twoCon").classList.remove("appearOpacity");
    document.getElementById("twoButton").classList.add("disappearDisplay");
    document.getElementById("twoButton").classList.remove("appearDisplay");
    topFlag[1] = 0;
  }
  if (a == 3 && window.innerWidth <= 767 && topFlag[2] == 0) {
    document.getElementById("three").classList.add("topTop");
    document.getElementById("three").classList.remove("topMid");
    document.getElementById("threeCon").classList.add("appearOpacity");
    document.getElementById("threeCon").classList.remove("disappearOpacity");
    document.getElementById("threeButton").classList.add("appearDisplay");
    document.getElementById("threeButton").classList.remove("disappearDisplay");
    topFlag[2] = 1;
    for (var i = 0; i < 2; i++) {
      topFlag[i] = 0;
    }
    for (var i = 3; i < 6; i++) {
      topFlag[i] = 0;
    }
  } else if (a == 3 && window.innerWidth <= 767 && topFlag[2] == 1) {
    document.getElementById("three").classList.add("topMid");
    document.getElementById("three").classList.remove("topTop");
    document.getElementById("threeCon").classList.add("disappearOpacity");
    document.getElementById("threeCon").classList.remove("appearOpacity");
    document.getElementById("threeButton").classList.add("disappearDisplay");
    document.getElementById("threeButton").classList.remove("appearDisplay");
    topFlag[2] = 0;
  }
  if (a == 4 && window.innerWidth <= 767 && topFlag[3] == 0) {
    document.getElementById("four").classList.add("topTop");
    document.getElementById("four").classList.remove("topMid");
    document.getElementById("fourCon").classList.add("appearOpacity");
    document.getElementById("fourCon").classList.remove("disappearOpacity");
    document.getElementById("fourButton").classList.add("appearDisplay");
    document.getElementById("fourButton").classList.remove("disappearDisplay");
    topFlag[3] = 1;
    for (var i = 0; i < 3; i++) {
      topFlag[i] = 0;
    }
    for (var i = 4; i < 6; i++) {
      topFlag[i] = 0;
    }
  } else if (a == 4 && window.innerWidth <= 767 && topFlag[3] == 1) {
    document.getElementById("four").classList.add("topMid");
    document.getElementById("four").classList.remove("topTop");
    document.getElementById("fourCon").classList.add("disappearOpacity");
    document.getElementById("fourCon").classList.remove("appearOpacity");
    document.getElementById("fourButton").classList.add("disappearDisplay");
    document.getElementById("fourButton").classList.remove("appearDisplay");
    topFlag[3] = 0;
  }
  if (a == 5 && window.innerWidth <= 767 && topFlag[4] == 0) {
    document.getElementById("five").classList.add("topTop");
    document.getElementById("five").classList.remove("topMid");
    document.getElementById("fiveCon").classList.add("appearOpacity");
    document.getElementById("fiveCon").classList.remove("disappearOpacity");
    document.getElementById("fiveButton").classList.add("appearDisplay");
    document.getElementById("fiveButton").classList.remove("disappearDisplay");
    topFlag[4] = 1;
    for (var i = 0; i < 4; i++) {
      topFlag[i] = 0;
    }
    for (var i = 5; i < 6; i++) {
      topFlag[i] = 0;
    }
  } else if (a == 5 && window.innerWidth <= 767 && topFlag[4] == 1) {
    document.getElementById("five").classList.add("topMid");
    document.getElementById("five").classList.remove("topTop");
    document.getElementById("fiveCon").classList.add("disappearOpacity");
    document.getElementById("fiveCon").classList.remove("appearOpacity");
    document.getElementById("fiveButton").classList.add("disappearDisplay");
    document.getElementById("fiveButton").classList.remove("appearDisplay");
    topFlag[4] = 0;
  }
  if (a == 6 && window.innerWidth <= 767 && topFlag[5] == 0) {
    document.getElementById("six").classList.add("topTop");
    document.getElementById("six").classList.remove("topMid");
    document.getElementById("sixCon").classList.add("appearOpacity");
    document.getElementById("sixCon").classList.remove("disappearOpacity");
    document.getElementById("sixButton").classList.add("appearDisplay");
    document.getElementById("sixButton").classList.remove("disappearDisplay");
    topFlag[5] = 1;
    for (var i = 0; i < 5; i++) {
      topFlag[i] = 0;
    }
  } else if (a == 6 && window.innerWidth <= 767 && topFlag[5] == 1) {
    document.getElementById("six").classList.add("topMid");
    document.getElementById("six").classList.remove("topTop");
    document.getElementById("sixCon").classList.add("disappearOpacity");
    document.getElementById("sixCon").classList.remove("appearOpacity");
    document.getElementById("sixButton").classList.add("disappearDisplay");
    document.getElementById("sixButton").classList.remove("appearDisplay");
    topFlag[5] = 0;
  }

  for (var i = 0; i <= 5; i++) {
    if (topFlag[i] == 0) {
      document.getElementById(numTopFlag[i]).classList.add("topMid");
      document.getElementById(numTopFlag[i]).classList.remove("topTop");
      document.getElementById(conTopFlag[i]).classList.add("disappearOpacity");
      document.getElementById(conTopFlag[i]).classList.remove("appearOpacity");
      document
        .getElementById(buttonTopFlag[i])
        .classList.add("disappearDisplay");
      document
        .getElementById(buttonTopFlag[i])
        .classList.remove("appearDisplay");
    }
  }
}
