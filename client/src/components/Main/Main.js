import React from 'react';
import Slider from './Slider/Slider';
import News from './News/News';
import './style';

const CLASSNAME_PREFIX = 'main';


class Main extends React.Component {

    render() {
        let newsData = [
            {
                title: 'New 0',
                description: 'Simple new 0. Thank you for reading!'
            },
            {
                title: 'New 1',
                description: 'Hello, you just read new 1, lets read next.'
            },
            {
                title: 'New 2',
                description: 'Hm, why are you reading this? Okay, stop read it.'
            },
            {
                title: 'New 3',
                description: 'You again... You are very persistent. So read the last new.'
            },
            {
                title: 'New 4',
                description: 'You passed all news. Thank you for reading this!'
            }
        ];

        return (
            <div className={ CLASSNAME_PREFIX }>
                <Slider/>
                <News newsData={ newsData }/>
            </div>
        );
    }
}

export default Main;