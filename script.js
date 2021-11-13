
function compute()
{
    var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate /100;
var year = new Date().getFullYear()+parseInt(years);
var amount = Number(principal) + Number(interest);

document.getElementById("result").innerHTML="If you deposit <span class='h'>"+principal+"</span>,\<br\>at an interest rate of <span class='h'>"+rate+"</span>%\<br\>You will receive an amount of <span class='h'>"+amount+"</span>,\<br\>in the year <span class='h'>"+year+"</span>\<br\>"}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        
function validate()
{
    var principal = document.getElementById("principal").value;
    if(Number(principal) <= 0)
     {
         alert('Enter a positive value');
         document.getElementById("principal").focus();
     }
}
