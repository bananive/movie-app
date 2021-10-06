function MoviePoster(props) {
    const srcOfImage = 'https://image.tmdb.org/t/p/w342' + props.poster;
    if (props.poster) {
        return <img src={srcOfImage} alt=""/>
    } else {
        return <div className="poster">Poster</div>
    }
}

function Movie(props) {
    return (
        <div className="card">
            
            {/* <img src={srcOfImage} alt=""/> */}
            <MoviePoster poster={props.movieobj.poster_path} />
            <h3 className="movie-title">{props.movieobj.title}</h3>
            <p className="movie-overview">{props.movieobj.overview}</p>
        </div>
    );
}

export default Movie;