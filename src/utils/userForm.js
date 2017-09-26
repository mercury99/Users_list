export const parseNumber = (value) => Number.parseInt(value);

export const returnTrue = () => true;
export const returnFalse = () => false;

export const validate = (values) => {
    const errors = {};

    if (!values.first_name) {
        errors.first_name = 'Required'
    } else if (values.first_name.length < 3) {
        errors.first_name = 'Must be 3 characters or more'
    } else if (values.first_name.length > 15) {
        errors.first_name = 'Must be 15 characters or less'
    }

    if (!values.last_name) {
        errors.last_name = 'Required'
    } else if (values.last_name.length < 3) {
        errors.last_name = 'Must be 3 characters or more'
    } else if (values.last_name.length > 25) {
        errors.last_name = 'Must be 25 characters or less'
    }

    if (!values.login) {
        errors.login = 'Required'
    } else if (values.login.length < 3) {
        errors.login = 'Must be 3 characters or more'
    } else if (!(/^[a-z0-9\-\_]+$/.test(values.login))) {
        errors.login = `Must contain only a-z, 0-9, "-" and "_"`
    }

    if (!values.age) {
        errors.age = 'Required'
    } else if (!Number.isInteger(Number(values.age))) {
        errors.age = 'Must be a integer number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    } else if (Number(values.age) > 55) {
        errors.age = 'Sorry, you must be younger than 55'
    }

    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Must be 8 characters or more'
    }

    if (!values.role) {
        errors.role = 'Required'
    }

    return errors
};