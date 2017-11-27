const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value === '') return;
    startRenderQuery({query: inputSearch.value});
});


const startRenderQuery = function (query) {
    const getArrFilmsPromise = gerPromiseResultQuery(query).then(result => {
        console.log(result);
        const arrFilms = result.map(item =>{
            return new Film(item);
        });
        arrFilms.sort((filmA, filmB)=>{
            if(filmB.getPopularity() > filmA.getPopularity()){
                return 1;
            }else{
                return -1;
            }
        });

        return arrFilms;
    });
    const renderFilmsPromise = getArrFilmsPromise.then();
};
