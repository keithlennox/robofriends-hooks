/*In the past, a single error in any react component could break the entire application 
and present some ugly error message to the user. Error Boundries allow a sigle component to fail,
but allow the rest of the application to function normally.

Basic usage: wrap any component with this errorBoundry component and the 
componentDidCatch lifecycle method will catch the error. Inside componentDidcatch,
we set hasError state to true. The state update causes a re-render. Down in the 
rendor method, if hasError is false, the child components render, if hasError is true,
our custom error message displays.

Note: in development mode react will still display an ugly error. Error boundries are
meant to work in production only. In Dev, you want to be able to see the full error messages.
However, if you refresh the browser page you will see Error Boundry in action for a split second.*/

import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { //This is a new built in lifecycle method, similar to try / catch
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <h1>Ooooops. That is not good</h1>
        }
        return this.props.children
    
    }
}

export default ErrorBoundry;