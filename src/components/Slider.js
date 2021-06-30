import React, {Component} from 'react';

class Slider extends Component {

    render () {

        return (
            <div id="slider" className={this.props.size}>
                <h1>{this.props.title}</h1>
                {!this.props.hideButton &&
                    <a href="#" className="btn-white">Blog</a>
                }
            </div>
        );

    }

}

export default Slider;