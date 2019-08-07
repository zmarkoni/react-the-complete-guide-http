import React, {Component} from "react";
import axiosInstance from "../../../axios";
// import {Link} from "react-router-dom"; // instead of Link we could use history.push()
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Route} from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        console.log(this.props);
        axiosInstance.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    };

    postSelectedHandler = (id) => {
        // Router - navigate programatically  (good if we need to change root after FETCH)
        this.props.history.push({pathname: '/posts/' + id});
        //this.props.history.push('/posts/' + id);  // moze i ovako samo
    };

    render() {

        let posts = <p style={{color: 'red', textAlign: 'center'}}>Something went wrong with fetching Posts!</p>;

        if (!this.state.error) {
            // map store new array which will be save in const post
            posts = this.state.posts.map(post => {
                return (
                    //<Link to={'/posts/' + post.id} key={post.id}>
                    <Post
                        key={post.id}
                        title={post.title}
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}
                    />
                    // </Link>
                )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </div>
        );
    }
};

export default Posts;