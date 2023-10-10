let display = document.getElementById("display");
let expression='';

function addToDisplay(val)
{
    console.log(val);
    expression=expression+val;
    display.value=expression;
}

function calculate()
{
    let result=eval(expression);
    display.value=result;
  
}
expression=result;
function myclear()
{
    
    expression = '';
    display.value = '';
}

