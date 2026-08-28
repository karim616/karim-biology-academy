/* =========================================
   KARIM BIOLOGY ACADEMY
   INTERACTION SYSTEM
========================================= */


/* =========================================
   PARTICLES
========================================= */

const particleContainer =
    document.getElementById("particles");

if (particleContainer) {

    for (let i = 0; i < 55; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            8 + Math.random() * 15 + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.opacity =
            0.1 + Math.random() * 0.5;

        particleContainer.appendChild(
            particle
        );

    }

}


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");


let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;

let cursorX =
    mouseX;

let cursorY =
    mouseY;


document.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        if (cursorDot) {

            cursorDot.style.left =
                mouseX + "px";

            cursorDot.style.top =
                mouseY + "px";

        }

    }
);


function animateCursor() {

    if (cursor) {

        cursorX +=
            (mouseX - cursorX) * 0.18;

        cursorY +=
            (mouseY - cursorY) * 0.18;


        cursor.style.left =
            cursorX + "px";

        cursor.style.top =
            cursorY + "px";

    }


    requestAnimationFrame(
        animateCursor
    );

}


animateCursor();


/* =========================================
   CURSOR HOVER
========================================= */

const interactiveElements =
    document.querySelectorAll(
        "a, button, .course-card, .feature-card, .resource-card"
    );


interactiveElements.forEach(
    function (element) {

        element.addEventListener(
            "mouseenter",
            function () {

                if (!cursor) return;

                cursor.style.width =
                    "58px";

                cursor.style.height =
                    "58px";

                cursor.style.borderColor =
                    "#9cff8d";

                cursor.style.boxShadow =
                    "0 0 30px rgba(98,255,114,0.7)";

            }
        );


        element.addEventListener(
            "mouseleave",
            function () {

                if (!cursor) return;

                cursor.style.width =
                    "36px";

                cursor.style.height =
                    "36px";

                cursor.style.borderColor =
                    "#62ff72";

                cursor.style.boxShadow =
                    "0 0 12px rgba(98,255,114,0.45)";

            }
        );

    }
);


/* =========================================
   BIOLOGY CORE PARALLAX
========================================= */

const biologyCore =
    document.querySelector(
        ".biology-core"
    );


document.addEventListener(
    "mousemove",
    function (event) {

        if (!biologyCore) return;


        const x =
            (
                event.clientX /
                window.innerWidth -
                0.5
            ) * 20;


        const y =
            (
                event.clientY /
                window.innerHeight -
                0.5
            ) * 20;


        biologyCore.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .course-card, .resource-card, .section-heading, .cta, .lesson-video"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                "translateY(0)";

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            element.style.opacity =
                "0";

            element.style.transform =
                "translateY(40px)";

            element.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

            observer.observe(
                element
            );

        }
    );

}


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar =
    document.querySelector(
        ".navbar"
    );


window.addEventListener(
    "scroll",
    function () {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(3, 7, 5, 0.94)";

        }

        else {

            navbar.style.background =
                "rgba(3, 7, 5, 0.72)";

        }

    }
);


/* =========================================
   BUTTON RIPPLE
========================================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .login-btn"
    );


buttons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.style.position =
                    "absolute";

                ripple.style.width =
                    "10px";

                ripple.style.height =
                    "10px";

                ripple.style.borderRadius =
                    "50%";

                ripple.style.background =
                    "rgba(255,255,255,0.4)";

                ripple.style.pointerEvents =
                    "none";

                ripple.style.transform =
                    "translate(-50%, -50%)";

                ripple.style.left =
                    event.clientX -
                    button.getBoundingClientRect().left +
                    "px";

                ripple.style.top =
                    event.clientY -
                    button.getBoundingClientRect().top +
                    "px";

                ripple.style.animation =
                    "rippleEffect 0.6s ease-out forwards";


                button.style.position =
                    "relative";

                button.style.overflow =
                    "hidden";


                button.appendChild(
                    ripple
                );


                setTimeout(
                    function () {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    }
);


/* =========================================
   RIPPLE ANIMATION
========================================= */

const rippleStyle =
    document.createElement("style");


rippleStyle.textContent = `

@keyframes rippleEffect {

    from {

        width: 10px;
        height: 10px;
        opacity: 0.7;

    }

    to {

        width: 350px;
        height: 350px;
        opacity: 0;

    }

}

`;


document.head.appendChild(
    rippleStyle
);


/* =========================================
   IMPORTANT
   COURSE PURCHASE NAVIGATION IS HANDLED
   DIRECTLY BY HTML LINKS.

   Example:

   account.html?course=olevel&price=18000

   No buyCourse() function is required.
========================================= */