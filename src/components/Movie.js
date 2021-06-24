import React, {Component} from "react";

class Movie extends Component {

    render () {

        const {title, image} = this.props.movie;

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

                <div className="clearfix"></div>
                
            </article>
        );
    }

}

export default Movie;