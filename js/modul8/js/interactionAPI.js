const enterPoint = 'https://api.themoviedb.org/3';
const keyAPI = 'f24a0fd18f52218851075901c5a108a0';
//https://api.themoviedb.org/3/search/movie?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&query=Hulk
const getUrlByInput = (query) => {
    if (query !== '') {
        return `${enterPoint}/search/movie?api_key=${keyAPI}&language=en-US&query=${query}&page=1&include_adult=false`;
    }
};
// https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1

const categoriesFilm = {
    popular: 'popular',
    topRated: 'top_rated',
    latest: 'latest',
    getUrl: categories => `${enterPoint}/tv/${categories}?api_key=${keyAPI}&language=en-US&page=1`
};


const gerResultQueryPromise = (url) => {
    return fetch(url)
        .then(response =>
            response.json())
        .then(jsonQuery => jsonQuery.results)
};

