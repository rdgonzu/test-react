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

    render () {
        return (
            <React.Fragment>
            
                <h2 class="subheader">Movie list</h2>
                
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