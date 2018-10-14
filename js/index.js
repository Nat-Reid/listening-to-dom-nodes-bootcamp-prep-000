function bubbleStopAt3(e) {
  // stop! that! propagation!
  var value = this.firstChild.nodeValue.trim();
  if (value === '3'){
    e.preventDefault();
  }
  console.log(value+ ' bubbled');
}

function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
const divs = document.querySelectorAll('div');
for (let i = 0; i < divs.length; i++) {
  //divs[i].addEventListener('click', bubble);
  divs[i].addEventListener('click', bubbleStopAt3);
}

const input = document.querySelector('input')

input.addEventListener('keydown', function(e) {
  if (e.which === 71) {
    return e.preventDefault()
  } else {
    console.log(e.which)
  }
});
