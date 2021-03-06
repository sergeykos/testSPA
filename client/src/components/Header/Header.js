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
                    <div className={ CLASSNAME_PREFIX + '__login__signin-text' } data-action="signin" onClick={ this.toggle }>Signin</div>
                    <div className="header__login__delimiter"></div>
                    <div className={ CLASSNAME_PREFIX + '__login__signup-text' } data-action="signup" onClick={ this.toggle }>Signup</div>
                    <LoginForm className={ CLASSNAME_PREFIX + '__login__form'} action={ this.state.action }/>
                </div>
                <Dropdown className={ CLASSNAME_PREFIX + '__language' }/>
            </header>
        );
        return element;
    }
    toggle(event){
        let target = event.target;

        if (target.dataset['action'] === this.state.action)
            this.setState({
                action: 'hidden'
            });
        else
            this.setState({
                action: target.dataset['action']
            });
    }
}

export default Header;