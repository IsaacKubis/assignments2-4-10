// JavaScript source code
function my_dictionary() {
    var dict = {
        FirstName: "Isaac",
        LastName: "Kubis",
        Age: 23,
    };
    delete dict.Age;
    document.getElementById("dictionary").innerHTML = dict.FirstName +" "+ dict.LastName +" Age "+ dict.Age;
}