import React from "react";
import { Route } from "react-router-dom";
import ArticleListView from "./containers/ArticleListView";
const BaseRouter = () => {
    return (
        <div>
            {/* list */}
            <Route exact path="/" component={ArticleListView} />
            {/* detail */}
            <Route exact path="/:articleID" component={ArticleListView} />
        </div>
    );
};

export default BaseRouter;
