function addMarginOnHover(navSelector, mainSelector) {
    const nav = document.querySelector(navSelector);
    const main = document.querySelector(mainSelector);

    nav.addEventListener('mouseover', () => {
        if (window.innerWidth > 991) {
            main.style.marginLeft = '160px';
        }
    });

    nav.addEventListener('mouseout', () => {
        if (window.innerWidth > 991) {
            main.style.margin = '0px';
        }
    });
}

addMarginOnHover('nav', 'main');

export default addMarginOnHover;