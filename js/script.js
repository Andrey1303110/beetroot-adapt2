function addColorToNavBar() {
    let nav = document.querySelector("nav");
    let windowWidth = window.innerWidth;
    if (windowWidth > 854) {
        window.addEventListener("scroll", function () {
            let scrollPos = window.scrollY;
            console.log(scrollPos);
            if (scrollPos > 1, scrollPos < 947) {
                nav.classList.add('scrolledToHome');
                nav.classList.remove('scrolledToAbout', 'scrolledToServices', 'scrolledToGallery', 'scrolledToSubscribe', 'scrolledToBlog', 'scrolledToContacts');
            }
            else if (scrollPos < 1647) {
                nav.classList.add('scrolledToAbout');
                nav.classList.remove('scrolledToHome', 'scrolledToServices', 'scrolledToGallery', 'scrolledToSubscribe', 'scrolledToBlog', 'scrolledToContacts');
            }
            else if (scrollPos < 2377) {
                nav.classList.add('scrolledToServices');
                nav.classList.remove('scrolledToHome', 'scrolledToAbout', 'scrolledToGallery', 'scrolledToSubscribe', 'scrolledToBlog', 'scrolledToContacts');
            }
            else if (scrollPos < 3577) {
                nav.classList.add('scrolledToGallery');
                nav.classList.remove('scrolledToHome', 'scrolledToAbout', 'scrolledToServices', 'scrolledToSubscribe', 'scrolledToBlog', 'scrolledToContacts');
            }
            else if (scrollPos < 4097) {
                nav.classList.add('scrolledToSubscribe');
                nav.classList.remove('scrolledToHome', 'scrolledToAbout', 'scrolledToServices', 'scrolledToGallery', 'scrolledToBlog', 'scrolledToContacts');
            }
            else if (scrollPos < 4796) {
                nav.classList.add('scrolledToBlog');
                nav.classList.remove('scrolledToHome', 'scrolledToAbout', 'scrolledToServices', 'scrolledToGallery', 'scrolledToSubscribe', 'scrolledToContacts');
            }
            else if (scrollPos > 4796) {
                nav.classList.add('scrolledToContacts');
                nav.classList.remove('scrolledToHome', 'scrolledToAbout', 'scrolledToServices', 'scrolledToGallery', 'scrolledToSubscribe', 'scrolledToBlog');
            }
            else () => nav.classList.add('scrolledStand');
        });
    }
}

addColorToNavBar();