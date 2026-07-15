/* ==========================================
   PREMIUM PORTFOLIO V2 - FINAL JS
========================================== */

// ======================
// Typing Effect
// ======================

const typing = document.querySelector(".typing");

if (typing) {
    const words = [
        "AWS Cloud Engineer",
        "DevOps Engineer",
        "Linux Administrator",
        "Docker Enthusiast"
    ];

    let word = 0;
    let letter = 0;
    let deleting = false;

    function type() {

        let current = words[word];

        if (!deleting) {

            typing.textContent = current.substring(0, letter++);
            if (letter > current.length) {
                deleting = true;
                setTimeout(type, 1500);
                return;
            }

        } else {

            typing.textContent = current.substring(0, letter--);

            if (letter < 0) {
                deleting = false;
                word = (word + 1) % words.length;
            }

        }

        setTimeout(type, deleting ? 60 : 100);

    }

    type();
}


// ======================
// Scroll Reveal
// ======================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});


// ======================
// Active Navbar
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ======================
// Sticky Navbar
// ======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(5,8,22,.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(5,8,22,.65)";
        header.style.boxShadow = "none";

    }

});


// ======================
// Scroll Top
// ======================

const topBtn = document.querySelector(".scroll-top");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("active");

        } else {

            topBtn.classList.remove("active");

        }

    });

    topBtn.onclick = () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

}


// ======================
// Contact Form
// ======================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thanks! Your message has been received.");

        form.reset();

    });

}


// ======================
// Smooth Anchor Scroll
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});


// ======================

console.log("Portfolio Loaded Successfully 🚀");