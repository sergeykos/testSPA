import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'slider';
const DEFAULT_ROW_LENGTH = 3;
const DEFAULT_PICTURES = [0, 1, 2, 3, 4, 5];
const DEFAULT_SMALL_PICTURE_WIDTH = 80;

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPicture: 0,
            wrapperOffset: 0
        };

        this.staticData = {
            className: props.className || DEFAULT_CLASSNAME,
            rowLength: props.rowLength || DEFAULT_ROW_LENGTH,
            pictures: props.pictures || DEFAULT_PICTURES,
            smallPictureWidth: DEFAULT_SMALL_PICTURE_WIDTH
        };

        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        let pictures, innerStyle = { marginLeft: this.state.wrapperOffset + 'px' },
            wrapperStyle = { width: this.staticData.rowLength * this.staticData.smallPictureWidth + 'px' };

        pictures = this.staticData.pictures.map(picture => {
            return <div className={ this.staticData.className + '__small-picture picture-' + picture } key={picture}></div>
        });

        return (
            <div className={ this.staticData.className }>
                <div className={ this.staticData.className + '__main-picture picture-' + this.state.currentPicture }></div>
                <div className={ this.staticData.className + '__row' }>
                    <div className={ this.staticData.className + '__arrow left' } data-type="left" onClick={ this.handleClick }></div>
                        <div className={ this.staticData.className + '__small-picture__wrapper' } style={ wrapperStyle }>
                            <div className={ this.staticData.className + '__small-picture__inner' } style={ innerStyle }>
                                { pictures }
                            </div>
                        </div>
                    <div className={ this.staticData.className + '__arrow right' } data-type="right" onClick={ this.handleClick }></div>
                </div>
            </div>
        );
    }

    handleClick(event) {
        let target = event.target, wrapperOffset;

        if (target.dataset.type === 'left') {
            wrapperOffset =  this.state.wrapperOffset - this.staticData.smallPictureWidth * 2;
        }
        else {
            wrapperOffset =  this.state.wrapperOffset + this.staticData.smallPictureWidth * 2;
        }

        this.setState( {wrapperOffset} );
    }
}

export default Slider;