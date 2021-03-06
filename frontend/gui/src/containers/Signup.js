import React from "react";
import { Button, Form, Input, Icon, Spin } from "antd";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
class RegistrationForm extends React.Component {
    state = {
        confirmDirty: false,
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.onAuth(
                    values.username,
                    values.email,
                    values.password,
                    values.confirm,
                );
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue("password")) {
            callback("Two passwords that you enter is inconsistent!");
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(["confirm"], { force: true });
        }
        callback();
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = <p>{this.props.error.message}</p>;
        }

        if (localStorage.getItem("token") !== null) {
            console.log("Sign up successfully, token has been generated");
            this.props.history.push("/");
        }
        return (
            <div>
                {errorMessage}
                {this.props.loading ? (
                    <Spin indicator={antIcon} />
                ) : (
                    <Form onSubmit={this.handleSubmit}>
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
                            {getFieldDecorator("email", {
                                rules: [
                                    {
                                        type: "email",
                                        message:
                                            "The input is not valid E-mail!",
                                    },
                                    {
                                        required: true,
                                        message: "Please input your E-mail!",
                                    },
                                ],
                            })(
                                <Input
                                    prefix={
                                        <Icon
                                            type="mail"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder="Email"
                                />,
                            )}
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator("password", {
                                rules: [
                                    {
                                        required: true,
                                        message: "Please input your password!",
                                    },
                                    {
                                        validator: this.validateToNextPassword,
                                    },
                                ],
                            })(
                                <Input.Password
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
                            {getFieldDecorator("confirm", {
                                rules: [
                                    {
                                        required: true,
                                        message:
                                            "Please confirm your password!",
                                    },
                                    {
                                        validator: this.compareToFirstPassword,
                                    },
                                ],
                            })(
                                <Input.Password
                                    onBlur={this.handleConfirmBlur}
                                    prefix={
                                        <Icon
                                            type="lock"
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    type="password"
                                    placeholder="Confirm password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                style={{ marginRight: "10px" }}
                            >
                                Sign up
                            </Button>
                            Or
                            <NavLink
                                style={{ marginRight: "10px" }}
                                to="/login/"
                            >
                                &nbsp;&nbsp;Login
                            </NavLink>
                        </Form.Item>
                    </Form>
                )}
            </div>
        );
    }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
    RegistrationForm,
);

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password1, password2) =>
            dispatch(actions.authSignup(username, email, password1, password2)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(WrappedRegistrationForm);
