class Film{
    constructor({title, popularity, vote_average, poster_path, overview, releaseData}){
        this._title = title;
        this._overview = overview;
        this._popularity = popularity;
        this._voteAverage = vote_average;
        this._posterPath = poster_path;
        this._releaseDate = releaseData
    }

    static get enterpointImg(){
        return 'https://image.tmdb.org/t/p';
    }

    getTitle(){
        return this._title;
    }

    getPopularity(){
        return this._popularity;
    }

    getVoteAverage(){
        return this._voteAverage;
    }

    getOvetview(maxLength){
        let overview = this._overview;
        if(overview.length > maxLength){
            overview = overview.slice(0, maxLength-3)+'...';
        }
        return overview;
    }
    getUrlPoster(weidth){
        return `${Film.enterpointImg}/w${weidth}${this._posterPath}`;
    }
    getReleaseData(){
        return this._releaseDate;
    }
}