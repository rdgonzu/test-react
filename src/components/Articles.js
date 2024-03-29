import React, {Component} from "react";
import axios from 'axios';
import Moment from 'react-moment';
import 'moment/locale/es';
import {Link} from 'react-router-dom';
import Global from "../Global";

class Articles extends Component {

    apiUrl = Global.apiUrl;

    state = {
        articles: [],
        articlesLoaded: false
    }

    componentWillMount () {

        const fromHome = this.props.fromHome;
        const searchStr = this.props.searchStr;

        if (fromHome) {
            this.getRecentArticles();
        }
        else if (searchStr) {
            this.searchArticles(searchStr);
        }
        else {
            this.getArticles();
        }

    }

    getArticles = () => {
        axios.get(this.apiUrl + 'articles')
        .then((res) => {
            this.setState({
                articles: res.data.articles
            });
        });
    }

    getRecentArticles = () => {
        axios.get(this.apiUrl + 'articles/4')
        .then((res) => {
            this.setState({
                articles: res.data.articles
            });
        });
    }

    searchArticles = (searchStr) => {
        axios.get(this.apiUrl + 'search/' + searchStr)
        .then((res) => {
            this.setState({
                articles: res.data.articles
            });
        });
    }

    render () {

        if (this.state.articles.length) {

            let articleList = this.state.articles.map((article) => {
                return (
                    <article className="article-item" id="article-template" key={article._id}>

                        <div className="image-wrap">
                            {
                                article.image ? (
                                    <img src={this.apiUrl + 'get-image/' + article.image} alt={article.title} />
                                ) : (
                                    <img src="https://via.placeholder.com/200x200" alt={article.title} />
                                )
                            }
                        </div>
    
                        <h2>{article.title}</h2>

                        <span className="date">
                            <Moment fromNow>{article.date}</Moment>
                        </span>

                        <Link to={'/blog/article/' + article._id}>Leer más</Link>

                        <div className="clearfix"></div>

                    </article>
                );
            });

            return (
                <div id="articles">
                    {articleList}
                </div>
            );
        }

        else if (!this.state.articles.length && this.state.articlesLoaded) {
            return (
                <div id="articles">
                    <h2 className="subheader">Article list empty!</h2>
                </div>
            );
        }

        else {
            return (
                <div id="articles">
                    <h2>Loading articles</h2>
                </div>
            );
        }

    }

}

export default Articles;