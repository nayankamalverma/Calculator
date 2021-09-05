function gethistory()
    {
        return document.getElementById("history").innerText;
    }
function printhistory(num){
    document.getElementById("history").innerText=num;
}
function getoutput(){
    return document.getElementById("output").innerText;
}
function printoutput(num){
    if(num==""){
        document.getElementById("output").innerText=num;
    }
    else{
        document.getElementById("output").innerText=formattedNumber(num);
    }
}
function formattedNumber(num){
    if(num=="-"){
        return ""; 
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''))
}
let operator = document.getElementsByClassName("operator");
for(let i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printhistory("");
            printoutput("");
        }
        else if(this.id=="backspace"){
            let output = reverseNumberFormat(getoutput()).toString();
            if(output){// if output has a value
                output = output.substr(0,output.length-1);
                printoutput(output);
            }
        }
        else{
            let output = getoutput();
            let history = gethistory();
            if(output=="" && history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                output= output==""?output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    let result = eval(history);
                    printoutput(result);
                    printhistory("");
                }
                else{
                    history=history+this.id;
                    printhistory(history);
                    printoutput("");
                }
            }
        }
    });
}
let num = document.getElementsByClassName("num");
for(let i=0;i<num.length;i++)
{
    num[i].addEventListener('click',function(){
        let output=reverseNumberFormat(getoutput());
        if(output!=NaN){
            //if output is number
            output+=this.id;
            printoutput(output);
        }
    })
}