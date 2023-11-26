let string = "";
let input = document.querySelector('input');
let button = document.querySelectorAll('.button');
let arr = Array.from(button)


arr.forEach((buttons)=>{
  buttons.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      input.value = string;
    }
    else if(e.target.innerHTML == 'AC'){
      string = ""
      input.value = string;
    }
    else if(e.target.innerHTML == 'DL'){
      string = string.substring(0, string.length-1);
      input.value = string;
    }
    else{ 
      // console.log(e.target)
      string = string + e.target.innerHTML;
      input.value = string;
    }
  })
})