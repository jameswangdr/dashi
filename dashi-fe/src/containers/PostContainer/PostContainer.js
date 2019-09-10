import React, { Component } from 'react';
import NewPost from '../../components/NewPost/NewPost.js';
import Post from '../../components/Post/Post';
import PostModel from '../../models/PostModel';

class PostContainer extends Component {
    state = {
        posts: [],
        filtered_posts: [],
        postsFetched: false,
    };

    fetchPosts = () => {
        PostModel.index()
            .then(res => {
                this.setState({ posts: res.data.data })
            })
            .catch(err => console.log(err));
    };

    pushNewPost = (post) => {
        const posts = this.state.posts;
        posts.push(post);
        this.setState({ posts })
    };

    componentDidUpdate = () => {
        //  this.fetchPosts();
        if (this.state.postsFetched) {
            this.fetchPosts();
        };
    };

    componentDidMount() {
        this.fetchPosts();
    };

    

    render() {
        return (
            <>
                <NewPost postsFetched={this.state.postsFetched} pushNewPost={this.pushNewPost} setCurrentUser={this.setCurrentUser} profile={this.props.profile}/>
                {/* <Post post={this.state.posts} setCurrentUser={this.setCurrentUser}/> */}
                { this.state.posts.map((post,i) => <Post currentUser={this.props.currentUser} profile={this.props.profile} fetchPosts={this.fetchPosts} post={post} key={i} />).reverse() }
            </>
        );
    };
};

export default PostContainer;
