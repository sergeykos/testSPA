import React from 'react';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

const CLASSNAME_PREFIX = 'app';

class App extends React.Component{
    render(){
        let element = (
            <div className={ CLASSNAME_PREFIX }>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
        return element;
    }
}

export default App;