import { Component } from "react";
import React from "react";
import Childsatu from "./Childsatu";
import Childdua from "./Childdua";

class Parent extends Component {
    state = {
        komponen1: false,
        komponen2: false
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert(`komponen berhasil di update! prevState Childsatu: ${prevState.komponen1} -- prevState Childdua : ${prevState.komponen2}`)   
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return window.confirm(`YAKIN???`);
    }
    ubahkomponen1 = () => {
        this.setState((state) => {
            return { komponen1: !this.state.komponen1}
        })
    }
    ubahkomponen2 = () => {
        this.setState((state) => {
            return { komponen2: !this.state.komponen2}
        })
    }
    render() {
        return (
            <div>
                {this.state.komponen1 ? <Childsatu/> : ''}
                <button onClick={this.ubahkomponen1}>{this.state.komponen1 ? 'SEMBUNYI' : 'MUNCUL'} Anak Pertama!</button>
                <br/>
                {this.state.komponen2 ? <Childdua/> : ''}
                <button onClick={this.ubahkomponen2}>{this.state.komponen2 ? 'SEMBUNYI' : 'MUNCUL'} Anak Kedua!</button>
            </div>
        );
    }
}
export default Parent;