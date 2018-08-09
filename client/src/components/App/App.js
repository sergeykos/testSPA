import React from 'react';
import Header from '../Header/Header';
//import Main from './Main/Main';
//import Footer from './Footer/Footer';

const CLASSNAME_PREFIX = 'app';

class App extends React.Component{
    render(){
        let element = (
            <div className={ CLASSNAME_PREFIX }>
                <Header/>
            </div>
        );
        return element;
    }
}

export default App;