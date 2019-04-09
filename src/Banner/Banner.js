import React, { Component } from 'react';
import './Isi.css'

class Banner extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <h3>{this.props.layanan}</h3>
            </div>
        );
    }
}

export default Banner;
