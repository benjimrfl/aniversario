const yearButtons = document.querySelectorAll('.year-btn');
const swiperWrapper = document.querySelector('.swiper-wrapper');

const data = {
    "2019": {
        "Octubre": {
            image: "img/2019-10.jpg", // Cambia estas rutas a tus imágenes
            description: "Martes 15 de octubre. Esta fue la primera foto que me enviaste, recuerdo que me quedé tipo  \
            WTF? man porque me manda esta foto? Y encima después ese dia nos fuimos a comer juntos.\
            Donde empezó todo ✨✨"
        },
        "Noviembre": {
            image: "img/2019-11.jpg",
            description: "Domingo 10 de noviembre. Esta foto es de después de un ensayo del musical \
            yo recuerdo que me fui para casa para no se qué, pero tu te fuiste con esta gente a casa de la rebe \
            y me llegó esta foto por la noche. Quedé así: 🤤🤤"
        },
        "Diciembre": {
            image: "img/2019-12.jpg",
            description: "Domingo 15 de diciembre. El autocompletado de mi programa donde estoy escribiendo \
            dice que esta es 'La mejor foto de mi vida', y perfectamente podría serlo, porque es nuestra primera \
            foto juntos. Podría poner cualquier otra de esas navidades, donde te ves increiblee, pero no podía \
            dejar esta atrás. Te amo 🫶"
        }
    },
    "2020": {
        "Enero": {
            image: "img/2020-01.jpg",
            description: "Miércoles 1 de enero. Nuestro primer año nuevo. Aún recuerdo la cara de todo el \
            mundo mientras nos echábamos la foto 🫨🫨. Fue el comienzo de un año rarete (covid), pero \
            comenzar los años contigo es lo mejor que me ha podido pasar. ¿¿Que hace al lado el RAMÓN??"
        },
        "Febrero": {
            image: "img/2020-02.jpg",
            description: "Martes 25 de febrero. ME ENCANTA ESTA FOTO, LA LENGUITA. No es nada romantica \
            pero es que no todas las fotos van a ser románticas. Parece que esta es una de nuestras primeras \
            videollamadas, ¿qué haríamos ahora sin ellas?"
        },
        "Marzo": {
            image: "img/2020-03.jpg",
            description: "Viernes 6 de marzo. Una de nuestras ultimas fotos antes del confinamiento. \
            Creo que simplemente hacíamos el tonto en tu casa, pero hacer el tonto contigo \
            me llena el corazoncito. 🥰🥰"
        },
        "Abril": {
            image: "img/2020-04.jpg",
            description: "Miércoles 1 de abril. ESTA FOTO NO PODÍA FALTAR POR DIOS. Necesito que mis \
            hijos vean esta foto. Además en abril también te hiciste el flequillo, pero obviamente esta \
            foto se lleva el premio."
        },
        "Mayo": {
            image: "img/2020-05.jpg",
            description: "Lunes 11 de mayo. No sé que pasó este día la verdad, pero tenemos un montón de fotos, \
            además que sales preciosa con tu flequillito (en otras sales con moño y es tipo 🤤🤤🤤🤤)"
        },
        "Junio": {
            image: "img/2020-06.jpg",
            description: "Viernes 19 de junio. Fuimos a celebrar nuestro messiversario a las vias (cuando se podía entrar XD, \
            2024 y seguimos sin tranvía) a comernos un buen bol de patatas cheddar boffff. \
            Además, estaba luchando contra la leucemia 😔😔"
        },
        "Julio": {
            image: "img/2020-07.jpg",
            description: "Viernes 31 de julio. Creo recordar que estabamos celebrando el cumple de Cris y \
            era una pijamada. La foto es black cum face, no recomendado, se puede ver en mi cara. Pero bueno, \
            también fue de nuestras primeras pijamadas juntitos 👩‍❤️‍💋‍👨"
        },
        "Agosto": {
            image: "img/2020-08.jpg",
            description: "Sábado 15 de agosto. Esta foto es de cuando estaba en el campa de escuelita y te quedaste \
            con el churribeio ese finde. Creo que a partir de este momento es cuando cae enamorado de tí, \
            igual que su dueñoo."
        },
        "Septiembre": {
            image: "img/2020-09.jpg",
            description: "Miércoles 2 de septiembre. TE HICISTE LAS MECHAS POR PRIMERA VEZ, QUEEEEEEEEEEEEEEE? \
            Y ESTE PIBONAZOOOO?????? 🤤🤤🤤🤤🤤🤤🤤🤤 (además llevas un kiki)"
        },
        "Octubre": {
            image: "img/2020-10.jpg",
            description: "Sábado 17 de octubre. Sólo los reals recuerdan este día. Primer aniversariooo, fuimos a \
            pasear por Sevilla y a montarnos al barquito. Después fuimos a la Gorda a cenar. Fue día gooooooood, \
            además iba estrenando lupas."
        },
        "Noviembre": {
            image: "img/2020-11.jpg",
            description: "Sábado 21 de noviembre. Cumplías 18 babyyy, es la mejor foto que he encontrado, te \
            regalaron tu blazer negra con la que empezaste a ser astetik. Me siento el hombre más afortunado del mundo \
            de poder verte soplar las velas año tras año. Te amo 🫶"
        },
        "Diciembre": {
            image: "img/2020-12.jpg",
            description: "Miércoles 16 de diciembre. Tenemos muchas fotos de estas navidades, no sé ni que pasó ese día, \
            pero la pongo simplemente por que se me cae la baba contigo 🤤. Nada más que añadir señoría."
        }
    },
    "2021": {
        "Enero": {
            image: "img/2021-01.jpg",
            description: "Enero 2021."
        },
        "Febrero": {
            image: "img/2021-02.jpg",
            description: "Febrero 2021."
        },
        "Marzo": {
            image: "img/2021-03.jpg",
            description: "Marzo 2021."
        },
        "Abril": {
            image: "img/2021-04.jpg",
            description: "Abril 2021."
        },
        "Mayo": {
            image: "img/2021-05.jpg",
            description: "Mayo 2021."
        },
        "Junio": {
            image: "img/2021-06.jpg",
            description: "Junio 2021."
        },
        "Julio": {
            image: "img/2021-07.jpg",
            description: "Julio 2021."
        },
        "Agosto": {
            image: "img/2021-08.jpg",
            description: "Agosto 2021."
        },
        "Septiembre": {
            image: "img/2021-09.jpg",
            description: "Septiembre 2021."
        },
        "Octubre": {
            image: "img/2021-10.jpg",
            description: "Octubre 2021."
        },
        "Noviembre": {
            image: "img/2021-11.jpg",
            description: "Noviembre 2021."
        },
        "Diciembre": {
            image: "img/2021-12.jpg",
            description: "Diciembre 2021."
        }
    },
    "2022": {
        "Enero": {
            image: "img/2022-01.jpg",
            description: "Enero 2022."
        },
        "Febrero": {
            image: "img/2022-02.jpg",
            description: "Febrero 2022."
        },
        "Marzo": {
            image: "img/2022-03.jpg",
            description: "Marzo 2022."
        },
        "Abril": {
            image: "img/2022-04.jpg",
            description: "Abril 2022."
        },
        "Mayo": {
            image: "img/2022-05.jpg",
            description: "Mayo 2022."
        },
        "Junio": {
            image: "img/2022-06.jpg",
            description: "Junio 2022."
        },
        "Julio": {
            image: "img/2022-07.jpg",
            description: "Julio 2022."
        },
        "Agosto": {
            image: "img/2022-08.jpg",
            description: "Agosto 2022."
        },
        "Septiembre": {
            image: "img/2022-09.jpg",
            description: "Septiembre 2022."
        },
        "Octubre": {
            image: "img/2022-10.jpg",
            description: "Octubre 2022."
        },
        "Noviembre": {
            image: "img/2022-11.jpg",
            description: "Noviembre 2022."
        },
        "Diciembre": {
            image: "img/2022-12.jpg",
            description: "Diciembre 2022."
        }
    },
    "2023": {
        "Enero": {
            image: "img/2023-01.jpg",
            description: "Enero 2023."
        },
        "Febrero": {
            image: "img/2023-02.jpg",
            description: "Febrero 2023."
        },
        "Marzo": {
            image: "img/2023-03.jpg",
            description: "Marzo 2023."
        },
        "Abril": {
            image: "img/2023-04.jpg",
            description: "Abril 2023."
        },
        "Mayo": {
            image: "img/2023-05.jpg",
            description: "Mayo 2023."
        },
        "Junio": {
            image: "img/2023-06.jpg",
            description: "Junio 2023."
        },
        "Julio": {
            image: "img/2023-07.jpg",
            description: "Julio 2023."
        },
        "Agosto": {
            image: "img/2023-08.jpg",
            description: "Agosto 2023."
        },
        "Septiembre": {
            image: "img/2023-09.jpg",
            description: "Septiembre 2023."
        },
        "Octubre": {
            image: "img/2023-10.jpg",
            description: "Octubre 2023."
        },
        "Noviembre": {
            image: "img/2023-11.jpg",
            description: "Noviembre 2023."
        },
        "Diciembre": {
            image: "img/2023-12.jpg",
            description: "Diciembre 2023."
        }
    },
    "2024": {
        "Enero": {
            image: "img/2024-01.jpg",
            description: "Enero 2024."
        },
        "Febrero": {
            image: "img/2024-02.jpg",
            description: "Febrero 2024."
        },
        "Marzo": {
            image: "img/2024-03.jpg",
            description: "Marzo 2024."
        },
        "Abril": {
            image: "img/2024-04.jpg",
            description: "Abril 2024."
        },
        "Mayo": {
            image: "img/2024-05.jpg",
            description: "Mayo 2024."
        },
        "Junio": {
            image: "img/2024-06.jpg",
            description: "Junio 2024."
        },
        "Julio": {
            image: "img/2024-07.jpg",
            description: "Julio 2024."
        },
        "Agosto": {
            image: "img/2024-08.jpg",
            description: "Agosto 2024."
        },
        "Septiembre": {
            image: "img/2024-09.jpg",
            description: "Septiembre 2024."
        },
        "Octubre": {
            image: "img/2024-10.jpg",
            description: "Octubre 2024."
        }
    }
};

