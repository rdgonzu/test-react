import React, {Component} from "react";
import Sidebar from './Sidebar';

class Form extends Component {

    nameRef = React.createRef();
    lastNameRef = React.createRef();
    bioRef = React.createRef();
    genderMaleRef = React.createRef();
    genderFemaleRef = React.createRef();
    genderOtherRef = React.createRef();

    state = {
        user: {}
    }

    sendForm = (event) => {

        event.preventDefault();

        var gender;

        if (this.genderMaleRef.current.checked) {
            gender = this.genderMaleRef.current.value;
        }
        else if (this.genderFemaleRef.current.checked) {
            gender = this.genderFemaleRef.current.value;
        }
        else if (this.genderOtherRef.current.checked) {
            gender = this.genderOtherRef.current.value;
        }

        var user = {
            name: this.nameRef.current.value,
            lastName: this.lastNameRef.current.value,
            bio: this.bioRef.current.value,
            gender
        }

        this.setState({
            user
        });

    }

    render () {

        return (
            <React.Fragment>

                <div className="center">

                    <section id="content">

                        <h1 className="subheader">Form</h1>

                        {this.state.user.name &&
                            <div id="user-data">
                                <p>Name: <strong>{this.state.user.name}</strong></p>
                                <p>Lastname: <strong>{this.state.user.lastName}</strong></p>
                                <p>Bio: <strong>{this.state.user.bio}</strong></p>
                                <p>Gender: <strong>{this.state.user.gender}</strong></p>
                            </div>
                        }

                        <form className="mid-form" onSubmit={this.sendForm}>

                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" ref={this.nameRef} onChange={this.sendForm} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" name="lastname" ref={this.lastNameRef} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="bio">Bio</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>

                            <div className="form-group radibuttons">
                                <input type="radio" name="gender" value="male" ref={this.genderMaleRef} /> Male 
                                <input type="radio" name="gender" value="female" ref={this.genderFemaleRef} /> Female 
                                <input type="radio" name="gender" value="other" ref={this.genderOtherRef} /> Other
                            </div>

                            <div className="clearfix"></div>

                            <input type="submit" value="Send" className="btn btn-success" />

                        </form>

                    </section>

                    <Sidebar></Sidebar>

                    <div className="clearfix"></div>

                </div>

            </React.Fragment>
        );
    }

}

export default Form;