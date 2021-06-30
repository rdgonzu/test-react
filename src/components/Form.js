import React, {Component} from "react";
import Slider from "./Slider";
import Sidebar from './Sidebar';

class Form extends Component {

    render () {

        return (
            <React.Fragment>

                <Slider title="Form" hideButton={true} size="slider-small"></Slider>

                <div className="center">

                    <section id="content">
                        <h1 className="subheader">Form</h1>
                    </section>

                    <Sidebar></Sidebar>

                    <div className="clearfix"></div>

                </div>

            </React.Fragment>
        );
    }

}

export default Form;