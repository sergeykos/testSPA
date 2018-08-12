import React from 'react';
//import Chat from './Chat/Chat';
import './style';

const CLASSNAME_PREFIX = 'main';
const TEXT_CONTENT = {
    'en': "Hello there, its my test react app. Don't judge me strictly. I tried to build it from scratch. You can look socket-chat, location changer, and authorization. Try it. I hope you will be pleasure."
};


class Main extends React.Component{
    render(){
        let element;

        element = (
            <div className={ CLASSNAME_PREFIX }>
                <div className={ CLASSNAME_PREFIX + '__text-content' }>{ TEXT_CONTENT['en'] }</div>
                {/* <Chat className={ CLASSNAME_PREFIX + '__chat' }/> */}
            </div>
        );
        return element;
    }
}

export default Main;