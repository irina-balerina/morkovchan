let cart = {
  'morkov': {
    "name": "салат из моркови",
    "price": "230руб/ 300гр",
    "count": 0,
  },
  'griby': {
    "name": "салат из грибов",
    "price": "250руб/ 300гр",
    "count": 0,
  },
  'he_gov': {
    "name": "хе из говядины",
    "price": "380руб/ 300гр",
    "count": 0,
  },
  'he_serd': {
    "name": "хе из сердечек",
    "price": "350руб/ 300гр",
    "count": 0,
  },
}

let counter = document.querySelectorAll('.counter'); 

// надо сделать:

// увеличение и уменьшение количества товара;
document.addEventListener('click', (event) => {
  console.log(event.target.classList);
  if(event.target.classList.contains('plus')) {
    plusFunction(event.target.dataset.id);
  }
  if(event.target.classList.contains('minus')) {
    minusFunction(event.target.dataset.id);
  }
})

const plusFunction = (id) => {
  cart[id]["count"]++;
   renderCart();

}

const minusFunction = (id) => {
  cart[id]["count"]--;
  renderCart();

}


// const minusFunction = (id) => {
//   if((cart[id]["count"]-1) == 0) {
//     deleteFunction(id);
//     return true;
//   }
//   cart[id]["count"]--;
//   renderCart();
// }

// удаление товара;
// const deleteFunction = (id) => {
//   delete cart[id];
//   renderCart();
// }


// вывести счетчик на экран.
const renderCart = () => {
  console.log(cart);
  // counter.forEach(item => {
  //   item.textContent = "";
  // });  ?????
  
}
 renderCart();


