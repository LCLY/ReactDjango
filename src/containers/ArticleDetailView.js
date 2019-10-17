import React, { Component } from "react";
import axios from "axios";
import { Card, Button } from "antd";
import FormLayout from "../components/FormLayout";
class ArticleDetailView extends Component {
    state = {
        articles: {},
    };

    componentDidMount() {
        // this is the router path
        const articleID = this.props.match.params.articleID;
        // when component is rendered, get data and update state
        // get article from database
        var config = {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        };

        axios
            .get(`http://127.0.0.1:8000/api/${articleID}`, config)
            .then(res => {
                this.setState({ articles: res.data });
            })
            .catch(error => console.log(error));
    }

    handleDelete = e => {
        const articleID = this.props.match.params.articleID;
        axios.delete(`http://127.0.0.1:8000/api/${articleID}`);
        this.props.history.push("/"); //redirect us back to root
        this.forceUpdate(); //brute force way to force the page refresh
    };

    render() {
        return (
            <div>
                <Card title={this.state.articles.title}>
                    <p>{this.state.articles.content}</p>
                </Card>
                <FormLayout
                    requestType="put"
                    articleID={this.props.match.params.articleID}
                    btnText="Update"
                />
                <form onSubmit={this.handleDelete}>
                    <Button htmlType="submit" type="danger">
                        Delete
                    </Button>
                </form>
            </div>
        );
    }
}

export default ArticleDetailView;

// basically what happened is when the component is rendered, we get the data from the article models through axios and the router id
