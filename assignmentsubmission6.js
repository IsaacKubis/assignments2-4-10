// JavaScript source code

function person(fname, lname, age) {
    this.person_fname = fname;
    this.person_lname = lname;
    this.person_age = age;
}



function myFunction() {
    var human = new person(
        document.getElementById("fName").value,
        document.getElementById("lName").value,
        document.getElementById("Age").value);
    Display();
    function Display() {
        if (human.person_age < 18) {
            document.write("<br/>You are not old enough")
        } else {
            document.getElementById("output").innerHTML =
                "First Name: " + human.person_fname +
                "<br/>Last Name: " + human.person_lname +
                "<br/>Age: " + human.person_age;
        };
    }
}