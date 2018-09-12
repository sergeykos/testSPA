import React from 'react';
import Input from 'components/common/Input/Input';
import Button from 'components/common/Button/Button';
import './style';

const DEFAULT_CLASSNAME = 'form';
const DEFAULT_CLASSNAME_POSTFIX = '';
const DEFAULT_SIZE = 'small';
const DEFAULT_FIELDS = [
    {
        className: 'input',
        name: 'text',
        type: 'text'
    },
    {
        className: 'button',
        name: 'submit',
        type: 'button',
        label: 'button'
    }
];

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            className: this.props.className || DEFAULT_CLASSNAME,
            classNamePostfix: this.props.classNamePostfix || DEFAULT_CLASSNAME_POSTFIX,
            size: this.props.size || DEFAULT_SIZE,
            fields: this.props.fields || DEFAULT_FIELDS,
            fieldValues: {}
        };

        this.state.fields.forEach(field => {
            if (field['type'] !== 'button')
                this.state.fieldValues[field['name']] = null;
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleField = this.handleField.bind(this);
    }

    componentWillMount() {
        console.log(`Component ${this.state.className} mounted.`);
    }

    componentWillUpdate() {
        console.log(`Component ${this.state.className} updated.`);
    }

    render() {
        let className = this.state.className, element;

        element = (
            <form className={ className + ' ' + this.state.classNamePostfix } onSubmit={ this.handleSubmit } autoComplete="off" spellCheck="false">
                {
                    this.state.fields.map((field, i) => {
                        if (field['type'] === 'button')
                            return (
                                <div className={ className + '__row' } key={ i }>
                                    <Button className={ field['className'] } name={ field['name'] } text={ field['text'] } size={ this.state.size }/>
                                </div>
                            );
                        else {
                            let refresh = this.state.classNamePostfix !== this.props.action;

                            return (
                                <div className={ className + '__row' } key={ i }>
                                    <div className={ className + '__row__label' }>{ field['text'] }</div>
                                    <Input className={ field['className'] } name={ field['name'] } type={ field['type'] } size={ this.state.size } handler={ this.handleField } refresh={ refresh }/>
                                </div>
                            );
                        }
                    })
                }
            </form>
        );
        
        return element;
    }

    handleSubmit(event) {

        event.preventDefault();

        let fieldNames = Object.keys(this.state.fieldValues);

        if (!fieldNames.every(fieldName => this.state.fieldValues[fieldName]))
            alert('Complete all fields!');
        else
            alert('Form completed!');
    }

    handleField(fieldName, fieldValue) {
        let fieldValues = Object.assign({}, this.state.fieldValues, {
            [fieldName]: fieldValue
        });

        this.setState( {fieldValues} );

        if (this.props.handler)
            this.props.handler();
    }
}


export default Form;