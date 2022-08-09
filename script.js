

function result() {
    var output = document.getElementById("result");
    var input = document.getElementById("input-value");
    
    // if(typeof(atoi(input.value)) != "number") {
    //     alert("Type a number, please!" + typeof(input.value));
    //     return false;
    // }
    if(input.value < 0){
        alert("Type a number greater than zero, please!");
        return false;
    }
    var result = 0;
    for(let i=0; i < input.value; i++) {
        (i%5==0)?result +=i : (i%3==0)?result +=i : true;
    }
    return output.textContent = "Result is " + result;
}
// result();