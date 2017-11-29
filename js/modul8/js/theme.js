
const urlDarkTheme = 'style/dark-theme.css';
const urlLightTheme = 'style/light-theme.css';
const linkTheme = document.querySelector('#theme');
const stateThemeBtnGroup  = document.querySelector('.state-theme');

const localTheme = localStorage.getItem('theme');

const putTheme = (style) => {
    switch(style){
        case('light'):
            linkTheme.href = urlLightTheme;
            localStorage.setItem('theme', 'light');
            break;
        case('dark'):
            linkTheme.href = urlDarkTheme;
            localStorage.setItem('theme', 'dark');
            break;
    }
};

if(localTheme){
    putTheme(localTheme);
}


stateThemeBtnGroup.addEventListener('click', (event) =>{
    const theme = event.target.dataset.theme;
    if(theme){
        putTheme(theme)
    }
});

