function addMarginOnHover(navSelector, mainSelector) {
    const nav = document.querySelector(navSelector);
    const main = document.querySelector(mainSelector);

    nav.addEventListener('mouseover', () => {
        main.style.marginLeft = '100px';
    });

    nav.addEventListener('mouseout', () => {
        main.style.marginLeft = '0px';
    });
}

export default addMarginOnHover;