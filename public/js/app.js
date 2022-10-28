

let loadMoreBtn = document.querySelector('#load-more')
let currentItem = 3

let boxes = [...document.querySelectorAll('.box-container .box')]
loadMoreBtn.onclick = () => {
  for (let i = currentItem; i < currentItem + 3; i++) {
    if (i < boxes.length) {
      boxes[i].style.display = 'inline-block'
    } else {
      break;
    }
  }
  currentItem += 3
  console.log(currentItem)

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none'
  }
}

var preloader = document.getElementById('loading')

function myFunction () {
  preloader.style.display = 'none'
}



// Contest filter
// function filterobject(c) {
//   let x, i;

//   x = document.getElementsByClassName('container')
//   if (c === 'all') { c = ""; }
//   for (let i = 0; i < x.length; i++) {
//       removeClass(x[i], 'show')

//       if (x[i].className.indexOf(c) > -1) {
//           addClass(x[i], 'show')
//       }
//   }
// }

// function addClass(element, name){
//   let i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");

//   for(let i = 0; i < arr2.length; i++)
//   {
//       if(arr1.indexOf(arr2[i]) === -1){
//           element.className += " " + arr2[i];
//       }
//   }
// }
// function removeClass(element, name){
//   let i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");

//   for(let i = 0; i < arr2.length; i++)
//   {
//      while(arr1.indexOf(arr2[i]) > -1){
//       arr.splice(arr1.indexOf(arr2[i]), 1);
//      }
//   }
//   element.className = arr1.join(" ");
// }

