function compute() {
    // getting values from html into javascript variables
    var principal = document.getElementById("principal").value;

    //validating the principle amount
    if(principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // Calcualting the interest
    var interest = principal * years * rate /100;
    // convert number of years into actual years in the future
    var year = new Date().getFullYear()+parseInt(years);
    
    // Displaying the result
    document.getElementById("result").innerHTML= "if you deposit <b><mark>"+principal+"</mark></b>,<br\><br\>at an interest rate of <b><mark>" +rate+"</mark></b>,<br\><br\>You will receive an amount of <b><mark>"+interest+"</mark></b>,<br\><br\>in the year <b><mark>"+year+"</mark></b>";

}

// This function will display the rate amount parallel to the slider.
function updateRate() {
    var rateval = document.getElementById("rate").value +"%";
    document.getElementById("rate_val").innerText=rateval;
}
        
