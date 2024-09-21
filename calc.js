function addition() {
    let num1 = Number(document.getElementById("first-number").value)
    let num2 = Number(document.getElementById("second-number").value)
    
    let result = num1 + num2

    if (result < 0) { 
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "red" 
    } else {
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "#d071b2" 
    }

    
}

function subtraction() {
    let num1 = Number(document.getElementById("first-number").value)
    let num2 = Number(document.getElementById("second-number").value)

    let result = num1 - num2

    if (result < 0) { 
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "red" 
    } else {
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "#d071b2" 
    }
}

function multiplication() {
    let num1 = Number(document.getElementById("first-number").value)
    let num2 = Number(document.getElementById("second-number").value)

    let result = num1 * num2

    if (result < 0) { 
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "red" 
    } else {
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "#d071b2" 
    }

}

function division() {
    let num1 = Number(document.getElementById("first-number").value)
    let num2 = Number(document.getElementById("second-number").value)

    let result = num1 / num2

    if (result < 0) { 
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "red" 
    } else {
        document.getElementById("output").innerHTML = String(result)
        document.getElementById("output").style.color = "#d071b2" 
    }

}

function power() {
    let num1 = Number(document.getElementById("first-number").value)
    let num2 = Number(document.getElementById("second-number").value)
    let base = 1;

    for(let i = 0; i < num2  ; i++ ) {
       base = base * num1
    }
    if (base < 0) { 
        document.getElementById("output").innerHTML = String(base)
        document.getElementById("output").style.color = "red" 
    } else {
        document.getElementById("output").innerHTML = String(base)
        document.getElementById("output").style.color = "#d071b2" 
    }
}

function clear_values() {
    document.getElementById("first-number").value = ""
    document.getElementById("second-number").value = ""
    document.getElementById("output").innerHTML = ""
}
