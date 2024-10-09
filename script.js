let input = document.getElementById('inputbox');     
let buttons = document.querySelectorAll('button');   //all button selected

let string = ""; //storing result
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{  // clicking button , storing value
        if(e.target.innerHTML == '='){  //show output if it equal
            string = eval(string);
            input.value = string; //showing result
        }

        else if(e.target.innerHTML == 'AC'){ //clearing all text
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){ // removing number typed by mistake
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;   //adding more variable untill "=" is clicked
            input.value = string;
        }
        
    })
})