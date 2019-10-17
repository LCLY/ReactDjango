import React, { Component } from "react";
import axios from "axios";
import Articles from "../components/Articles";
import FormLayout from "../components/FormLayout";
class ArticleListView extends Component {
    state = {
        articles: [],
    };

    componentDidMount() {
        // when component is rendered, get data and update state
        axios.get("http://127.0.0.1:8000/api/").then(res => {
            this.setState({ articles: res.data });
        });
    }

    render() {
        return (
            <div>
                <Articles data={this.state.articles} />
                <br />
                <h2>Create an article</h2>
                <FormLayout
                    requestType="post"
                    articleID={null}
                    btnText="Create"
                />
            </div>
        );
    }
}

export default ArticleListView;
