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
            description: "Noviembre 2019."
        },
        "Diciembre": {
            image: "img/2019-12.jpg",
            description: "Diciembre 2019."
        }
    },
    "2020": {
        "Enero": {
            image: "img/2020-01.jpg",
            description: "Enero 2020."
        },
        "Febrero": {
            image: "img/2020-02.jpg",
            description: "Febrero 2020."
        },
        "Marzo": {
            image: "img/2020-03.jpg",
            description: "Marzo 2020."
        },
        "Abril": {
            image: "img/2020-04.jpg",
            description: "Abril 2020."
        },
        "Mayo": {
            image: "img/2020-05.jpg",
            description: "Mayo 2020."
        },
        "Junio": {
            image: "img/2020-06.jpg",
            description: "Junio 2020."
        },
        "Julio": {
            image: "img/2020-07.jpg",
            description: "Julio 2020."
        },
        "Agosto": {
            image: "img/2020-08.jpg",
            description: "Agosto 2020."
        },
        "Septiembre": {
            image: "img/2020-09.jpg",
            description: "Septiembre 2020."
        },
        "Octubre": {
            image: "img/2020-10.jpg",
            description: "Octubre 2020."
        },
        "Noviembre": {
            image: "img/2020-11.jpg",
            description: "Noviembre 2020."
        },
        "Diciembre": {
            image: "img/2020-12.jpg",
            description: "Diciembre 2020."
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

const swiper = new Swiper('.mySwiper', {
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

            const description = document.createElement('p');
            description.textContent = data[selectedYear][month].description;

            slide.appendChild(img);
            slide.appendChild(description);
            swiperWrapper.appendChild(slide);
        }

        // Actualizar Swiper después de añadir las nuevas diapositivas
        swiper.update();
    });
});