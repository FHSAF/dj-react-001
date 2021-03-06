import React from 'react';

import {Route} from 'react-router-dom';

// import CustomLayout from './containers/Layout'
import ArticleList from './containers/ArticleListView';
import ArticleDetail from './containers/ArticleDetailView';
import NormalLoginForm from './containers/Login';
import RegistrationForm from './containers/Signup';


const BaseRouter = () => (
    <div>
        <Route exact path = '/' component={ArticleList}/>
        <Route exact path="/articles/:articleID/" component={ArticleDetail} />
        <Route exact path="/login/" component={NormalLoginForm} />
        <Route exact path="/signup/" component={RegistrationForm} />
    </div>
)

export default BaseRouter;