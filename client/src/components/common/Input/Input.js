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

        this.staticData = {
            className: this.props.className || DEFAULT_CLASSNAME,
            name: this.props.name || DEFAULT_NAME,
            size: this.props.size || DEFAULT_SIZE,
            type: this.props.type || DEFAULT_TYPE,
            defaultValue: DEFAULT_VALUE
        }

        this.state = {
            visible: false,
            passwordType: 'password',
            value: this.props.value || DEFAULT_VALUE
        };

        this.togglePasswordType = this.togglePasswordType.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.refresh && this.state.value !== this.staticData.defaultValue) {
            this.setState({ value: this.staticData.defaultValue });
            if (this.props.handler)
                this.props.handler(this.staticData.name, this.staticData.defaultValue);
        }
    }

    componentDidMount() {
        console.log(`Component ${this.state.className} mounted.`);
    }
    
    componentDidUpdate() {
        console.log(`Component ${this.state.className} updated.`);
    }

    render() {
        let element, className = this.staticData.className, name = this.staticData.name;
        
        switch (this.staticData.type) {
            case 'textarea':
                element = 
                    (<div className={ className + ` ${className}-${this.staticData.size}`} >
                        <textarea className={ className + '__body' } name={ name } onChange={ this.handleChange } value={ this.state.value }></textarea>
                    </div>);
                break;
            case 'password':
                element = 
                    (<div className={ className + ` ${className}-${this.staticData.size}` }>
                        <input className={ className + '__body' } name={ name } onChange={ this.handleChange } type={ this.state.passwordType } value={ this.state.value }></input>
                        <div className={ className + '__eye' + (this.state.visible ? ' shown' : '') } onClick={ this.togglePasswordType }></div>
                    </div>);
                break;
            case 'text':
            default: 
                element = 
                    (<div className={ className + ` ${className}-${this.staticData.size}` }>
                        <input className={ className + '__body' } name={ name } onChange={ this.handleChange } type="text" value={ this.state.value }></input>
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
            this.props.handler(this.staticData.name, value);
    }

    togglePasswordType() {
        this.setState({
            visible: !this.state.visible,
            passwordType: (this.state.passwordType === 'password' ? 'text' : 'password')
        });
    }

}

export default Input;