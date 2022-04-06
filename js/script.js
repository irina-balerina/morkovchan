let cart = {
  'morkov': {
    "name": "салат из моркови",
    "price": "200руб/ 300гр",
    "count": 0,
    "htmlCount": document.getElementById("mork"),
  },
  'sparja': {
    "name": "спаржа",
    "price": "300руб/ 300гр",
    "count": 0,
    "htmlCount": document.getElementById("spar"),
  },
  'funchoza': {
    "name": "фунчоза",
    "price": "300руб/ 300гр",
    "count": 0,
    "htmlCount": document.getElementById("funch"),
  },
  'griby': {
    "name": "салат из грибов",
    "price": "300руб/ 300гр",
    "count": 0,
    "htmlCount": document.getElementById("gr"),
  },
  'he_gov': {
    "name": "хе из говядины",
    "price": "380руб/ 300гр",
    "count": 0,
    "htmlCount": document.getElementById("heg"),
  },
  'he_serd': {
    "name": "хе из сердечек",
    "price": "350руб/ 300гр",
    "count": 0,
    "htmlCount": document.getElementById("hes"),
  },
  'kimchi': {
    "name": "кимчи",
    "price": "300руб/ 300гр",
    "count": 0,
    "htmlCount": document.getElementById("kim"),
  },
}

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
  cart[id]["htmlCount"].innerHTML = cart[id]["count"];//вывели значение счетчика на экран
}

const minusFunction = (id) => {
  cart[id]["count"]--;
  cart[id]["htmlCount"].innerHTML = cart[id]["count"];//вывели значение счетчика на экран
}
