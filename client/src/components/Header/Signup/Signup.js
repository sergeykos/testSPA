import React from 'react';
import './style';


class Signup extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let element = (
            <div className={ this.props.className }>
                <div className={ this.props.className + '__label' }>Sign up</div>
            </div>
        );

        return element;
    }
}

export default Signup;