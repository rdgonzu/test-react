import React, {Component} from 'react';

class Sidebar extends Component {

    render () {

        return (
            <aside id="sidebar">

                <div id="nav-blog" className="sidebar-item">
                    <h3>What you can do</h3>
                    <a href="#" className="btn btn-success">Create article</a>
                </div>

                <div id="search" className="sidebar-item">
                    <h3>Search</h3>
                    <p>Find an article</p>
                    <form>
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Search" className="btn" />
                    </form>
                </div>

            </aside>
        );

    }

}

export default Sidebar;