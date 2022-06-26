// JavaScript source code
function myFunction() {
    document.write("Hello World ");
    document.write(typeof "Hello World");
    
    var a = 1;
    var b = " hello world "
    document.write(b + a +'.')
    var c = 1
    var d = 1
    if (c + d === 2) {
        document.write(" 1 + 1 = 2")
    } 
    var e = 3
    if (e > c && d < e) {
        document.write("3 is greater than 2.")
    }

    if (!(e < c || e > b)) {
        document.write(" hi")
    }
    
}