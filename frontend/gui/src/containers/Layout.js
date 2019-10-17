import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";
const { Header, Content, Footer } = Layout;
class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={["2"]}
                        style={{ lineHeight: "64px" }}
                    >
                        {this.props.isAuthenticated ? (
                            <Menu.Item key="2" onClick={this.props.logout}>
                                <Link to="/login">Logout</Link>
                            </Menu.Item>
                        ) : (
                            <Menu.Item key="2">
                                <Link to="/">Login</Link>
                            </Menu.Item>
                        )}
                        <Menu.Item key="1">
                            <Link to="/">Posts</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: "0 50px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/">List</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            background: "#fff",
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {/* will print out whatever is wrapped in <CustomLayout> props.children </CustomLayout> */}
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()),
    };
};
// withRouter is to fix some issue with the Link to=""
export default withRouter(
    connect(
        null,
        mapDispatchToProps,
    )(CustomLayout),
);
