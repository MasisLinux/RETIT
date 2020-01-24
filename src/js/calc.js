// const getValue = document.getElementById('submit-button');
const inputVal = document.getElementById('input-val');
const numbers = Array.from(document.querySelectorAll('.number'));
const output = document.getElementById('output');
console.log(numbers)

var displayVal = '0';
var displayValElement = document.getElementById('calc-display-val');



// getValue.addEventListener('click',
//     function(event) {
//         event.preventDefault();
       
//         console.log(inputVal);
//         let output = document.getElementById('output');

//         output.textContent = inputVal.value;

//     }

// )

numbers.forEach(function(number) {
    number.addEventListener('click', function() {
        event.preventDefault();
        console.log(event.target.value)
        inputVal.value += event.target.value
    })

})

function deleteInput(event){
    event.preventDefault();
    inputVal.value = '';
    output.textContent = '';
    
}

function returnEqual(event) {
    event.preventDefault();

    let total = eval(inputVal.value);
    inputVal.value = `${inputVal.value} = ${total}`
}



function back(event) {
    event.preventDefault(); 
    let val = document.getElementById("input-val").value;
    document.getElementById("input-val").value = val.substr(0, val.length - 1);
}



// del.onClick = () => {
//     let lengthOfDisplayVal = displayVal.length;
//     displayVal = displayVal.slice(0, lengthOfDisplayVal - 1);
  
//     if (displayVal === '')
//       displayVal = '0';
//     displayValElement.innerText = displBackSpaceayVal;
//   }