import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'input';
const DEFAULT_TYPE = 'text';
const DEFAULT_SIZE = 'small';
const DEFAULT_NAME = 'text';

class Input extends React.Component{

    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    render() {
        let className, type, size, element;

        className = DEFAULT_CLASSNAME;
        size = this.props.size || DEFAULT_SIZE;
        type = this.props.type || DEFAULT_TYPE;
        name = this.props.name || DEFAULT_NAME;
        
        switch (type) {
            case 'textarea':
                element = 
                    (<div className={ className + ` ${className}-${size}` }>
                        <textarea className={ className + '__body' } name={ name }></textarea>
                    </div>);
                break;
            case 'password':
                element = 
                    (<div className={ className + ` ${className}-${size}` }>
                        <input className={ className + '__body' } name={ name } type="password" spellCheck="false"></input>
                        <div className={ className + '__eye' } onClick={ this.toggleVisibility }></div>
                    </div>);
                break;
            case 'text':
            default: 
                element = 
                    (<div className={ className + ` ${className}-${size}` }>
                        <input className={ className + '__body' } name={ name } type="text" spellCheck="false"></input>
                    </div>);
                break;
        }
        return element;
    }

    toggleVisibility(event) {
        let targetNode = event.target, inputNode = targetNode.previousElementSibling;

        targetNode.classList.toggle('shown');
        if (inputNode.getAttribute('type') === 'password')
            inputNode.setAttribute('type', 'text');
        else
            inputNode.setAttribute('type', 'password'); 
    }

}

export default Input;