let theScreen = document.querySelector('.screen');
let theButtons = document.querySelectorAll('.btn');
let equals = document.querySelector('.bttn-equals');
let clear = document.querySelector('.bttn-clear');

for(let i = 0; i < theButtons.length; i++){
  theButtons[i].addEventListener('click', function(){
    theScreen.value += theButtons[i].getAttribute('data-num');
  })
}

equals.addEventListener('click', function(){
  if(theScreen.value == ''){
    alert('there is nothing to calculate')
  }else{
    let value = eval(theScreen.value);
    theScreen.value = value;
  }
})

clear.addEventListener('click', function(){
  theScreen.value = '';
})
