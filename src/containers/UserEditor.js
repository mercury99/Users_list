import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import UserForm from "./UserForm";
import { getInitialStateForm } from "../selectors";
import { correctUser } from "../actions";

const mapStateToProps = (state, ownProps) => ({
    initialValues: {
        initialValues: getInitialStateForm(state, ownProps.match.params.id)
    }
});

@connect(mapStateToProps, {correctUser})
export default class UserEditor extends Component {
    static propTypes = {
        match: PropTypes.object,
        initialValues: PropTypes.shape({
            first_name: PropTypes.string,
            last_name: PropTypes.string,
            active: PropTypes.bool,
            age: PropTypes.number,
            login: PropTypes.string,
            password: PropTypes.string,
            role: PropTypes.number,
            registered_on: PropTypes.string,
        }),
        correctUser: PropTypes.func,
    };

    handleSubmit = (values) => {
        if (values.registered_on) {
            this.props.correctUser(values);
        } else {
            this.props.correctUser({
                ...values,
                registered_on: (new Date).getTime().toString()
            });
        }

        this.goBack.click();
    };

    render() {
        const {initialValues} = this.props;

        return(
            <div>
                <div className="row justify-content-end">
                    <Link to="/" >
                        <button className="btn btn-light" ref={button => this.goBack = button}>Users list</button>
                    </Link>
                </div>
                <div className="row justify-content-center">
                    <UserForm {...initialValues} onSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}