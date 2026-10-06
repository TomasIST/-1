// ============================================
// МОБИЛЬНОЕ МЕНЮ
// ============================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {

    nav.classList.toggle("active");

});


// Закрываем меню после выбора пункта

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("active");

    });

});


// ============================================
// СМЕНА ТЕМЫ
// ============================================

const themeBtn = document.getElementById("themeBtn");


// Проверяем сохранённую тему

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeBtn.textContent = "☀️";

} else {

    themeBtn.textContent = "🌙";

}


// Переключение темы

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");


    if (
        document.body.classList.contains("light-theme")
    ) {

        themeBtn.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeBtn.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


// ============================================
// ФОРМА
// ============================================

const form =
    document.getElementById(
        "registrationForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


form.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value;

        const phone =
            document.getElementById(
                "phone"
            ).value;

        const email =
            document.getElementById(
                "email"
            ).value;

        const course =
            document.getElementById(
                "course"
            ).value;


        if (
            name === "" ||
            phone === "" ||
            email === "" ||
            course === ""
        ) {

            formMessage.textContent =
                "⚠ Заполни все обязательные поля!";

            formMessage.style.color =
                "#ff00cc";

            return;

        }


        formMessage.textContent =
            "✓ Заявка отправлена! Добро пожаловать в AnimeCode!";

        formMessage.style.color =
            "#00eaff";


        // Эффект успешной отправки

        form.style.boxShadow =
            "0 0 20px #00eaff, 0 0 60px #00eaff";


        setTimeout(function () {

            form.style.boxShadow = "";

        }, 1000);


        form.reset();

    }
);


// ============================================
// КНОПКИ «ПОДРОБНЕЕ»
// ============================================

const detailButtons =
    document.querySelectorAll(
        ".details-btn"
    );


detailButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const card =
                    this.closest(
                        ".course-card"
                    );

                const courseName =
                    card.querySelector(
                        "h3"
                    ).textContent;


                alert(
                    "⚡ КУРС: " +
                    courseName +
                    "\n\n" +
                    "Чтобы записаться, заполни форму регистрации."
                );


                document
                    .getElementById("contact")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }
);


// ============================================
// АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТОЧЕК
// ============================================

const animatedElements =
    document.querySelectorAll(
        ".course-card, .advantage, .review-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.15
        }
    );


animatedElements.forEach(
    function (element) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(40px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    }
);


// ============================================
// ДОБАВЛЯЕМ КЛАСС SHOW
// ============================================

const style =
    document.createElement("style");

style.textContent = `

    .course-card.show,
    .advantage.show,
    .review-card.show {

        opacity: 1 !important;

        transform:
            translateY(0) !important;

    }

`;

document.head.appendChild(style);


// ============================================
// ЭФФЕКТ НЕОНА ПРИ НАВЕДЕНИИ
// ============================================

const neonButtons =
    document.querySelectorAll(
        ".neon-btn, .outline-btn, .details-btn"
    );


neonButtons.forEach(
    function (button) {

        button.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;


                button.style.setProperty(
                    "--mouse-x",
                    x + "px"
                );

                button.style.setProperty(
                    "--mouse-y",
                    y + "px"
                );

            }
        );

    }
);


// ============================================
// ПАСХАЛКА — KONAMI STYLE
// ============================================

let secretCode = [];

const secretSequence = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight"
];


document.addEventListener(
    "keydown",
    function (event) {

        secretCode.push(
            event.key
        );


        if (
            secretCode.length >
            secretSequence.length
        ) {

            secretCode.shift();

        }


        if (
            JSON.stringify(secretCode) ===
            JSON.stringify(secretSequence)
        ) {

            document.body.style.filter =
                "hue-rotate(180deg)";

            alert(
                "⚡ SECRET MODE ACTIVATED! ⚡"
            );

            setTimeout(function () {

                document.body.style.filter =
                    "";

            }, 3000);

        }

    }
);
