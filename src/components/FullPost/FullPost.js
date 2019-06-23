import React, {Component} from 'react';
//import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    };

    componentDidUpdate() {
        // we need to make sure to not create infinite loop when update state here
        if (this.props.id) {
            // to avoid infinite loop
            // because this.setState will update STATE and trigger again componentDidUpdate()
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                //axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                fetch('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
                    .then(response => response.json())
                    .then(jsonData => {
                        //console.log(response);
                        this.setState(
                            {
                                loadedPost: jsonData
                            }
                        )
                    });
            }
        }
    };

    deletePostHandler = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts/' + this.props.id;

        // Example POST method implementation:
        postData(url)
            .then(data => console.log(JSON.stringify(data))) // will be Empty!!!
            .catch(error => console.error(error));

        function postData(url = '', data = {}) {
            // Default options are marked with *
            return fetch(url, {
                method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, cors, *same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            })
                .then(response => response.json()); // parses JSON response into native Javascript objects
        }
    };

    render() {
        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center'}}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button
                            onClick={this.deletePostHandler}
                            className="Delete">Delete
                        </button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;