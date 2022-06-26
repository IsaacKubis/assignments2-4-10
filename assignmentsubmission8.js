// JavaScript source code
const letters = ['a', 'b', 'c'];
const nums = [1, 2, 3];

function concat() {
    const numbers = letters.concat(nums);
    document.getElementById("concat").innerHTML = numbers;
}

function slice() {
    let a = document.getElementById("start").value
    document.getElementById("slice").innerHTML = letters.slice(a);
}

function Dog(name, breed, color, sex) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.sex = sex;
}

const theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');

Dog.prototype.ToString = function dogToString() {
    return 'Dog ' + this.name + ' is a ' + this.sex + ' '
        + this.color + ' ' + this.breed; 
}
function dogstring() {
    document.getElementById("dog").innerHTML = theDog.ToString();
}

function setThreeDecimal() {
    this.value = parseFloat(this.value).toFixed(3);
}

function precise() {
    var num = document.getElementById("numprecise").value;
    var a = num.toPrecision(3);
    document.getElementById("precise").innerHTML = a;
   
}
