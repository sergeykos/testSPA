import React from 'react';
import Form from 'components/common/Form/Form';
import './style';

const DEFAULT_CLASSNAME = 'header__login__form';
const DEFAULT_ACTION = 'hidden';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            formData: {},
            action: this.props.action || DEFAULT_ACTION,
            refresh: false
        };

        this.state.signinFormFields = [
            {
                className: 'input',
                name: 'login',
                type: 'text',
                text: 'Login'
            },
            {
                className: 'input',
                name: 'password',
                type: 'password',
                text: 'Password'
            },
            {
                className: 'button',
                name: 'submit',
                type: 'button',
                text: 'Signin'
            }
        ];
        this.state.signupFormFields = [
            {
                className: 'input',
                name: 'login',
                type: 'text',
                text: 'Login'
            },
            {
                className: 'input',
                name: 'password',
                type: 'password',
                text: 'Password'
            },
            {
                className: 'input',
                name: 'passwordConfirm',
                type: 'password',
                text: 'Confirm password'
            },
            {
                className: 'button',
                name: 'submit',
                type: 'button',
                text: 'Signup'
            }
        ];
    }

    render() {
        let element, className = DEFAULT_CLASSNAME;

        element = (
            <div className={ className + ' ' + this.props.action }>
                <Form classNamePostfix="signin" fields={ this.state.signinFormFields } action={ this.props.action }/>
                <Form classNamePostfix="signup" fields={ this.state.signupFormFields } action={ this.props.action }/>
            </div>
        );
        return element;
    }
}

export default LoginForm;