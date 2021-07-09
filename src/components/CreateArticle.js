import React, {Component} from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Global from "../Global";
import Sidebar from './Sidebar';

class CreateArticle extends Component {

    apiUrl = Global.apiUrl;

    titleRef = React.createRef();
    contentRef = React.createRef();

    state = {
        article: {},
        status: null,
        selectedFile: null
    };

    saveArticle = (e) => {

        e.preventDefault();
        this.changeState();

        const article = {
            title: this.titleRef.current.value,
            content: this.contentRef.current.value
        };

        axios.post(this.apiUrl + 'save', article)
        .then((res) => {

            if (res.data.articleStored) {

                this.setState({
                    article: res.data.articleStored,
                    status: 'waiting'
                });

                if (this.state.selectedFile !== null) {

                    const articleId = this.state.article._id;

                    const formData = new FormData();

                    formData.append(
                        'file0',
                        this.state.selectedFile,
                        this.state.selectedFile.name
                    );

                    axios.post(this.apiUrl + 'upload-image/' + articleId, formData)
                    .then((res) => {

                        if (res.data.articleUpdated) {
                            this.setState({
                                article: res.data.articleUpdated,
                                status: 'success'
                            });
                        }
                        else {
                            this.setState({
                                status: 'failed'
                            });
                        }

                    });

                }

                else {
                    this.setState({
                        status: 'success'
                    });
                }

            }

            else {
                this.setState({
                    status: 'failed'
                });
            }

        });

    }

    changeFile = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
        console.log(this.state);
    }

    changeState = () => {
        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value
            }
        });
    }

    render () {

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />;
        }

        return (
            <div className="center">

                <section id="content">

                    <h1 className="subheader">Create article</h1>

                    <form className="mid-form" onSubmit={this.saveArticle}>

                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" ref={this.titleRef} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea name="content" ref={this.contentRef}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="file0">Image</label>
                            <div className="clearfix"></div>
                            <input type="file" name="file0" onChange={this.changeFile}></input>
                        </div>

                        <div className="clearfix"></div>
                        <br />

                        <input type="submit" value="Save" className="btn btn-success" />

                    </form>

                </section>

                <Sidebar blog="true"></Sidebar>

                <div className="clearfix"></div>

            </div>
        )

    }

}

export default CreateArticle;