import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
// import './App.css';

//import page components...
// import Dashboard from './dashboard/dashboard';
// import Home from './pages/home/home';

class App extends Component {
    render() {
        return (
            // <Router history={browserHistory}>
            //     <Route path="/">
            //         <IndexRedirect to="/home" />
            //         <Route component={Dashboard} >
            //             <Route path="home" component={Home} />
            //         </Route>
            //     </Route>
            // </Router>
            <div className="helloTag">
                Hello world from ReactJS
            </div>
        );
    }
}

export default App;
