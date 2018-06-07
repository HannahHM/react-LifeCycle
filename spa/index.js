import React, { Component } from 'react';
import ReactDom from 'react-dom';
// app基础js及css
import '../lib/base';

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log('Initial Render');
        console.log('constructor');
        this.state = {
            date: new Date()
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentDidMount() {
        console.log('componentDidMount');
        // this.timer = setInterval(()=> {
        //     this.tick()
        // }, 1000)
    }

    componentWillReceiveProps(nextprops) {
        console.log(`componentWillReceiveProps nextprops:${JSON.stringify(nextprops)}`);
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        return true;
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        console.log('render');
        return (
            <div>
                <button onClick={this.tick.bind(this)}>获取当前时间</button>
                <button onClick={this.Unmount.bind(this)}>卸除当前组件</button>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
}

ReactDom.render(
    <LifeCycle />,
    document.getElementById('root')
);


// 热更新
if(module.hot) {
    module.hot.accept();
}