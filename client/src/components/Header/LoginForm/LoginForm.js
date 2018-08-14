import React from 'react';
import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';
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
                
                <form className={ className + '-signin' } autoComplete="off">
                    <div className={ className + '__row' }>
                        <div className="text">User name:</div>
                        <Input name="login" type="text"/>
                    </div>
                    <div className={ className + '__row' }>
                        <div className="text">Password:</div>
                        <Input name="password" type="password"/>
                    </div>
                    <div className={ className + '__row' }>
                        <Button name="submit" text="Sign in"/>
                    </div>
                </form>
                <form className={ className + '-signup' } autoComplete="off">
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
                        <Input name="passwordConfirm" type="password"/>
                    </div>
                    <div className={ className + '__row' }>
                        <Button name="submit" text="Sign up"/>
                    </div>
                </form>
            </div>
        );
        return element;
    }
}

export default Header;