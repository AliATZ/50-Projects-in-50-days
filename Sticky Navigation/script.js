const navs = document.querySelector('.nav');

window.addEventListener('scroll', fixedNav)

function fixedNav() {
    if (window.scrollY> navs.offsetHeight + 150) {
        navs.classList.add('active');
    } else{
        navs.classList.remove('active');
    }

}