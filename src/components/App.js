import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

import UsersList from "../containers/UsersList";
import UserEditor from "../containers/UserEditor";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <Route exact path="/" component={UsersList}/>
                <Route exact path="/user/:id" component={UserEditor}/>
            </div>
        )
    }
}