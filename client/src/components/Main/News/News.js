import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'news';


class News extends React.Component {

    constructor(props) {
        super(props);

        this.staticData = {
            className: this.props.className || DEFAULT_CLASSNAME,            
        };

        this.state = {
            openStatus: this.props.newsData.map(newData => false)
        }
    }

    render() {
        return (
            <div className={ this.staticData.className }>
                <div className={ this.staticData.className + '__title' }>Breaking news!</div>
                {
                    this.props.newsData.map((newData, i) => {
                        let classNamePostfix = (this.state.openStatus[i] ? '' : ' closed') ;

                        return (
                            <div className={ this.staticData.className + '__new' + classNamePostfix } key={ i }>
                                <div className={ this.staticData.className + '__new__title' } onClick={ this.handleClick.bind(this, i) }>{ newData.title }</div>
                                <div className={ this.staticData.className + '__new__description' }>{ newData.description }</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }

    handleClick(i, event) {
        let openStatus = this.state.openStatus.map(status => {
            if (status) return false;
            else return status
        });

        openStatus[i] = !this.state.openStatus[i];
        this.setState({ openStatus });
    }
}

export default News;