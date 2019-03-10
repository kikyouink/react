import React, { Component } from 'react';
import Router from './router';
import Tab from './component/tab/tab'
import './App.scss';
class App extends Component {
    componentDidMount() {
        console.log('App 运行中...');
    }
    render() {
        return (
            <div id="container">
                <Router />
                <Tab />
            </div>
        );
    }
}

export default App;
