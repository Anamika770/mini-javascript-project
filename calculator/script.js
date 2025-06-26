function clearAll()
{
   document.getElementById("textArea").value = "";
} 

function backOne()
{
    var x = document.getElementById("textArea").value;
    document.getElementById("textArea").value = x.substr(0, x.length-1);
}
 
function input(data) {
    var x = document.getElementById("textArea").value;
    var lastChar = x.charAt(x.length - 1);

    if (/[0-9]/.test(data)) {
        document.getElementById("textArea").value = x + data;
        return;
    }

    if (x === "" && (data === "+" || data === "*" || data === "/")) {
        return;
    }

    if (x === "" && data === "-") {
        document.getElementById("textArea").value = x + data;
        return;
    }

    if (/[+*/.-]/.test(lastChar) && /[-+*/.]/.test(data)) {
        return;
    }

    var operands = x.split(/[-+*/]/);
    var currentOperand = operands[operands.length - 1];
    if (currentOperand.includes(".") && data === ".") {
        return;
    }

    document.getElementById("textArea").value = x + data;
}

function calculate()
{
    var x =eval( document.getElementById("textArea").value);
    document.getElementById("textArea").value = x;
}

