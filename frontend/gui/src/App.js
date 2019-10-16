import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import CustomLayout from "./containers/Layout";
import BaseRouter from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <div>
            <Router>
                <CustomLayout>
                    <BaseRouter />
                </CustomLayout>
            </Router>
        </div>
    );
}

export default App;
