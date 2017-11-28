const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value === '') return;
    startRenderQuery({query: inputSearch.value});
});

const templateMovie = '<li class="movie-list__item">\
                <div class="rating"><%=vote_average%></div>\
                <div class="poster">\
                    <img src="<%=urlPoster%>" alt="" class="poster">\
                </div>\
                <h2 class="film-name"><%=filmName%></h2>\
                <div class="overview"> </div>\
            </li>';
let test = document.querySelector('#test');
console.log(_.template(templateMovie)({
    vote_average: 5, urlPoster: 'https://image.tmdb.org/t/p/w300/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg'
    filmName: 'Test'
}));;

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
