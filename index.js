var result = document.querySelector(".result")
var buttons = document.querySelectorAll("button")

buttons.forEach(function (button){
  button.addEventListener('click', function(){

    if(button.textContent === 'AC'){
      result.value = '';
    }

    else if(button.textContent === 'DEL'){
      result.value = result.value.slice(0,-1)
    }

    else if (button.textContent === '='){
      try {
        result.value = eval(result.value);
      } catch (error) {
        result.value = "Error";
      }
    }

    else{
      result.value += button.textContent;
    }

  });

});