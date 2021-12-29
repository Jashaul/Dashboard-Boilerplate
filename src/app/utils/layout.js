import React, { Component } from 'react';
import AppRouter from './AppRouter';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    prepareLayout() {
        return (
            <div> 
                <AppRouter />  
            </div>
        );
    }

    render() {
        return this.prepareLayout();
    }
}

export default Layout;