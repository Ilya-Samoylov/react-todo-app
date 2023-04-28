const toggleSwitch = document.querySelector('.toggle-switch');
const htmlEl = document.documentElement;


function themeSwitcher() {
    toggleSwitch.addEventListener('click', () => {
        if (htmlEl.hasAttribute('data-theme')) {
            htmlEl.removeAttribute('data-theme')
            localStorage.removeItem('theme', 'dark')
        } else {
            htmlEl.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    })

    if (localStorage.getItem('theme') !== null) {
        htmlEl.setAttribute('data-theme', 'dark')
    }

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

    if (prefersDarkScheme.matches) {
        htmllEl.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        htmllEl.removeAttribute('data-theme');
        localStorage.removeItem('theme', 'dark');
    }
}

themeSwitcher();

export default themeSwitcher;

