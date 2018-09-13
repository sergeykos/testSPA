import React from 'react';
import Slider from './Slider/Slider';
import './style';

const CLASSNAME_PREFIX = 'main';


class Main extends React.Component {

    render() {
        return (
            <div className={ CLASSNAME_PREFIX }>
                <Slider/>
            </div>
        );
    }
}

export default Main;