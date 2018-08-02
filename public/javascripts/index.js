//GARDAR PRODUCTOS EN FAVORITOS
var jsonFavs;
var favs;

var datosGuardados = localStorage.getItem("favs"); // pongo en una var mis datos guardados

//para que se se rescriban mis datos, le pregunto si mi localstorage esta vacio, y si no lo esta que me traiga lo que tengo
if (datosGuardados == null) {
  favs = [];
  $(".no-favs").append("No hay ningun producto en favoritos");
} else {
  favs = JSON.parse(datosGuardados).favs; //.parse toma el json y lo cambia a su formato original
}

$(".save").on("click", function(e) {
  $(this).addClass("code");
  $(this)
    .siblings(".no-save")
    .removeClass("code")
    .css("color", "red")
    .css("animation-duration", " 1s")
    .css("animation-name", "latidos");

  //guardar datos
  let data = {
    img: $(this)
      .siblings(".siblings")
      .children("#img-save")
      .attr("src"),
    nombre: $(this)
      .siblings(".siblings")
      .children(".name")
      .children("#name-save")
      .html(),
    precio: $(this)
      .siblings(".siblings")
      .children(".price")
      .children("p")
      .html(),
    code: $(this)
      .siblings(".siblings")
      .children(".code")
      .children("p")
      .html()
  };

  favs.push(data);

  const jsonFavs = {
    favs: favs,
    total: favs.length
  }; // hago un json de mi objt

  let dataStr = JSON.stringify(jsonFavs); //lo hago cadena de texto
  localStorage.setItem("favs", dataStr); //lo guardo
  // location.reload();
});

$(".no-save").on("click", function(e) {
  const code = $(this)
    .siblings(".siblings")
    .children(".code")
    .children("p")
    .html();
  $(this).addClass("code");
  $(this)
    .siblings(".save")
    .removeClass("code");

  let datosGuardados = localStorage.getItem("favs");
  if (datosGuardados == null) {
    favs = [];
  } else {
    favs = JSON.parse(datosGuardados).favs;
  }

  if (favs) {
    for (var i = 0; i < favs.length; i++) {
      console.log(favs[i]);
      if (favs[i].code == code) {
        favs.splice(i, 1);
      }
    }
  } else {
    favs = [];
  }

  const jsonFavs = {
    favs: favs,
    total: favs.length
  }; // hago un json de mi objt

  let dataStr = JSON.stringify(jsonFavs); //lo hago cadena de texto

  localStorage.setItem("favs", dataStr);
});

//VER PRODUCTOS EN FAVORITOS
var favsObj = JSON.parse(datosGuardados);
var favs = [];
if (favsObj) {
  favs = favsObj.favs;
}

function listaFavs() {
  $.each(favs, function(index, elem) {
    let lista = `<div class="container-producto-fav"><div class="container-a-fav" onclick="location.href='/producto/${
      elem.code
    }';"><img class="img-fav" src="${elem.img}"></img><p>${elem.nombre}</p>
    <p>${elem.precio}</p></div>
    <p class="icon-borrar"><a class="borrar" data-id="${index}"><i class="fas fa-trash can"></i></a></p></div>`;
    $(".container-favs").append(lista);
    $(".favs-vacio").remove();
  });
}
listaFavs();

//BORRAR UN PRODUCTO DE FAV
$(".borrar").on("click", function(event) {
  event.preventDefault();
  let removeP = $(this);
  let idItem = removeP
    .parent()
    .parent()
    .index();
  removeP
    .parent()
    .parent()
    .remove(); //borro el html, pero SOLO el html
  //aca lo borro del localStorage
  favs.splice(idItem, 1); // .splice, le doy el indice y la cantidad de elementos que quiero cortar
  let jSon = JSON.parse(datosGuardados); // vuelvo a setear el localStorage, primero piso el json, lo cmabio a cadena de caracteres y se lo mando al localstorage
  jSon.favs = favs;
  jSon.total = favs.length;
  let string = JSON.stringify(jSon); //lo vuelvo a convertir en cadena de caracteres
  localStorage.setItem("favs", string); // y lo guardo de nuevo en el localStorage
});

// BUSQUEDA
$(".button-search").on("click", function(e) {
  let nombreBuscado = $(".input-search").val();
  window.location.href = "/busqueda/" + nombreBuscado;
});

$(".input-search").on("keypress", function(e) {
  if (e.keyCode == 13) {
    let nombreBuscado = $(".input-search").val();
    window.location.href = "/busqueda/" + nombreBuscado;
  }
});

// FILTROS
$("#heladeras").on("click", function(e) {
  let filtroEncontrado = $("#heladeras").val();
  window.location.href = "/filtro/" + filtroEncontrado;
});

$("#cafetera").on("click", function(e) {
  let filtroEncontrado = $("#cafetera").val();
  window.location.href = "/filtro/" + filtroEncontrado;
});

$("#pavas").on("click", function(e) {
  let filtroEncontrado = $("#pavas").val();
  window.location.href = "/filtro/" + filtroEncontrado;
});

//AUTOCOMPLIR
$(function() {
  var tags = [
    "heladera",
    "heladeras",
    "cafetera",
    "pava",
    "pavas",
    "lavarropas",
    "secador",
    "tostadora",
    "donuts",
    "donas",
    "cepillo",
    "cepillos",
    "planchita",
    "planchitas",
    "depiladora",
    "aceite",
    "oil"
  ];
  $("#tags").autocomplete({
    source: tags
  });
});
