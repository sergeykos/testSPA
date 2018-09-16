import React from 'react';
import Header from 'components/Header/Header';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer';

const DEFAULT_CLASSNAME = 'app';

class App extends React.Component {
    render() {
        let element = (
            <div className={ DEFAULT_CLASSNAME }>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
        return element;
    }
}

export default App;