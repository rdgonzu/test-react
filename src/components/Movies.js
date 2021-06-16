import React, {Component} from "react";
import StaticMessage from "./StaticMessage";

class Movies extends Component {

    render () {
        return (
            <div id="movies">
                <h4>This is a texto from Movies component</h4>
                <StaticMessage></StaticMessage>
            </div>
        );
    }

}

export default Movies;