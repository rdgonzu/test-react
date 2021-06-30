import React, {Component} from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';

class Blog extends Component {

    render () {

        return (
            <React.Fragment>

                <Slider title="Blog" hideButton={true} size="slider-small"></Slider>

                <div className="center">

                    <section id="content">
                        <h1 className="subheader">Articles</h1>
                    </section>

                    <Sidebar blog="true"></Sidebar>

                    <div className="clearfix"></div>

                </div>

            </React.Fragment>
        );
    }

}

export default Blog;