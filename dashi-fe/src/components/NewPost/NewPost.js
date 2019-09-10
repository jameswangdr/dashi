import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';

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
                <div id="new-post">
                    <form>
                        <div>
                            <label htmlFor="content">What's happening?</label>
                            <textarea id="content" name="content" placeholder="What's happening?" value={this.state.content} onChange={this.handleChange} className="form-control"></textarea>
                        </div>
                        <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        );
    };
};

export default NewPost;