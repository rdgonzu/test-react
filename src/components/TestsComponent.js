import React, {Component} from 'react';

class TestsComponent extends Component {

    state = {
        counter: 0
    }

    inc = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    dec = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    render () {

        return (
            <React.Fragment>
                <h2>State and events</h2>
                <p>Counter: {this.state.counter}</p>
                <p>
                    <button onClick={this.dec}>Dec -</button>
                    <button onClick={this.inc}>Inc +</button>
                </p>
            </React.Fragment>
        );

    }

}

export default TestsComponent;