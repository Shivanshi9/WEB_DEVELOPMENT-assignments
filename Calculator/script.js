const display = document.getElementById("display");

let expression = "";

function updateDisplay(){

    display.innerText =
    expression || "0";
}

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    const allowedKeys =
    "0123456789+-*/.%";

    if(allowedKeys.includes(key)){

        expression += key;
    }

    else if(key === "Enter"){

        if(expression !== ""){

            expression =
            Function("return " + expression)()
            .toString();
        }
    }

    else if(key === "Backspace"){

        expression =
        expression.slice(0,-1);
    }
    else if(key === "Escape"){

        expression = "";
    }


    updateDisplay();

});