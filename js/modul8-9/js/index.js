const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');
const tagChildMovList = 'ul';  //
const movSection = $$('.movie-section');
const btnGroup = $$('.search-film__btn-group');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value === '') return;
    const url = getUrlByInput(inputSearch.value);
    renderFetch(url);
    inputSearch.value = '';                               //clear input
});

btnGroup.addEventListener('click', (event) => {
    let categories = '';
    switch (event.target.value) {
        case('popular'): {
            categories = categoriesFilm.popular;
            break;
        }
        case('top_rated'): {
            categories = categoriesFilm.topRated;
            break;
        }
        case('latest'): {
            categories = categoriesFilm.latest;
            break;
        }
    }
    const url  = categoriesFilm.getUrl(categories);
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
    arrFilms.sort((filmA, filmB) => {                             //Sorting movies for rendering by popularity
        if (filmB.getPopularity() > filmA.getPopularity()) {
            return 1;
        } else {
            return -1;
        }
    });
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
    const latestFilms = url == categoriesFilm.getUrl(categoriesFilm.latest);

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

    const renderFilmsPromise = getArrFilmsPromise.then(arrFilms => {
        renderCardsMov(arrFilms);
    });
};
