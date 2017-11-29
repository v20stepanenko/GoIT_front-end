const templateCardMovie = '<li class="movie-list__item">\
                <div class="rating"><%=vote_average%></div>\
                <div class="poster">\
                    <img src="<%=urlPoster%>" alt="" class="poster">\
                </div>\
                <h2 class="film-name"><%=filmName%></h2>\
                <div class="overview"><%=description%> </div>\
                <div clas="date"><%=releaseDate%></div>\
            </li>';


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

const createDOMList = (template, tagNode) => new DOMParser()
    .parseFromString(template, 'text/html')
    .firstChild
    .querySelector(tagNode);