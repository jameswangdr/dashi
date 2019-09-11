import React, { Component } from 'react';
import { API_URL } from '../../constants';
import axios from 'axios';

import logo from './logo.png';
import edit from './edit.png';
import trash from './trash.png';

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
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', time: 'numeric' };

        return (
            <div className="card">
                <div className="post-card">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="post-thumb" src={post.user.profile_photo} />
                            <div className="row">
                                <button className="post-delete-btn" onClick={this.deletePost}>
                                    <img className="post-delete-img" src={trash}></img>
                                </button>
                                <button className="post-edit-btn" aria-pressed="true" data-toggle="modal" data-target={`#postModal-${post._id}`}>
                                    <img className="post-edit-img" src={edit}></img>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <p><span className="at-user">@{post.user.username}</span> • <span className="timestamp">{new Date(post.date_posted).toLocaleDateString("en-US", options)}</span></p>
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
                                    <button id="close" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    {this.state.errors && this.state.errors.map((e, i) => (
                                        <div className="alert alert-danger alert-dismissible fade show" style={{ width: '100%' }} role="alert" key={i}>
                                            {e.message}
                                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                    ))}
                                    <div className="modal-img">
                                        <img src={logo}></img>
                                    </div>
                                    <div className="modal-header">
                                        <h4 className="modal-title" id="exampleModalLabel">Edit post</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form >
                                            <div className="form-group">
                                                <input type="text" id="edit" name="content" placeholder="What did you misspell?" value={this.state.content} default={this.state.content} onChange={this.onChangePost} className="form-control form-control-lg" />
                                            </div>
                                        </form>
                                    </div>
                                    <button onClick={this.updatePost} type="submit" id="modal-edit-btn" data-dismiss="modal" className="btn active"><span aria-hidden="true">Save</span></button>
                                </div>
                            </div>
                        </div>
                        {/* <div>
                            <button className="post-delete-btn" onClick={this.deletePost}>
                                <img className="post-delete-img" src={trash}></img>
                            </button>
                            <button className="post-edit-btn" aria-pressed="true" data-toggle="modal" data-target={`#postModal-${post._id}`}>
                                <img className="post-edit-img" src={edit}></img>
                            </button>
                        </div> */}
                    </>
                    : null}
            </div >

        )
    };
};

export default Post;
