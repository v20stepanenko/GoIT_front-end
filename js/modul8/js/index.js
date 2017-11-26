const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value === '') return;
    startRenderQuery({query: inputSearch.value});
});


const startRenderQuery  = function (query) {
    const resultPromise = gerPromiseResultQuery(query);
    resultPromise.then(data => {
        console.log(data);
    })
};

