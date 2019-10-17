import React, { Component } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions/auth";
class App extends Component {
    // everytime component renders, it will call the function
    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <div>
                <Router>
                    {/* this will pass the isAuthenticated to customlayout and dont have to setup redux in that component */}
                    <CustomLayout {...this.props}>
                        <BaseRouter />
                    </CustomLayout>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        // if token is null isAuthenticated will be false
        isAuthenticated: state.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // and then it will dispatch this action
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
