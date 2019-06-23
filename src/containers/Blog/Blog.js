import React, {Component} from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    componentDidMount() {
        //axios.get('https://jsonplaceholder.typicode.com/posts')

        //https://developers.google.com/web/updates/2015/03/introduction-to-fetch
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()) // we access DATA with response.json()
            //.then(json => console.log(json))
            .then(jsonData => {
                //transform data
                const post = jsonData.slice(0, 4); // get only 4 posts
                const updatedPosts = post.map(post => {
                    return {
                        ...post,
                        author: 'Zoran Markovic'  // create Author manually
                    }
                });

                this.setState({
                    posts: updatedPosts
                })
            })
            .catch(error => {
                // console.error('Fetch error: ', error);
                this.setState({
                    error: true
                })
            });
    };

    postSelectedHandler = (id) => {
        this.setState({
            selectedPostId: id
        });
    };

    render() {

        let posts = <p style={{color: 'red', textAlign: 'center'}}>Something went wrong with fetching Posts!</p>;

        if (!this.state.error) {
            // map store new array which will be save in const post
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost/>
                </section>
            </div>
        );
    }
}

export default Blog;