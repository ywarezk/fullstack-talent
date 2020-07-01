/**
 * component that displays hello world
 * as a class
 */

import React from 'react';
import PropTypes from 'prop-types';

// class HelloWorldClass extends React.Component<PropsInterface, StateInterface> { }

export default class HelloWorldClass extends React.Component {
    static propTypes = {
         message: PropTypes.string.isRequired
    }

    state = {
        isPShown: true,
        message: 'hello'
    }

    toggleP = () => {
        console.log('hello');
        this.setState({
            isPShown: !this.state.isPShown
        })
    }

    render() {
        // { message: 'message from parent' }
        // this.prop
        // this.state
        return (
            <>
                <h1>
                    Hello World from class
                </h1>
                {
                    this.state.isPShown && (
                        <p>
                            {
                                this.props.message
                            }
                        </p>
                    )
                }                
                <button onClick={this.toggleP}>
                    Toggle P
                </button>
            </>
        )
    }
 }