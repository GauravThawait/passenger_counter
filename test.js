let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let delEl = document.getElementById("delete-el")
let errorParagraph = document.getElementById("error")

function increment()
{
    count = count+1
    countEl.innerText = count
    
}

function decrement()
{    
    if(count>0){
    count = count-1
    countEl.innerText = count
    }
}

function save()
{
    let countstr = count + " - "

    saveEl.textContent += countstr
    countEl.textContent =0
}

function purchase()
{
    errorParagraph.textContent = "Something went wrong ! please try again later"
}


let num1=8
let num2=4

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el")


function add()
{
        sumEl.textContent = num1+num2
}

function sub()
{
        sumEl.textContent = num1-num2
}

function div()
{
        sumEl.textContent = num1*num2
}

function mul()
{
        sumEl.textContent = num1/num2
}