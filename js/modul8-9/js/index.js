const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');
const movSection = $$('.movie-section');
const btnGroupMovies = $$('.search-film__btn-group');
const tagChildMovList = 'ul';  //

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value === '') return;
    const url = getUrlByInput(inputSearch.value);
    renderFetch(url);
    inputSearch.value = '';                               //clear input
});

const getCatigoriesByTarget = (target) => {
    switch (target.value) {
        case('popular'): {
            return categoriesFilm.popular;
        }
        case('top_rated'): {
            return categoriesFilm.topRated;
        }
        case('latest'): {
            return categoriesFilm.latest;
        }
    }

};

btnGroupMovies.addEventListener('click', (event) => {
    let categories = getCatigoriesByTarget(event.target);
    const url = categoriesFilm.getUrl(categories);
    renderFetch(url);
});

const renderTemplate = (parent, childrenDOM) => {
    const removeElem = parent.querySelector(childrenDOM.nodeName);
    if (removeElem) {
        removeElem.remove();
    }
    parent.appendChild(childrenDOM);
};

const sortedFilmByPopulariuty = (arrFilms) => {
    arrFilms.sort((filmA, filmB) =>                              //Sorting movies for rendering by popularity
        filmB.getPopularity() > filmA.getPopularity() ? 1 : -1
    );
};

const renderCardsMov = (arrFilms) => {
    let templateMovList = '<' + tagChildMovList + '>';  //open tag template

    arrFilms.forEach(film => {
        templateMovList += getTemplateMovListCard(film);
    });

    templateMovList += '</' + tagChildMovList + '>'; //close tag template
    const movListDOM = createDOMList(templateMovList, tagChildMovList);

    renderTemplate(movSection, movListDOM);
};

const renderFetch = (url) => {

    const latestFilms = url === categoriesFilm.getUrl(categoriesFilm.latest);

    let getResultPromise = gerQueryPromise(url)
        .then(data => {
            if (latestFilms) return data;
            return data.results;
        }).catch(err => console.error(err));

    if (latestFilms) {
        getResultPromise = getResultPromise.then(data => {
            const newArr = [data];
            return newArr
        });
    }

    const getArrFilmsPromise = getResultPromise.then(result => {
        const arrFilms = result.map(item => {
            const constructObjFilm = {
                ...item,
            };
            if (item.name && item.first_air_date) {
                constructObjFilm.title = item.name;
                constructObjFilm.release_date = item.first_air_date
            }
            return new Film(constructObjFilm);
        });
        sortedFilmByPopulariuty(arrFilms);
        return arrFilms;
    });

    getArrFilmsPromise.then(arrFilms => {
        renderCardsMov(arrFilms);
    });
};
