import React from 'react';
import './style';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let element;

        element = (
            <div className={ this.props.className + ' ' + this.props.action }>
                
                <div className={ this.props.className + '__signin' }>
                    <div>User name: <input name="login" type="text"></input></div>
                    <div>Password: <input name="password" type="password"></input></div>
                    <div><input name="submit" type="submit" value="Sign in"/></div>
                </div>
                <div className={ this.props.className + '__signup' }>
                    <div>User name: <input name="login" type="text"></input></div>
                    <div>Password: <input name="password" type="password"></input></div>
                    <div>Confirm password: <input name="passwordConfirm" type="password"></input></div>
                    <div><input name="submit" type="submit" value="Sign up"/></div>
                </div>
            </div>
        );
        return element;
    }
}

export default Header;