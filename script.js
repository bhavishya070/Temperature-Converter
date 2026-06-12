function convertTemperature(){

    const temp =
    document.getElementById("temperature").value;

    const unit =
    document.getElementById("unit").value;

    const result =
    document.getElementById("result");

    if(temp === "" || isNaN(temp)){
        result.innerHTML =
        "Please enter a valid number";
        return;
    }

    let value = parseFloat(temp);
    let output = "";

    if(unit === "celsius"){

        let f = (value * 9/5) + 32;
        let k = value + 273.15;

        output =
        `${value} °C = ${f.toFixed(2)} °F | ${k.toFixed(2)} K`;

    }

    else if(unit === "fahrenheit"){

        let c = (value - 32) * 5/9;
        let k = c + 273.15;

        output =
        `${value} °F = ${c.toFixed(2)} °C | ${k.toFixed(2)} K`;

    }

    else{

        let c = value - 273.15;
        let f = (c * 9/5) + 32;

        output =
        `${value} K = ${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;

    }

    result.innerHTML = output;
}