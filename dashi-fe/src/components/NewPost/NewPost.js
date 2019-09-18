import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

import './NewPost.css';

class NewPost extends Component {
    state = {
    };


    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const newPost = {
            user: localStorage.getItem('uid'),
            content: this.state.content,
            // image: this.state.image
        }

        axios.post(`${API_URL}/posts`, newPost, { withCredentials: true })
            .then(res => {
                this.props.pushNewPost(res.data.data);
            })
            .catch(err => console.log(err));
    };


    render() {
        return (
            <>
                <div className="new-post-container">
                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <img className="user-thumb" src={this.props.profile.profile_photo} />
                        </div>
                        <div className="col-md-9">
                            <div id="new-post-form">
                                <form>
                                    <textarea id="content" name="content" placeholder="What's happening?" value={this.state.content} onChange={this.handleChange} className="form-control"></textarea>
                                    <button id="new-post" onClick={this.handleSubmit} type="button" className="btn active">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            </>
        );
    };
};

export default NewPost;