const themeSwitcherBtn = document.getElementById('switcher');

const themeSwitch = () => {
    if (themeSwitcherBtn.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

themeSwitcherBtn.addEventListener('click', themeSwitch);