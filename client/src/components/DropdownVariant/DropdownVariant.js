import React from 'react';
import './style.scss';

const CLASSNAME_PREFIX = 'dropdown__variant';

class DropdownVariant extends React.Component{
    render(){
        let className = `${CLASSNAME_PREFIX} ${CLASSNAME_PREFIX}-${this.props.value}`;

        return <div data-value={this.props.value} className={className}></div>;
    }
}

export default DropdownVariant;