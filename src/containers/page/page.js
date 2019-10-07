import React, { Component } from 'react';
import Header from './header'
import "./page.css"

class page extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="slider">slider</div>
                <div className="echarts">echarts</div>
            </div>
        );
    }
}

export default page;