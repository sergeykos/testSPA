import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'slider';
const DEFAULT_ROW_LENGTH = 3;
const DEFAULT_PICTURES = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const DEFAULT_SMALL_PICTURE_WIDTH = 80;

class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPicture: 0,
            innerOffset: 0
        };

        this.staticData = {
            className: props.className || DEFAULT_CLASSNAME,
            rowLength: props.rowLength || DEFAULT_ROW_LENGTH,
            pictures: props.pictures || DEFAULT_PICTURES,
            smallPictureWidth: DEFAULT_SMALL_PICTURE_WIDTH
        };

        this.innerRef = React.createRef();

        this.handleClickArrow = this.handleClickArrow.bind(this);
    }

    render() {
        let pictures, innerStyle = { left: this.state.innerOffset + 'px' },
            wrapperStyle = { width: this.staticData.rowLength * this.staticData.smallPictureWidth + 'px' };

        pictures = this.staticData.pictures.map(pictureIndex => {
            return <div className={ this.staticData.className + '__small-picture picture-' + pictureIndex } key={pictureIndex} onClick={ this.handleClickSmallPicture.bind(this, pictureIndex) }></div>
        });

        return (
            <div className={ this.staticData.className }>
                <div className={ this.staticData.className + '__main-picture picture-' + this.state.currentPicture }></div>
                <div className={ this.staticData.className + '__row' }>
                    <div className={ this.staticData.className + '__arrow left' } data-type="left" onClick={ this.handleClickArrow }></div>
                        <div className={ this.staticData.className + '__small-picture__wrapper' } style={ wrapperStyle }>
                            <div className={ this.staticData.className + '__small-picture__inner' } ref={ this.innerRef } style={ innerStyle }>
                                { pictures }
                            </div>
                        </div>
                    <div className={ this.staticData.className + '__arrow right' } data-type="right" onClick={ this.handleClickArrow }></div>
                </div>
            </div>
        );
    }

    handleClickSmallPicture(pictureIndex) {
        this.setState({
            currentPicture: pictureIndex
        });
    }

    handleClickArrow(event) {
        let target = event.target, innerOffset, inner = this.innerRef.current;

        if (target.dataset.type === 'left') {
            innerOffset =  this.state.innerOffset + this.staticData.smallPictureWidth;
        }
        else {
            innerOffset =  this.state.innerOffset - this.staticData.smallPictureWidth;
        }

        let innerLeft = parseInt(inner.style.left) + innerOffset,
            innerMinLeft = parseInt(inner.style.left) - (this.staticData.pictures.length - this.staticData.rowLength) * this.staticData.smallPictureWidth;


        if (innerLeft <= 0 && innerLeft >= innerMinLeft)
            this.setState( {innerOffset} );
        else {
            target.classList.add('shake');
            setTimeout(function() {
                target.classList.remove('shake');
            }, 510);
        }

    }
}

export default Slider;