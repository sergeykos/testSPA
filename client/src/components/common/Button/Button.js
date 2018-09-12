import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'button';
const DEFAULT_NAME = 'submit';
const DEFAULT_SIZE = 'small';
const DEFAULT_TEXT = 'button';


class Button extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name || DEFAULT_NAME,
            size: this.props.size || DEFAULT_SIZE,
            text: this.props.text || DEFAULT_TEXT
        };
    }

    render() {
        let className, element;

        className = this.props.className || DEFAULT_CLASSNAME;

        element = (
            <div className={ className + ` ${this.state.size}` }>
                <button name={ this.state.name } className={ className + '__body' }>
                    <div className={ className + '__text' }>{ this.state.text }</div>
                </button>
            </div>
        );
        
        return element;
    }
}


export default Button;