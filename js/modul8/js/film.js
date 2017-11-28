class Film{
    constructor({title, popularity, vote_average, poster_path, overview}){
        this._title = title;
        this._overview = overview;
        this._popularity = popularity;
        this._vote_average = vote_average;
        this._poster_path = poster_path;
    }

    static enterpointImg(){
        return 'https://image.tmdb.org/t/p/';
    }

    getTitle(){
        return this._title;
    }

    getPopularity(){
        return this._popularity;
    }

    getVoteAverage(){
        return this._vote_average;
    }

    getOvetview(maxLength){
        let overview = this._overview;
        if(overview.length > maxLength){
            overview = overview.slice(0, 97)+'...';
        }
        return overview;
    }
    getUrlPoster(weidth){
        return `${Film.enterpointImg}${weidth}${this._poster_path}`;
    }
}