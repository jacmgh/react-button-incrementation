import React from 'react';
import {render} from 'react-dom';

const buttonStyle = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '1em 2em',
    border: '1px solid #fff',
    borderColor: '#bfb #6b6 #272',
    borderRadius: '4px',
    outline: 'none',
    background: 'linear-gradient(#8d8, #5a5)',
    color: '#fff',
    font: '1em Arial, sans-serif'
};

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            countClicks: 0,
            buttonText: 'Click me'
        };
    }

    handleClick() {
        let newClicks = this.state.countClicks + 1;
        let newText = `You've clicked me ${newClicks} time${newClicks > 1 ? 's' : ''}.`;

        this.setState({countClicks: newClicks, buttonText: newText});
    }

    render() {
        return (
            <button style={buttonStyle} onClick={this.handleClick.bind(this)}>{this.state.buttonText}</button>
        );
    }
}

render(<App/>, document.getElementById('app'));
