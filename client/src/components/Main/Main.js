import React from 'react';
import Slider from './Slider/Slider';
import './style';

const CLASSNAME_PREFIX = 'main';


class Main extends React.Component {

    render() {
        let sliderProps = {
            rowLength: 5
        }

        return (
            <div className={ CLASSNAME_PREFIX }>
                <Slider {...sliderProps}/>
            </div>
        );
    }
}

export default Main;