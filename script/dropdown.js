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
