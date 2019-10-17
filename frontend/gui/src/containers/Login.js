import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Form, Icon, Input, Button, Spin } from "antd";
import * as actions from "../store/actions/auth";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class Login extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.onAuth(values.username, values.password);
            }
        });
        // redirect after logging in
        this.props.history.push("/");
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>;
        }
        return (
            <div>
                {errorMessage}
                {/* if loading, show the loading icon, otherwise show the submit form */}
                {this.props.loading ? (
                    <Spin indicator={antIcon} />
                ) : (
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator("username", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your username!",
                                    },
                                ],
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="user"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your Password!",
                                    },
                                ],
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginRight: "10px" }}
                            >
                                Login
                            </Button>
                            Or
                            <NavLink
                                style={{ marginRight: "10px" }}
                                to="/signup"
                            >
                                &nbsp;&nbsp;Sign Up
                            </NavLink>
                        </Form.Item>
                    </Form>
                )}
            </div>
        );
    }
}
const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Login);
const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) =>
            dispatch(actions.authLogin(username, password)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WrappedNormalLoginForm);
