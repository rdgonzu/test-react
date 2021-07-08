import React, {Component} from "react";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import Global from "../Global";
import Sidebar from './Sidebar';

class Article extends Component {

    apiUrl = Global.apiUrl;

    state = {
        article: {},
        status: null
    };

    componentWillMount () {
        this.getArticle();
    }

    getArticle = () => {

        const id = this.props.match.params.id;

        axios.get(this.apiUrl + 'article/' + id)
        .then((res) => {
            this.setState({
                article: res.data.article
            });
        });

    }

    render () {
        return (
            <div className="center">

                <section id="content">

                    {this.state.article &&

                        <article className="article-item article-detail">

                            <div className="image-wrap">
                                {
                                    this.state.article.image ? (
                                        <img src={this.apiUrl + 'get-image/' + this.state.article.image} alt={this.state.article.title} />
                                    ) : (
                                        <img src="https://via.placeholder.com/200x200" alt={this.state.article.title} />
                                    )
                                }
                            </div>

                            <h1 className="subheader">{this.state.article.title}</h1>

                            <span className="date">
                                <Moment fromNow>{this.state.article.date}</Moment>
                            </span>

                            <p>{this.state.article.content}</p>

                            <a href="#" className="btn btn-danger">Delete</a>
                            <a href="#" className="btn btn-warning">Edit</a>

                            <div className="clearfix"></div>

                        </article>

                    }
                    
                </section>

                <Sidebar blog="true"></Sidebar>
                
                <div className="clearfix"></div>

            </div>
        )
    }

}

export default Article;