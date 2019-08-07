import React, {Component} from 'react';
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
    state = {
        auth: true
    };

    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts/" exact>Home</NavLink></li>{/* active class is added by default by EXACT attribute*/}
                            <li><NavLink to={{
                                pathname: '/new-post',  // absolute path always add to route domain,
                                //pathname: this.props.match.url + '/new-post',  // relative path, concatenate to existing URL
                                // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8140667#overview
                                hash: '#submit',  // go to element submit
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>{/* Switch will render only one Route which first match the URL*/}
                    {/*<Route path="/" exact render={()=> <h1>Home</h1>}/>*/}
                    {this.state.auth ? <Route path="/new-post" component={NewPost}/> : null}
                    <Route path="/posts/" component={Posts}/>
                    <Redirect from="/" to="/posts/" />
                    {/*<Route path="/:id" exact component={FullPost}/> we nested it inside Posts*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;