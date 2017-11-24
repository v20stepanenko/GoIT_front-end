const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value === '') return;
    startRenderQuery({query: inputSearch.value});

});


const startRenderQuery  = function (query) {
    fetchQuery(query).then(data => console.log(data));
};

