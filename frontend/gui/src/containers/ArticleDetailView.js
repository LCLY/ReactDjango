import React, { Component } from "react";
import axios from "axios";
import { Card } from "antd";
class ArticleDetailView extends Component {
    state = {
        articles: {},
    };

    componentDidMount() {
        const articleID = this.props.match.params.articleID;
        // when component is rendered, get data and update state
        // get article from database
        axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
            this.setState({ articles: res.data });
        });
    }

    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
            </Card>
        );
    }
}

export default ArticleDetailView;

// basically what happened is when the component is rendered, we get the data from the article models through axios and the router id
