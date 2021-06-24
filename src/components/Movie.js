import React, {Component} from "react";

class Movie extends Component {

    setAsFavorite = (movie) => {
        this.props.setAsFavorite(this.props.movie);
    }

    render () {

        const {title, image} = this.props.movie;
        const movie = this.props.movie;

        return (
            <article className="article-item" id="article-template">

                <div className="image-wrap">
                    <img src={image} alt={title} />
                </div>

                <h2>{title}</h2>

                <span className="date">
                    5 minutes ago
                </span>

                <a href="#">View more</a>

                <br />

                <button onClick={this.setAsFavorite}>Set as favorite</button>

                <div className="clearfix"></div>
                
            </article>
        );
    }

}

export default Movie;