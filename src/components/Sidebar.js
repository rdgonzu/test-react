import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Sidebar extends Component {

    searchRef = React.createRef();

    state = {
        searchStr: "",
        redirect: false
    };

    redirectToSearch = (e) => {

        e.preventDefault();

        this.setState({
            searchStr: this.searchRef.current.value,
            redirect: true
        });
        
    }

    render () {

        if (this.state.redirect) {
            return (
                <Redirect to={'/blog/redirect/' + this.state.searchStr}></Redirect>
            );
        }

        return (
            <aside id="sidebar">

                {this.props.blog === "true" &&
                    <div id="nav-blog" className="sidebar-item">
                        <h3>What you can do</h3>
                        <a href="#" className="btn btn-success">Create article</a>
                    </div>
                }

                <div id="search" className="sidebar-item">
                    <h3>Search</h3>
                    <p>Find an article</p>
                    <form onSubmit={this.redirectToSearch}>
                        <input type="text" name="search" ref={this.searchRef} />
                        <input type="submit" name="submit" value="Search" className="btn" />
                    </form>
                </div>

            </aside>
        );

    }

}

export default Sidebar;