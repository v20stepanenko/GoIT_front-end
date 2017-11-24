const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value !== ''){
        startApp(inputSearch.value);
    }
});


const startApp  = function (query) {
    fetchQuery(query)
        .then();
};

