$(document).ready(function() {
  let datosGuardados = localStorage.getItem("favs");
  if (datosGuardados == null) {
    favs = [];
  } else {
    favs = JSON.parse(datosGuardados).favs;
  }

  if (favs) {
    favs.forEach(function(fav) {
      $('[data-code="' + fav.code + '"]')
        .children(".save")
        .addClass("code");

      $('[data-code="' + fav.code + '"]')
        .children(".no-save")
        .removeClass("code")
        .css("color", "red");
      // .css("animation", "latidos .5s infinite");
    });
  }
});
