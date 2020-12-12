window.onload = function () {
    // TEST WEBP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});;
    // slideToggle на чистом JS, при клике
let toggleArray = document.getElementsByClassName('_toggle')
if (toggleArray) {
    for (let el of toggleArray) {
        el.addEventListener('click',
            function (event) {
                event.preventDefault();
                //добавляем класс _active переключателю
                this.classList.toggle("_active")
                let toggleContent = this.nextElementSibling;


                if (!toggleContent.classList.contains('_active')) {
                    toggleContent.classList.add('_active');
                    toggleContent.style.height = 'auto';

                    var height = toggleContent.clientHeight + 'px';

                    toggleContent.style.height = '0px';

                    setTimeout(function () {
                        toggleContent.style.height = height;
                    }, 0);
                } else {
                    toggleContent.style.height = '0px';

                    toggleContent.addEventListener('transitionend',
                        function () {
                            toggleContent.classList.remove('_active');
                        }, {
                        once: true
                    });
                }
            });

    }
}
// ###

// slideToggle на чистом JS, при наведении
let hoverToggleArray = document.getElementsByClassName('_toggle-hover')
if (hoverToggleArray) {
    for (let el of hoverToggleArray) {
        let toggleContent = el.querySelector("._toggle-hover-content")

        el.addEventListener('mouseenter', function (event) {
            event.preventDefault();
            //добавляем класс _active переключателю
            toggleContent.classList.add('_active');
            toggleContent.style.height = 'auto';

            var height = toggleContent.clientHeight + 'px';

            toggleContent.style.height = '0px';

            setTimeout(function () {
                toggleContent.style.height = height;
            }, 0);

        })

        el.addEventListener("mouseleave", function (e) {
            toggleContent.style.height = '0px';
            toggleContent.style.padding = '0px 20px 0px 20px;';


            setTimeout(() => {
                toggleContent.classList.remove('_active');
            }, 250);
        })
    }

}
// ###

//rating функционал для звездного рейтинга
const ratingItemsList = document.querySelectorAll(".rating__item")
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList)


ratingItemsArray.forEach(item => {
    item.addEventListener("click", () => {
        // console.log(item.parentNode);

        item.parentNode.dataset.ratingTotal = item.dataset.ratingItem
    })
});
// ###






;

    //реализация фунцкионала выезда и скрытия меню при помощи бургера
    let burger = document.getElementById("burger")
    let closeMenu = document.getElementById("close-menu")
    let menu = document.getElementById("menu")

    if (burger && menu && closeMenu) {


        burger.addEventListener("click", function (event) {
            event.stopPropagation()
            menu.classList.add("_active")
        })

        closeMenu.addEventListener("click", function (event) {
            event.stopPropagation()
            console.log('close ay');
            menu.classList.remove("_active")
        })
    }
    // ################################

    //фиксация меня при скроле
    let header = document.querySelector(".header")
    let category = document.querySelector(".category")


    if (header && category) {
        window.addEventListener('scroll', function () {
            //расстояние от верха страницы до верха элемента category
            let categoryOfTop = category.offsetTop;
            // высота элемента category
            let categoryHeight = category.offsetHeight;


            if (window.scrollY > categoryOfTop + categoryHeight) {
                header.classList.add("_active")
                category.classList.add("_active")

            } else {
                header.classList.remove("_active")
                category.classList.remove("_active")
            }
        })

    }



    //подключаем Swiper к mainslider
    let mainslider = document.getElementById("mainslider")

    if (mainslider) {
        var mySwiperMainslider = new Swiper(mainslider, {
            pagination: {
                el: '.mainslider__swiper-pagination',
            },
        });
    }
    // ################################

    //подключаем Swiper к section
    let sectionsliders = document.querySelectorAll(".section__items")

    if (sectionsliders) {
        console.log('innn');

        for (let el of sectionsliders) {
            let paginationContainer = el.querySelector(".section__pagination")
            var mySwiperSection = new Swiper(el, {
                slidesPerView: 2,
                spaceBetween: 15,
                pagination: {
                    el: paginationContainer,
                },
                breakpoints: {
                    // when window width is >= 475px
                    475: {
                        slidesPerView: 3,
                        // spaceBetween: 20
                    },
                    // when window width is >= 480px
                    775: {
                        slidesPerView: 4,
                        spaceBetween: 30
                    },
                    // // when window width is >= 640px
                    // 640: {
                    //   slidesPerView: 4,
                    //   spaceBetween: 40
                    // }
                }
            });

        }
    }
    // ################################

    //подключаем Swiper к category
    let categorySlider = document.getElementById("category")

    if (categorySlider) {
        var mySwiperCategory = new Swiper(categorySlider, {

            slidesPerView: "auto",
            simulateTouch: true,
            touchRatio: 0.90,
            resistance: true,
            resistanceRatio: 0,
            spaceBetween: 30,






        });
    }
    // ################################


    let response = await fetch("http://localhost:3000/catalog.json");

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let json = await response.json();
    } else {
        alert("Ошибка HTTP: " + response.status);
    }




}
