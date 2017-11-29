const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');
const tagChildMovList = 'ul';  //
const movSection = $$('.movie-section');
const btnGroup = $$('.search-film__btn-group');

const templateCardMovie = '<li class="movie-list__item">\
                <div class="rating"><%=vote_average%></div>\
                <div class="poster">\
                    <img src="<%=urlPoster%>" alt="" class="poster">\
                </div>\
                <h2 class="film-name"><%=filmName%></h2>\
                <div class="overview"><%=description%> </div>\
                <div clas="date"><%=releaseDate%></div>\
            </li>';

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    if (inputSearch.value === '') return;
    const url = getUrlByInput(inputSearch.value);
    renderGroupFilms(url);
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
    renderGroupFilms(url);
});

const getTemplateMovListCard = (listItem) => {
    const templateObj = {
        vote_average: listItem.getVoteAverage(),
        urlPoster: listItem.getUrlPoster(300),
        filmName: listItem.getTitle(),
        description: listItem.getOvetview(100),
        releaseDate: listItem.getReleaseDate()
    };
    return _.template(templateCardMovie)(templateObj);
};
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

const createDOMList = (template, tagReplaceChild) => new DOMParser()
    .parseFromString(template, 'text/html')
    .firstChild
    .querySelector(tagReplaceChild);


const renderCardsMov = (arrFilms) => {
    let templateMovList = '<' + tagChildMovList + '>';  //open tag template

    arrFilms.forEach(film => {
        templateMovList += getTemplateMovListCard(film);
    });

    templateMovList += '</' + tagChildMovList + '>'; //close tag template
    const movListDOM = createDOMList(templateMovList, tagChildMovList);

    renderTemplate(movSection, movListDOM);
};

const renderGroupFilms = (url) => {
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
