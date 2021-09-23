function addColorToNavBar() {
    let arrSmallScreen = [0, 947, 1647, 2357, 3365, 3847, 4437];
    let arrMiddleScreen = [0, 947, 1647, 2377, 3577, 4097, 4797];
    let arrMiddlePlusScreen = [0, 947, 1647, 2377, 3747, 4227, 5097];
    let arrHDScreen = [0, 937, 2037, 2987, 4937, 5557, 6557];
    let nav = document.querySelector("nav");
    let windowWidth = window.innerWidth;
    if (windowWidth > 854 && windowWidth <= 1151) {
        window.addEventListener("scroll", function () {
            let scrollP = window.scrollY;
            let scrollPos = scrollP.toFixed(0);
            nav.classList = ('');
            if (scrollPos < arrSmallScreen[1]) {
                nav.classList.remove();
                nav.classList.add('scrolledToHome');
            }
            else if (scrollPos < arrSmallScreen[2]) {
                nav.classList.remove();
                nav.classList.add('scrolledToAbout');
            }
            else if (scrollPos < arrSmallScreen[3]) {
                nav.classList.remove();
                nav.classList.add('scrolledToServices');
            }
            else if (scrollPos < arrSmallScreen[4]) {
                nav.classList.remove();
                nav.classList.add('scrolledToGallery');
            }
            else if (scrollPos < arrSmallScreen[5]) {
                nav.classList.remove();
                nav.classList.add('scrolledToSubscribe');
            }
            else if (scrollPos < arrSmallScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToBlog');
            }
            else if (scrollPos >= arrSmallScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToContacts');
            }
        });
    }
    if (windowWidth > 1151 && windowWidth <= 1440) {
        window.addEventListener("scroll", function () {
            let scrollP = window.scrollY;
            let scrollPos = scrollP.toFixed(0);
            nav.classList = ('');
            if (scrollPos < arrMiddleScreen[1]) {
                nav.classList.remove();
                nav.classList.add('scrolledToHome');
            }
            else if (scrollPos < arrMiddleScreen[2]) {
                nav.classList.remove();
                nav.classList.add('scrolledToAbout');
            }
            else if (scrollPos < arrMiddleScreen[3]) {
                nav.classList.remove();
                nav.classList.add('scrolledToServices');
            }
            else if (scrollPos < arrMiddleScreen[4]) {
                nav.classList.remove();
                nav.classList.add('scrolledToGallery');
            }
            else if (scrollPos < arrMiddleScreen[5]) {
                nav.classList.remove();
                nav.classList.add('scrolledToSubscribe');
            }
            else if (scrollPos < arrMiddleScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToBlog');
            }
            else if (scrollPos >= arrMiddleScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToContacts');
            }
        });
    }
    if (windowWidth > 1440 && windowWidth <= 1681) {
        window.addEventListener("scroll", function () {
            let scrollP = window.scrollY;
            let scrollPos = scrollP.toFixed(0);
            nav.classList = ('');
            if (scrollPos < arrMiddlePlusScreen[1]) {
                nav.classList.remove();
                nav.classList.add('scrolledToHome');
            }
            else if (scrollPos < arrMiddlePlusScreen[2]) {
                nav.classList.remove();
                nav.classList.add('scrolledToAbout');
            }
            else if (scrollPos < arrMiddlePlusScreen[3]) {
                nav.classList.remove();
                nav.classList.add('scrolledToServices');
            }
            else if (scrollPos < arrMiddlePlusScreen[4]) {
                nav.classList.remove();
                nav.classList.add('scrolledToGallery');
            }
            else if (scrollPos < arrMiddlePlusScreen[5]) {
                nav.classList.remove();
                nav.classList.add('scrolledToSubscribe');
            }
            else if (scrollPos < arrMiddlePlusScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToBlog');
            }
            else if (scrollPos >= arrMiddlePlusScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToContacts');
            }
        });
    }
    if (windowWidth > 1681) {
        window.addEventListener("scroll", function () {
            let scrollP = window.scrollY;
            let scrollPos = scrollP.toFixed(0);
            nav.classList = ('');
            if (scrollPos < arrHDScreen[1]) {
                nav.classList.remove();
                nav.classList.add('scrolledToHome');
                console.log(scrollPos);
            }
            else if (scrollPos < arrHDScreen[2]) {
                nav.classList.remove();
                nav.classList.add('scrolledToAbout');
                console.log(scrollPos);
            }
            else if (scrollPos < arrHDScreen[3]) {
                nav.classList.remove();
                nav.classList.add('scrolledToServices');
                console.log(scrollPos);
            }
            else if (scrollPos < arrHDScreen[4]) {
                nav.classList.remove();
                nav.classList.add('scrolledToGallery');
                console.log(scrollPos);
            }
            else if (scrollPos < arrHDScreen[5]) {
                nav.classList.remove();
                nav.classList.add('scrolledToSubscribe');
                console.log(scrollPos);
            }
            else if (scrollPos < arrHDScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToBlog');
                console.log(scrollPos);
            }
            else if (scrollPos >= arrHDScreen[6]) {
                nav.classList.remove();
                nav.classList.add('scrolledToContacts');
                console.log(scrollPos);
            }
        });
    }
}

addColorToNavBar();

let el = $('#themeSwitch');

$(el).change(function(){
    if (this.checked) {
        document.getElementById('css_path').setAttribute('href', './css/blackstyle.css');
    } else {
        document.getElementById('css_path').setAttribute('href', './css/style.css');
    }
})
