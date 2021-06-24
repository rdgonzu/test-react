import React, {Component} from 'react';

class Slider extends Component {

    render () {

        return (
            <div id="slider" className="slider-big">
                <h1>{this.props.title}</h1>
                <a href="#" className="btn-white">Blog</a>
            </div>
        );

    }

}

export default Slider;