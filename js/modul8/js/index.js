const $$ = (selector) => document.querySelector(selector);
const formSearch = $$('.search-film');
const inputSearch = $$('.search-film__input');
const tagChildMovList = 'ul';  //
const movSection = document.querySelector('.movie-section');
const btnGroup = document.querySelector('.search-film__btn-group');

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

btnGroup.addEventListener('click', (event) =>{
    console.log(categoriesFilm.getUrl(event.target.value));
    startRenderQuery(categoriesFilm.getUrl(event.target.value))
});

const createTemplateMovListItem = (listItem) =>{
    const templateObj = {
        vote_average: listItem.getVoteAverage(),
        urlPoster: listItem.getUrlPoster(300),
        filmName: listItem.getTitle(),
        description: listItem.getOvetview(100),
        releaseDate: 'non'
        };
    return _.template(templateCardMovie)(templateObj);
};
const renderTemplate = (parent, childrenDOM) => {
    const removeElem = parent.querySelector(childrenDOM.nodeName);
    if(removeElem){
        removeElem.remove();
    }
    parent.appendChild(childrenDOM);
};

const createDOMList = (template, tagReplaceChild) => new DOMParser()
        .parseFromString(template, 'text/html')
        .firstChild
        .querySelector(tagReplaceChild);

const startRenderQuery = query => {
    const getArrFilmsPromise = gerResultQueryPromise(query).then(result => {
        console.log(result);
        const arrFilms = result.map(item =>{
            return new Film(item);
        });
        arrFilms.sort((filmA, filmB)=>{                             //Sorting movies for rendering by popularity

            if(filmB.getPopularity() > filmA.getPopularity()){
                return 1;
            }else{
                return -1;
            }
        });

        return arrFilms;
    });
    const renderFilmsPromise = getArrFilmsPromise.then(arrFilms => {
        let templateMovList = '<' + tagChildMovList + '>';  //open tag template

        arrFilms.forEach(film =>{
           templateMovList += createTemplateMovListItem(film);
        });

        templateMovList += '</' + tagChildMovList + '>'; //close tag template
        const movListDOM = createDOMList(templateMovList, tagChildMovList);

        renderTemplate(movSection, movListDOM);
    });
};

