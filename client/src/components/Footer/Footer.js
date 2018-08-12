import React from 'react';
import './style';

const CLASSNAME_PREFIX = 'footer';

class Footer extends React.Component{
    render(){
        return <div className={ CLASSNAME_PREFIX }>&copy; Sergey Kostin 2018</div>
    }
}

export default Footer;