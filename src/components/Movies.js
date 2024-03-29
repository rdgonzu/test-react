import React, {Component} from "react";
import Movie from "./Movie";

class Movies extends Component {

    state = {}

    changeTitle = () => {

        var {movies} = this.state;
        movies[0].title = 'Movie 1 edited';

        this.setState({
            movies
        });

    }

    setAsFavorite = (movie) => {
        this.setState({
            favorite: movie
        });
    }

    componentWillMount () {

        console.log('Component is going to be mounted.');

        this.setState({
            movies: [
                {title: 'Movie 1', image: 'https://via.placeholder.com/150x150'},
                {title: 'Movie 2', image: 'https://via.placeholder.com/150x150'},
                {title: 'Movie 3', image: 'https://via.placeholder.com/150x150'},
                {title: 'Movie 4', image: 'https://via.placeholder.com/150x150'},
                {title: 'Movie 5', image: 'https://via.placeholder.com/150x150'}
            ],
            favorite: {}
        });

    }

    componentDidMount () {
        console.log('Component has been mounted.');
    }

    render () {
        return (
            <React.Fragment>
            
                <h2 className="subheader">Movie list</h2>

                <p>
                    <button onClick={this.changeTitle}>Change title</button>
                </p>

                {this.state.favorite.title ? (
                        <p>
                            <strong>Favorite movie is: </strong>
                            <span>{this.state.favorite.title}</span>
                        </p>
                    ) : (
                        <p>Favorite movie not found.</p>
                    )
                }
                
                <div id="articles">
                    {
                        this.state.movies.map((movie, i) => {
                            return (
                                <Movie key={i} movie={movie} setAsFavorite={this.setAsFavorite}></Movie>
                            )
                        })
                    }
                </div>

            </React.Fragment>
        );
    }

}

export default Movies;