import React, {Component} from "react";
import Movie from "./Movie";

class Movies extends Component {

    state = {
        movies: [
            {title: 'Movie 1', image: 'https://via.placeholder.com/150x150'},
            {title: 'Movie 2', image: 'https://via.placeholder.com/150x150'},
            {title: 'Movie 3', image: 'https://via.placeholder.com/150x150'},
            {title: 'Movie 4', image: 'https://via.placeholder.com/150x150'},
            {title: 'Movie 5', image: 'https://via.placeholder.com/150x150'}
        ]
    }

    changeTitle = () => {

        var {movies} = this.state;
        movies[0].title = 'Movie 1 edited';

        this.setState({
            movies
        });

    }

    render () {
        return (
            <React.Fragment>
            
                <h2 class="subheader">Movie list</h2>

                <p>
                    <button onClick={this.changeTitle}>Change title</button>
                </p>
                
                <div id="articles">
                    {
                        this.state.movies.map((movie, i) => {
                            return (
                                <Movie key={i} movie={movie}></Movie>
                            )
                        })
                    }
                </div>

            </React.Fragment>
        );
    }

}

export default Movies;