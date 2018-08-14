import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'button';
const DEFAULT_NAME = 'submit';
const DEFAULT_SIZE = 'small';
const DEFAULT_TEXT = 'button';


class Button extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let className, name, text, size, element;

        className = this.props.className || DEFAULT_CLASSNAME;
        name = this.props.name || DEFAULT_NAME;
        size = this.props.size || DEFAULT_SIZE;
        text = this.props.text || DEFAULT_TEXT;

        element = (
            <div className={ className + ` ${size}` }>
                <button name={ name } className={ className + '__body' }>
                    <div className={ className + '__text' }>{ text }</div>
                </button>
            </div>
        );
        
        return element;
    }
}


export default Button;