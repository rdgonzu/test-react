import React, {Component} from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';
import Articles from "./Articles";

class Home extends Component {

    render () {

        return (
            <React.Fragment>

                <Slider title="This is a React example"></Slider>

                <div className="center">

                    <section id="content">
                        <h1 className="subheader">Recent articles</h1>
                        <Articles fromHome={true}></Articles>
                    </section>

                    <Sidebar></Sidebar>

                    <div className="clearfix"></div>

                </div>

            </React.Fragment>
        );
    }

}

export default Home;