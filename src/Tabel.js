import React, { Component } from 'react';
import './App.css'

class Tabel extends Component{

    render(){
        return (
        <div className="card">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">
                        Tabel Mahasiswa
                    </div>
                    <table id="tabel-mahasiswa" className="table-hover table table-bordered">
                        <thead>
                        <tr>
                            <th>NIM</th>
                            <th>NAMA</th>
                            <th>GENDER</th>
                            <th>OPTION</th>
                        </tr>
                        </thead>
                        <tbody>
        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        );
    }
}

export default Tabel;