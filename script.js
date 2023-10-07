const output = document.querySelector(".output");
const _exp = document.querySelector(".exp");


let exp = "";

function makeExp(i) {
    // console.log("exp", exp);
    if(exp.length < 20)

    if(
        (exp[exp.length-1] !== "." || i !== ".") && (exp[exp.length-1] !== "+" || i !== "+") &&
        (exp[exp.length-1] !== "-" || i !== "-") && (exp[exp.length-1] !== "*" || i !== "*") &&
        (exp[exp.length-1] !== "/" || i !== "/") && (exp[exp.length-1] !== "%" || i !== "%") &&
        (exp[exp.length-1] !== "√" || i !== "√")
    )
        {
        exp = exp + i;
        _exp.textContent = exp ;
    }
}

function calculate(){

    if(exp === "" || exp === "-" || exp === "+" || exp === "*" || exp === "/" || exp === "%" || exp === "√" || exp === "."
    ){
        output.textContent = "Empty Input"
    }
    else{
    const result = eval(exp);
    output.textContent = result;
}
}

function clearAll() {
    output.textContent = "_";
    _exp.textContent = "0" ;
    exp = "";
}

function calculateSqRoot (){
    const result = Math.sqrt(exp);
    output.textContent = result;
}

function backSpace(){
    exp = exp.slice(0, -1);
    _exp.textContent = exp ;

    if (exp === ""){
        _exp.textContent = "0" ;

    }
}

function calculatePercentage(){
    const result = (eval (exp) * 100);
    output.textContent = result;
}