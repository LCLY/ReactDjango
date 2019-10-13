import React from "react";
import { Route } from "react-router-dom";
import ArticleListView from "./containers/ArticleListView";
import ArticleDetailView from "./containers/ArticleDetailView";
const BaseRouter = () => {
    return (
        <div>
            {/* list */}
            <Route exact path="/" component={ArticleListView} />
            {/* detail */}
            {/* now it will only show respective article detail according to the id */}
            <Route exact path="/:articleID" component={ArticleDetailView} />
        </div>
    );
};

export default BaseRouter;
