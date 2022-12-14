let result = document.querySelector("#result");
let clearBtn = document.querySelector(".clearBtn");
let inputBtn = document.querySelectorAll(".inputBtn");
let backSpace = document.querySelector(".backSpace");
let resultBtn = document.querySelector(".resultBtn");

inputBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        result.value += btn.value;
    })
})
resultBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    let resultValue = eval(result.value);
    result.value = (Number.isInteger(resultValue))?
    resultValue:
    resultValue.toPrecision(5);

    if(Number.isInteger(resultValue)){
        result.value = resultValue;
    }else{
        if((resultValue+"").length>14){
            result.value = resultValue.toPrecision(14);
        }else{
            result.value = resultValue;
        }
    }
})
resultBtn.addEventListener("dblclick", ()=>{
    result.value = "";
})
clearBtn.addEventListener("click", ()=>{
    result.value = "";
})
backSpace.addEventListener("click", ()=>{
    let resultValue = result.value;
    resultValue = resultValue.split("");
    resultValue = resultValue.slice(0, resultValue.length-1);
    resultValue = resultValue.join("");
    result.value=resultValue;
    console.log(resultValue);
})
