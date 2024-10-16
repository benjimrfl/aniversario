$(document).ready(function () {
  // Animación al pasar el mouse sobre la carta
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-90px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });

  // Mostrar el modal al hacer clic en la carta
  $(".card").click(function () {
    $("#modalTexto").fadeIn(); // Mostrar el modal con el texto
  });

  // Cerrar el modal al hacer clic en el botón 'x' o fuera del modal
  $(".close").click(function () {
    $("#modalTexto").fadeOut(); // Ocultar el modal
  });

  $(window).click(function (e) {
    if ($(e.target).is("#modalTexto")) {
      $("#modalTexto").fadeOut(); // Ocultar el modal si se hace clic fuera del contenido
    }
  });
});