let swiper;

function adjustImageMargin(img) {
    img.onload = function () {
        const width = img.naturalWidth;
        const height = img.naturalHeight;

        if (height > width) {
            // Imagen vertical
            img.style.marginTop = "70px";  // Ajusta este valor según sea necesario
        } else {
            // Imagen horizontal
            img.style.marginTop = "40px";  // Ajusta este valor según sea necesario
        }
    }
}

// Función para mantener la posición de desplazamiento actual
function preventPageScroll() {
    // Obtener la posición actual de desplazamiento
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    window.scrollTo(0, scrollTop);  // Mantener la posición fija
}

// Evento al hacer clic en un botón de año
yearButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedYear = button.dataset.year;

        // Limpiar las diapositivas actuales de Swiper
        swiperWrapper.innerHTML = '';

        // Añadir nuevas diapositivas para el año seleccionado
        for (const month in data[selectedYear]) {
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');

            const img = document.createElement('img');
            img.src = data[selectedYear][month].image;
            adjustImageMargin(img);

            const description = document.createElement('p');
            description.textContent = data[selectedYear][month].description;
            description.classList.add('swiper-description');

            slide.appendChild(img);
            slide.appendChild(description);
            swiperWrapper.appendChild(slide);
        }

        // Destruir el Swiper anterior si ya existe
        if (swiper) {
            swiper.destroy(true, true);  // Eliminar completamente el Swiper y sus eventos
        }

        // Inicializar Swiper de nuevo con las nuevas diapositivas
        swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        // Agregar preventDefault en los nuevos botones de navegación
        document.querySelectorAll('.swiper-button-prev, .swiper-button-next').forEach(button => {
            button.addEventListener('click', function (event) {
                event.preventDefault();  // Prevenir el comportamiento predeterminado de navegación
                preventPageScroll();  // Mantener la página en la posición actual al navegar
            });
        });

        // Desactivar temporalmente el scroll suave durante las transiciones de Swiper
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';  // Restaurar el scroll suave
        }, 700);  // Tiempo que dura la transición de Swiper
    });
});
