var typed = new Typed(".change", {
  strings: [
    "Software Developer.",
    "Web designer.",
    "React Developer.",
    "Frontend Developer.",
  ],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var sidem = document.getElementById("sidemenu");

function openmenu() {
  sidem.style.right = "0px";
}

function closemenu() {
  sidem.style.right = "-270px";
}


var tablinks = document.getElementsByClassName("tlink");
var tabcontents = document.getElementsByClassName("tcontent");

function opentab(tabname) {
  for (tabl of tablinks) {
    tabl.classList.remove("actlink");
  }
  for (tabc of tabcontents) {
    tabc.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("actlink");
  document.getElementById(tabname).classList.add("active-tab");
}

AOS.init();

AOS.init({
  offset: 120,
  duration: 900,
});

let divs = document.querySelectorAll("div");

window.onscroll = () => {
  divs.forEach((div) => {
    let top = window.scrollY;
    let offset = div.offsetTop;
    let height = div.offsetHeight;

    if (top >= offset && top < offset + height) {
      div.classList.add("show-animate");
    }

    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

