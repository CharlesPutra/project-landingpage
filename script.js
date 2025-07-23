 window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 600) {
            navbar.classList.remove("navbar-transparent");
        } else {
            navbar.classList.add("navbar-transparent");
        }
    });