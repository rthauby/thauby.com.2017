import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navigation from './Navigation';
import Home from './Home';
import Work from './Work';
import Hobbies from './Hobbies';

import './styles/Base.css';
import './index.css';

ReactDOM.render(
    <Router>
        <div>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/work" component={Work}/>
                <Route path="/hobbies" component={Hobbies}/>
            </Switch>
        </div>
    </Router>,
document.getElementById('root'));
registerServiceWorker();
