import React from 'react';
import DropdownVariant from './DropdownVariant/DropdownVariant';
import './style';

const CLASSNAME_PREFIX = 'dropdown';
const LANGUAGES = ['ru', 'en', 'ua'];
const DEFAULT_LANGUAGE = 'ru';

class Dropdown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpened: false,
            selectedLanguage: DEFAULT_LANGUAGE
        };
        this.toggle = this.toggle.bind(this);
    }
    render(){
        let rootClassName = `${CLASSNAME_PREFIX}`,
            variantList = LANGUAGES.map((language, i) => <DropdownVariant key={ i } value={ language } />);

        if (!this.state.isOpened)
            rootClassName += ' hidden';

        return (
            <div className={ rootClassName } onClick={ this.toggle }>
                <div className={ `${CLASSNAME_PREFIX}__icon ${this.state.selectedLanguage}` }></div>
                <div className={ `${CLASSNAME_PREFIX}__variants` }>{ variantList }</div>
            </div>
        );
    }
    toggle(e){
        let target = e.target;

        if (target.classList.contains('dropdown__variant'))
            this.setState({
                selectedLanguage: target.dataset.value
            });
        this.setState({
            isOpened: !this.state.isOpened
        });
    }
}

export default Dropdown;