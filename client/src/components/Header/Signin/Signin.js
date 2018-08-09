import React from 'react';
import './style';


class Signin extends React.Component{
    constructor(props){
        
        super(props);

        this.state = {
            isOpened: false
        };
        this.toggle = this.toggle.bind(this);
    }
    render(){
        let rootClassName = this.props.className, element;

        console.log(this.props.className);

        element = (
            <div className={ rootClassName + (!this.state.isOpened ? ' hidden' : '') }>
                <div className={ rootClassName + '__label' } onClick={ this.toggle }>Sign in</div>
                <form className={ rootClassName + '__form' }>
                    <input name="login"/>
                    <input name="password" type="password"/>
                    <input name="submit" type="submit"/>
                </form>
            </div>
            
        );
        return element;
    }
    toggle(){
        this.setState({
            isOpened: !this.state.isOpened
        });
    }
}

export default Signin;