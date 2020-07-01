/**
 * class component
 * countdown 5..4..3..2..1
 */

import React from 'react';

export default class CountdownClass extends React.Component {

    state = {
        counter: 5
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState({
                counter: this.state.counter - 1
            })
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.counter === 0) {
            // self destruct
            this.props.destructuringCb(false);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <div>
                <h1>Countdown class</h1>
                <p>
                    {
                        this.state.counter
                    }
                </p>
            </div>
        )
    }
}