import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import LoginForm from './LoginForm/LoginForm';
import './style';


const CLASSNAME_PREFIX = 'header';
const TITLE = 'Test SPA';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            action: 'hidden'
        };
        this.toggle = this.toggle.bind(this);
    }
    render(){
        let element = (
            <header className={ CLASSNAME_PREFIX }>
                <div className={ CLASSNAME_PREFIX + '__title' }>{ TITLE }</div>
                <div className={ CLASSNAME_PREFIX + '__login' }>
                    <div className={ CLASSNAME_PREFIX + '__login-signin-text' } data-action="signin" onClick={ this.toggle }>Signin</div>
                    <div className="header__login-delimiter"></div>
                    <div className={ CLASSNAME_PREFIX + '__login-signup-text' } data-action="signup" onClick={ this.toggle }>Signup</div>
                    <LoginForm className={ CLASSNAME_PREFIX + '__login-form'} action={ this.state.action }/>
                </div>
                <Dropdown className={ CLASSNAME_PREFIX + '__language' }/>
            </header>
        );
        return element;
    }
    toggle(event){
        let target = event.target;

        this.setState({
            action: target.dataset['action']
        });
    }
}

export default Header;