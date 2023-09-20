const listKey = document.querySelectorAll('input[type=button]');
const inputTel = document.querySelector('input[type=tel]');

for (ind = 0; ind < listKey.length; ind += 1) {

  const key = listKey[ind];

  key.onclick = function () {
    inputTel.value = inputTel.value + key.value;
  }
  
  
  key.onkeydown = function (event) {

    console.log(event)

    if (event.code === 'Space' || event.code == 'Enter') {
        key.classList.add('ativa');
    }
  }
  
  key.onkeydown = function (event) {
    if (event.code === 'Space' || event.code === 'Enter') {
        key.classList.remove('ativa');
    }
  }
}
