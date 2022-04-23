function convertBase() {
    let number = "";
    number = document.getElementById("number").value.toUpperCase();
    let fromBase = Number(document.getElementById("fromBase").value);
    try {
        if (isInGivenBase(number, fromBase)) {
            document.getElementById("number").style.backgroundColor = "white";
            document.getElementById("result").innerHTML = parseInt(number, fromBase) /// Convert any base to base 10
        } else {
            document.getElementById("number").style.backgroundColor = "red";
            document.getElementById("result").innerHTML = "Invalid input"
        }
    } catch(err) {
        document.getElementById("number").style.backgroundColor = "red";
        document.getElementById("result").innerHTML = err.message;
    }
}


function isInGivenBase(str, base)
{
    try {
        if (str === "") return false;
        else 
        {
            if (base > 16) return false;
            else if (base <= 10) {
                for (let i = 0; i < str.length; i++) {
                    if (!(str[i].charCodeAt() >= '0'.charCodeAt() && 
                    str[i].charCodeAt() < ('0'.charCodeAt() + base)))
                        return false;
                    }
            } else {
                for (let i = 0; i < str.length; i++) {
                    if (! ((str[i].charCodeAt() >= '0'.charCodeAt() && 
                    str[i].charCodeAt() < ('0'.charCodeAt() + base)) || 
                    (str[i].charCodeAt() >= 'A'.charCodeAt() && str[i].charCodeAt() < 
                    ('A'.charCodeAt() + base - 10))))		
                        return false;
                }
            }
            return true;
        }
    } catch(err) {
        document.getElementById("number").style.backgroundColor = "red";
        document.getElementById("result").innerHTML = err.message;
    }
}


