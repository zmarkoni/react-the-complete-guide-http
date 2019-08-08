import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom'; // npm i --save react-router react-router-dom, https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8138536#overview
import Blog from './containers/Blog/Blog';

class App extends Component {
    render() {
        // https://reacttraining.com/react-router/web/guides/philosophy
        // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/8138600#overview
        return (
            // <BrowserRouter basename="/my-app"> If our app begin with example.com/my-app
            <BrowserRouter basename="/"> {/* Default, no need to write: basename */}
            <div className="App">
                <Blog/>
            </div>
        </BrowserRouter>
    )
        ;
    }
}

export default App;
