import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'input';
const DEFAULT_TYPE = 'text';
const DEFAULT_SIZE = 'small';
const DEFAULT_NAME = 'text';
const DEFAULT_VALUE = '';

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            passwordType: 'password',
            value: this.props.value || DEFAULT_VALUE,
            className: this.props.className || DEFAULT_CLASSNAME,
            name: this.props.name || DEFAULT_NAME,
            size: this.props.size || DEFAULT_SIZE,
            type: this.props.type || DEFAULT_TYPE
        };

        this.togglePasswordType = this.togglePasswordType.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.refresh && this.state.value !== DEFAULT_VALUE) {
            this.setState({ value: DEFAULT_VALUE });
            if (this.props.handler)
                this.props.handler(this.state.name, DEFAULT_VALUE);
        }
    }

    componentWillMount() {
        console.log(`Component ${this.state.className} mounted.`);
    }
    
    componentWillUpdate() {
        console.log(`Component ${this.state.className} updated.`);
    }

    render() {
        let element, className = this.state.className, name = this.state.name, value = this.state.value;
        
        switch (this.state.type) {
            case 'textarea':
                element = 
                    (<div className={ className + ` ${className}-${this.state.size}`} >
                        <textarea className={ className + '__body' } name={ name } onChange={ this.handleChange } value={ value }></textarea>
                    </div>);
                break;
            case 'password':
                element = 
                    (<div className={ className + ` ${className}-${this.state.size}` }>
                        <input className={ className + '__body' } name={ name } onChange={ this.handleChange } type={ this.state.passwordType } value={ value }></input>
                        <div className={ className + '__eye' + (this.state.visible ? ' shown' : '') } onClick={ this.togglePasswordType }></div>
                    </div>);
                break;
            case 'text':
            default: 
                element = 
                    (<div className={ className + ` ${className}-${this.state.size}` }>
                        <input className={ className + '__body' } name={ name } onChange={ this.handleChange } type="text" value={ value }></input>
                    </div>);
                break;
        }

        return element;
    }

    handleChange(event) {
        let value;

        value = event.target.value.toLowerCase().replace(/[0-9\s]/g, '');

        this.setState( {value} ); 

        if (this.props.handler)
            this.props.handler(this.state.name, value);
    }

    togglePasswordType() {
        this.setState({
            visible: !this.state.visible,
            passwordType: (this.state.passwordType === 'password' ? 'text' : 'password')
        });
    }

}

export default Input;