import React from 'react';
import './style';

const DEFAULT_CLASSNAME = 'game';
const DEFAULT_BALL_LEFT = 100;
const DEFAULT_BALL_TOP = 10;
const DEFAULT_BALL_DIRECTION_X = 'left';
const DEFAULT_BALL_DIRECTION_Y = 'bottom';
const DEFAULT_PLATE_LEFT = 90;
const DEFAULT_PLATE_TOP = 380;
const DEFAULT_GAME_SPEED = 10;


class Game extends React.Component {

    constructor(props) {
        super(props);

        this.staticData = {
            className: this.props.className || DEFAULT_CLASSNAME
        };

        this.state = {
            isClosed: true,
            isStarted: false,
            speed: 10,
            ballData: {
                direction: {
                    X: DEFAULT_BALL_DIRECTION_X,
                    Y: DEFAULT_BALL_DIRECTION_Y
                },
                position: {
                    left: DEFAULT_BALL_LEFT,
                    top: DEFAULT_BALL_TOP
                }
            },
            plateData: {
                position: {
                    left: DEFAULT_PLATE_LEFT,
                    top: DEFAULT_PLATE_TOP
                }
            }
        };

        this.plate = React.createRef();
        this.field = React.createRef();
        this.ball = React.createRef();

        this.handleClickLabel = this.handleClickLabel.bind(this);
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    componentDidMount() {
        this.staticData.fieldData = {
            width: this.field.current.offsetWidth,
            height: this.field.current.offsetHeight
        };

        this.staticData.plateData = {
            minLeft: 0,
            maxLeft: this.field.current.offsetWidth - this.plate.current.offsetWidth,
            defaultPosition: {
                left: this.plate.current.offsetLeft,
                top: this.plate.current.offsetTop
            },
            width: this.plate.current.offsetWidth,
            height: this.plate.current.offsetHeight,
        };

        this.staticData.ballData = {
            minLeft: 0,
            maxLeft: this.staticData.fieldData.width - this.ball.current.offsetWidth,
            minTop: 0,
            maxTop: this.staticData.fieldData.height - this.ball.current.offsetHeight,
            defaultPosition: {
                left: this.ball.current.offsetLeft,
                top: this.ball.current.offsetTop
            },
            defaultDirection: {
                X: this.state.ballData.direction.X,
                Y: this.state.ballData.direction.Y
            },
            width: this.ball.current.offsetWidth,
            height: this.ball.current.offsetHeight
        };
    }

    render() {
        let ballStyle, plateStyle; 

        ballStyle = {
            left: this.state.ballData.position.left + 'px',
            top: this.state.ballData.position.top + 'px'
        };
        plateStyle = {
            left: this.state.plateData.position.left + 'px',
            top: this.state.plateData.position.top + 'px'
        };

        return (
            <div className={ this.staticData.className + (this.state.isClosed ? ' closed' : '') + (this.state.isStarted ? ' started' : '') }>
                <div className={ this.staticData.className + '__label' } onClick={ this.handleClickLabel }>
                    <div className={ this.staticData.className + '__arrow' }></div>
                </div>
                <div className={ this.staticData.className + '__play-button' } onClick={ this.handleClickPlay }>PLAY</div>
                <div className={ this.staticData.className + '__field' } onMouseMove={ this.handleMouseMove } ref={ this.field }>
                    <div className={ this.staticData.className + '__ball' } style={ ballStyle } ref={ this.ball }></div>
                    <div className={ this.staticData.className + '__plate' } style={ plateStyle } ref={ this.plate }></div>
                </div>
            </div>
        );
    }

    handleClickLabel() {
        this.setState({
            isClosed: !this.state.isClosed
        });

        if (this.state.isStarted)
            this.stopGame();
    }

    handleClickPlay() {
        this.startGame();
    }

    handleMouseMove(event) {
        let plateLeft;

        if (this.state.isStarted) {
            plateLeft = event.clientX - this.field.current.getBoundingClientRect().x - Math.ceil(this.staticData.plateData.width / 2);

            if (plateLeft <= this.staticData.plateData.minLeft)
                plateLeft = this.staticData.plateData.minLeft;
            if (plateLeft >= this.staticData.plateData.maxLeft)
                plateLeft = this.staticData.plateData.maxLeft;
            
            this.setState({
                plateData: {
                    position: {
                        left: plateLeft,
                        top: this.state.plateData.position.top
                    }
                }
            });
        }
    }

    startGame() {
        this.interval = setInterval(() => {
            let ballData = this.getNewBallData();

            this.setState({ 
                isStarted: true, 
                ballData: {
                    position: ballData.position,
                    direction: ballData.direction
                }
            });
        }, 5);
    }

    stopGame() {
        clearInterval(this.interval);

        this.setState({
            isStarted: false,
            ballData: {
                position: this.staticData.ballData.defaultPosition,
                direction: this.staticData.ballData.defaultDirection
            },
            plateData: {
                position: this.staticData.plateData.defaultPosition,
            }
        });
    }

    getNewBallData() {
        let ballStaticData, ballCurrentData, ballNewPosition, ballNewDirection, plateCurrentPosition; 

        ballStaticData = this.staticData.ballData;
        ballCurrentData = this.state.ballData;
        ballNewPosition = {
            left: (ballCurrentData.direction.X === 'left' ? ballCurrentData.position.left - 1 : ballCurrentData.position.left + 1),
            top: (ballCurrentData.direction.Y === 'bottom' ? ballCurrentData.position.top + 1 : ballCurrentData.position.top - 1)
        };
        ballNewDirection = {
            X: ballCurrentData.direction.X,
            Y: ballCurrentData.direction.Y
        };

        plateCurrentPosition = this.state.plateData.position;

        if (ballNewPosition.left < ballStaticData.minLeft) {
            ballNewDirection.X = 'right';
            ballNewPosition.left += 2;
        }
        if (ballNewPosition.left > ballStaticData.maxLeft) {
            ballNewDirection.X = 'left';
            ballNewPosition.left -= 2;
        }

        if (ballNewPosition.top < ballStaticData.minTop) {
            ballNewDirection.Y = 'bottom';
            ballNewPosition.top += 2;
        }
        if (ballNewPosition.top > ballStaticData.maxTop) {
            ballNewDirection.Y = 'top';
            ballNewPosition.top -= 2;
        }

        if (this.isBounced(ballNewPosition, plateCurrentPosition)) {
            ballNewDirection.Y = 'top';
            ballNewPosition.top -= 2;
        }
        if (this.isLost(ballNewPosition, plateCurrentPosition)) {
            ballNewPosition.left = this.staticData.ballData.defaultPosition.left;
            ballNewPosition.top = this.staticData.ballData.defaultPosition.top;
            alert(':(');
        }
        
        return { position: ballNewPosition, direction: ballNewDirection };
    }

    isBounced(ballPosition, platePosition) {
        return (ballPosition.left >= platePosition.left - this.staticData.ballData.width &&
                ballPosition.left <= platePosition.left + this.staticData.plateData.width &&
                ballPosition.top + this.staticData.ballData.height === platePosition.top);
    }

    isLost(ballPosition, platePosition) {
        return (ballPosition.top + this.staticData.ballData.height > platePosition.top);
    }
}

export default Game;