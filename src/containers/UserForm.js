import React from "react";
import { Field, reduxForm } from 'redux-form';

import { validate, parseNumber, returnTrue, returnFalse } from "../utils/userForm";

const renderField = ({input, label, type, meta: {touched, error}}) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
        </div>
        <div style={{color: "red"}}>{touched && (error && <span>{error}</span>)}</div>
    </div>
);

const renderSelect = ({input, meta: {touched, error}}) => (
    <div className="form-group">
        <label>Role</label>
        <select {...input} className="form-control">
            <option/>
            <option value={1}>Administrator</option>
            <option value={2}>Technician</option>
            <option value={3}>Manager</option>
            <option value={4}>Supervisor</option>
        </select>
        <div style={{color: "red"}}>{touched && (error && <span>{error}</span>)}</div>
    </div>
);

let UserForm = (props) => {
    const {handleSubmit, submitting} = props;

    return (
        <form onSubmit={handleSubmit}>
            <Field name="first_name" type="text" component={renderField} label="First name"/>
            <Field name="last_name" type="text" component={renderField} label="Last name"/>
            <div>
                <label>Active</label>
                <div>
                    <label>
                        <Field name="active" component="input" type="radio" value={true} parse={returnTrue}/>
                        {' '}
                        Yes
                    </label>
                    {" "}
                    <label>
                        <Field name="active" component="input" type="radio" value={false} parse={returnFalse}/>
                        {' '}
                        No
                    </label>
                </div>
            </div>
            <Field name="age" type="number" component={renderField} label="Age" parse={parseNumber}/>
            <Field name="login" type="text" component={renderField} label="Login"/>
            <Field name="password" type="password" component={renderField} label="Password"/>
            <Field name="role" component={renderSelect} parse={parseNumber}/>
            <div>
                <button className="btn btn-primary" type="submit" disabled={submitting}>Submit</button>
            </div>
        </form>
    )
};

UserForm = reduxForm({
    form: "user",
    validate,
})(UserForm);

export default UserForm;
