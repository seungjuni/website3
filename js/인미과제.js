const open1 = document.getElementById("link1");
const open2 = document.getElementById("link2");
const open3 = document.getElementById("link3");

const modal1 = document.querySelector("#mw1");
const modal2 = document.querySelector("#mw2");
const modal3 = document.querySelector("#mw3");

open1.onclick = () => {
    modal1.style.display = "flex";
};
open2.onclick = () => {
    modal2.style.display = "flex";
};
open3.onclick = () => {
    modal3.style.display = "flex";
};

const close1 = document.getElementById("close1");
const close2 = document.getElementById("close2");
const close3 = document.getElementById("close3");

close1.onclick = () => {
    modal1.style.display = "none";
};
close2.onclick = () => {
    modal2.style.display = "none";
}
close3.onclick = () => {
    modal3.style.display = "none";
}