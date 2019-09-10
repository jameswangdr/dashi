import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';
import './Post.css';

class Post extends Component {
    state = {
        content: this.props.post.content,
    }

    updatePost = (event) => {
        const { content } = this.state;
        const date_posted = Date.now();
        const updatedPost = {
            content,
        };
        const postId = this.props.post
        axios.put(`${API_URL}/posts/${postId._id}`, updatedPost, { withCredentials: true })
            .then(res => {
                // this.clearModal();
                this.setState({ content });
                this.props.fetchPosts();
             
            });
    };

    deletePost = (event) => {
        axios.delete(`${API_URL}/posts/${this.props.post._id}`).then(res => {
            this.props.fetchPosts();
        })
    }

    onChangePost = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        const { post } = this.props;
        const username = localStorage.getItem('username');
        console.log(this.props.post._id);
        console.log(this.state);

        return (
            <div className="card post-card">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 profile-thumb">
                            <img src={post.user.profile_photo} />
                        </div>
                        <div className="col-md-10">
                            <p>@{post.user.username} • {new Date(post.date_posted).toLocaleString()}</p>
                            <p>{post.content}</p>
                        </div>
                    </div>

                </div>
                {post.user._id === this.props.currentUser
                    ?
                    <>
                        <div className="modal fade" id={`postModal-${post._id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Edit Post</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form >
                                            <div className="form-group">
                                                <label htmlFor="Content">Content</label>
                                                <input type="text" id="edit" name="content" value={this.state.content} default={this.state.content} onChange={this.onChangePost} className="form-control form-control-lg" />
                                            </div>
                                        </form>
                                    </div>
                                    <button onClick={this.updatePost} type="button" className="save-post-btn" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Save</span></button>
                                </div>
                            </div>
                        </div>
                        <button className="edit-post-btn" aria-pressed="true" data-toggle="modal" data-target={`#postModal-${post._id}`}>Edit</button>
                        <button className="delete-post-btn" onClick={this.deletePost}>Delete</button>
                    </>
                    : null}
            </div >

        )
    };
};

export default Post;
