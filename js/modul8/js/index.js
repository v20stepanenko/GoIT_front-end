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
    startRenderQuery(url);
    inputSearch.value = '';                               //clear input
});

btnGroup.addEventListener('click', (event) => {
    switch (event.target.value) {
        case('popular'): {
            renderGroupFilms(categoriesFilm.popular);
            break;
        }
        case('top_rated'): {
            renderGroupFilms(categoriesFilm.topRated);
            break;
        }
        case('latest'): {
            renderGroupFilms(categoriesFilm.latest);
            break;
        }
    }
});

const createTemplateMovListItem = (listItem) => {
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
        templateMovList += createTemplateMovListItem(film);
    });

    templateMovList += '</' + tagChildMovList + '>'; //close tag template
    const movListDOM = createDOMList(templateMovList, tagChildMovList);

    renderTemplate(movSection, movListDOM);
};


const startRenderQuery = query => {

    const getResultPromise = gerQueryPromise(query)
        .then(jsonQuery => {
            return jsonQuery.results;
        }).catch(err => console.error(err));

    const getArrFilmsPromise = getResultPromise.then(result => {

        console.log(result);
        const arrFilms = result.map(item => {
            return new Film(item);
        });
        console.log(arrFilms);
        sortedFilmByPopulariuty(arrFilms);
        return arrFilms;
    });
    const renderFilmsPromise = getArrFilmsPromise.then(arrFilms => {
        renderCardsMov(arrFilms);
    });
};

const renderGroupFilms = (categoryFilm) => {
    const latestFilms = categoryFilm == categoriesFilm.latest;

    let url = categoriesFilm.getUrl(categoryFilm);

    let getResultPromise = gerQueryPromise(url)
        .then(data => {
            if(latestFilms) return data;
            return data.results;
        }).catch(err => console.error(err));

    if (latestFilms){
        getResultPromise = getResultPromise.then(data => {
            const newArr = [data];
            return newArr
        });
    }

    const getArrFilmsPromise = getResultPromise.then(result => {
        const arrFilms = result.map(item => {
            const newItem = {
                ...item,
                title: item.name,
                release_date: item.first_air_date
            };
            return new Film(newItem);
        });
        sortedFilmByPopulariuty(arrFilms);
        return arrFilms;
    });

    const renderFilmsPromise = getArrFilmsPromise.then(arrFilms => {
        renderCardsMov(arrFilms);
    });
};
