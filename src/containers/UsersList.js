import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { Link } from "react-router-dom";
import FaCaretDown from "react-icons/lib/fa/caret-down";
import FaCaretUp from "react-icons/lib/fa/caret-up";

import { getUsersList, getSortName, getSortOrder } from "../selectors";
import { rolesList } from "../constants";
import { changeSorting } from "../actions";

const mapStateToProps = (state) => ({
    usersList: getUsersList(state),
    sortName: getSortName(state),
    sortOrder: getSortOrder(state),
});

@connect(mapStateToProps, {changeSorting})
export default class UsersList extends Component {
    static propTypes = {
        usersList: PropTypes.arrayOf(PropTypes.shape({
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            active: PropTypes.bool.isRequired,
            age: PropTypes.number.isRequired,
            login: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
            role: PropTypes.number.isRequired,
            registered_on: PropTypes.string.isRequired,
        })),
        changeSorting: PropTypes.func.isRequired,
        sortName: PropTypes.array,
        sortOrder: PropTypes.array,
    };

    onSortChange = (sortName, sortOrder) => {
        this.props.changeSorting(sortName, sortOrder)
    };

    formatRoleColumn = (cell) => rolesList[cell];

    formatFullNameColumn = (cell, row) => (
        <Link to={`/user/${row.registered_on}`}>{row.last_name} {row.first_name}</Link>
    );

    formatActiveColumn = (cell) => {
        return cell
            ? <div style={{color: "green"}}>Yes</div>
            : <div style={{color: "red"}}>No</div>;
    };

    getCaret = (direction) => {
        if (direction === 'asc') {
            return (
                <span><FaCaretUp/></span>
            );
        }
        if (direction === 'desc') {
            return (
                <span><FaCaretDown/></span>
            );
        }
        return (
            <span>
                <FaCaretUp/>
                <FaCaretDown/>
            </span>
        );
    };

    render() {
        const {usersList, sortName, sortOrder} = this.props;

        return (
            <div>
                <div className="row justify-content-end">
                    <Link to="/user/new">
                        <button className="btn btn-light">Add new user</button>
                    </Link>
                </div>
                <br/>
                <div className="row">
                    <BootstrapTable
                        striped
                        hover
                        condensed
                        data={usersList}
                        multiColumnSort={2}
                        options={{
                            noDataText: 'Users list is empty',
                            sortName: [...sortName, "active"],
                            sortOrder: [...sortOrder, "desc"],
                            onSortChange: this.onSortChange,
                        }}
                    >
                        <TableHeaderColumn
                            dataField="role"
                            dataSort
                            dataFormat={this.formatRoleColumn}
                            caretRender={this.getCaret}
                        >
                            Role
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="login"
                            dataSort
                            caretRender={this.getCaret}
                        >
                            Login
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="last_name"
                            dataSort
                            caretRender={this.getCaret}
                            dataFormat={this.formatFullNameColumn}
                        >
                            Full name
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="age"
                            dataSort
                            caretRender={this.getCaret}
                        >
                            Age
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            isKey
                            dataField="registered_on"
                            dataSort
                            caretRender={this.getCaret}
                        >
                            Registered on
                        </TableHeaderColumn>
                        <TableHeaderColumn
                            dataField="active"
                            dataSort
                            caretRender={this.getCaret}
                            dataFormat={this.formatActiveColumn}
                        >
                            Active
                        </TableHeaderColumn>
                    </BootstrapTable>
                </div>
            </div>
        )
    }
}