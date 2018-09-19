import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'button';
const DEFAULT_NAME = 'submit';
const DEFAULT_SIZE = 'small';
const DEFAULT_TEXT = 'button';

class Button extends React.Component {

    constructor(props) {
        super(props);

        this.staticData = {
            className: this.props.className || DEFAULT_CLASSNAME,
            name: this.props.name || DEFAULT_NAME,
            size: this.props.size || DEFAULT_SIZE,
            text: this.props.text || DEFAULT_TEXT
        };
    }

    componentDidMount() {
        console.log(`Component ${this.staticData.className} mounted.`);
    }

    componentDidUpdate() {
        console.log(`Component ${this.staticData.className} updated.`);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return  (
            <div className={ this.staticData.className + ' ' + this.staticData.size }>
                <button name={ this.staticData.name } className={ this.staticData.className + '__body' }>
                    <div className={ this.staticData.className + '__text' }>{ this.staticData.text }</div>
                </button>
            </div>
        );
    }
}

export default Button;