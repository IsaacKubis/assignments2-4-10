// JavaScript source code



let car1 = {
    1: "Ford ",
    2: "F-150",
    3: 2017,
}
const car = ["Dodge", "Ram 1500", "2011"];
let x = 1
let Len = car.length;
function start() {
    while (x < 4) {
        document.getElementById("car1" + x).insertAdjacentText("beforeend", car1[x]);
        x++;
    }
    
    for (let i = 0; i <= Len; i++) {
        document.getElementById("car" + i).insertAdjacentText("beforeend", car[i]);
    }
};

