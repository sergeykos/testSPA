import React from 'react';
import Input from 'components/common/Input/Input';
import './style';

const DEFAULT_CLASSNAME = 'header__login__form';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let element, className = DEFAULT_CLASSNAME, action = this.props.action;

        element = (
            <div className={ className + ' ' + action }>
                
                <div className={ className + '-signin' }>
                    <div className={ className + '__row' }>
                        <div className="text">User name:</div>
                        <Input name="login" type="text"/>
                    </div>
                    <div className={ className + '__row' }>
                        <div className="text">Password:</div>
                        <Input name="password" type="password"/>
                    </div>
                    <div className={ className + '__row' }>
                        <input name="submit" type="submit" value="Sign in"/>
                    </div>
                </div>
                <div className={ className + '-signup' }>
                    <div className={ className + '__row' }>
                        <div className="text">User name:</div>
                        <Input name="login" type="text"/>
                    </div>
                    <div className={ className + '__row' }>
                        <div className="text">Password:</div>
                        <Input name="password" type="password"/>
                    </div>
                    <div className={ className + '__row' }>
                        <div className="text">Confirm password:</div>
                        <Input name="password" type="passwordConfirm"/>
                    </div>
                    <div className={ className + '__row' }>
                        <input name="submit" type="submit" value="Sign up"/>
                    </div>
                </div>
            </div>
        );
        return element;
    }
}

export default Header;