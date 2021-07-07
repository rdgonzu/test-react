import React, {Component} from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';
import Articles from "./Articles";

class Search extends Component {

    render () {

        const searchStr = this.props.match.params.searchStr;

        return (
            <React.Fragment>

                <Slider title={'Search: ' + searchStr} hideButton={true} size="slider-small"></Slider>

                <div className="center">

                    <section id="content">
                        <h1 className="subheader">Articles</h1>
                        <Articles searchStr={searchStr}></Articles>
                    </section>

                    <Sidebar blog="true"></Sidebar>

                    <div className="clearfix"></div>

                </div>

            </React.Fragment>
        );
    }

}

export default Search;