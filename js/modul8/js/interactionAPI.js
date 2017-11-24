const endpoint = 'https://api.themoviedb.org/3';
const keyAPI = 'f24a0fd18f52218851075901c5a108a0';
//https://api.themoviedb.org/3/search/movie?api_key=f24a0fd18f52218851075901c5a108a0&language=en-US&query=Hulk
const getUrl = ({query = '',}) => {
    if (query !== '') {
        return `${endpoint}/search/movie?api_key=${keyAPI}&language=en-US&query=${query}&page=1&include_adult=false`;
    }
};

const fetchQuery = (query) => {
   return fetch(getUrl(query)).then(data => data.json());
};

