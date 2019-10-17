import React from "react";
import { Route } from "react-router-dom";
import ArticleListView from "./containers/ArticleListView";
import ArticleDetailView from "./containers/ArticleDetailView";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
const BaseRouter = () => {
    return (
        <div>
            {/* list */}
            <Route exact path="/" component={ArticleListView} />
            {/* detail */}
            {/* now it will only show respective article detail according to the id */}
            <Route
                exact
                path="/articles/:articleID/"
                component={ArticleDetailView}
            />
            <Route exact path="/login/" component={Login} />
            <Route exact path="/signup/" component={Signup} />
        </div>
    );
};

export default BaseRouter;
