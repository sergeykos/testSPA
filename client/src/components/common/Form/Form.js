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

        this.staticData = {
            className: this.props.className || DEFAULT_CLASSNAME,
            classNamePostfix: this.props.classNamePostfix || DEFAULT_CLASSNAME_POSTFIX,
            size: this.props.size || DEFAULT_SIZE,
            fields: this.props.fields || DEFAULT_FIELDS
        };

        this.state = {
            fieldValues: {}
        };

        this.staticData.fields.forEach(field => {
            if (field['type'] !== 'button')
                this.state.fieldValues[field['name']] = null;
        });

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleField = this.handleField.bind(this);
    }

    componentDidMount() {
        console.log(`Component ${this.staticData.className} mounted.`);
    }

    componentDidUpdate() {
        console.log(`Component ${this.staticData.className} updated.`);
    }

    render() {
        let className = this.staticData.className;

        return (
            <form className={ className + ' ' + this.staticData.classNamePostfix } onSubmit={ this.handleSubmit } autoComplete="off" spellCheck="false">
                {
                    this.staticData.fields.map((field, i) => {
                        if (field['type'] === 'button')
                            return (
                                <div className={ className + '__row' } key={ i }>
                                    <Button className={ field['className'] } name={ field['name'] } text={ field['text'] } size={ this.staticData.size }/>
                                </div>
                            );
                        else {
                            let refresh = this.staticData.classNamePostfix !== this.props.action;

                            return (
                                <div className={ className + '__row' } key={ i }>
                                    <div className={ className + '__row__label' }>{ field['text'] }</div>
                                    <Input className={ field['className'] } name={ field['name'] } type={ field['type'] } size={ this.staticData.size } handler={ this.handleField } refresh={ refresh }/>
                                </div>
                            );
                        }
                    })
                }
            </form>
        );
    }

    handleSubmit(event) {
        let fieldNames = Object.keys(this.state.fieldValues);

        event.preventDefault();

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

        if (this.props.handler) this.props.handler();
    }
}

export default Form;