import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
class FormLayout extends React.Component {
    handleFormSubmit = (e, requestType, articleID) => {
        e.preventDefault(); //prevent page reload
        const title = e.target.elements.title.value;
        const content = e.target.elements.content.value;

        switch (requestType) {
            case "post":
                return axios
                    .post("http://127.0.0.1:8000/api/", {
                        title: title,
                        content: content,
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            case "put":
                return axios
                    .put(`http://127.0.0.1:8000/api/${articleID}/`, {
                        title: title,
                        content: content,
                    })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            default:
                break;
        }
    };

    render() {
        return (
            <div>
                <Form
                    onSubmit={event =>
                        this.handleFormSubmit(
                            event,
                            this.props.requestType,
                            this.props.articleID,
                        )
                    }
                >
                    <Form.Item label="Title">
                        {/* we need the name of the input so we can get the value in it */}
                        <Input name="title" placeholder="Enter a title" />
                    </Form.Item>
                    <Form.Item label="Content">
                        <Input
                            name="content"
                            placeholder="Enter some content"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default FormLayout;
