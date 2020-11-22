import React, { Component } from "react";

class Childdua extends Component {
    state = {
        angka : 0 
    }
    componentDidMount() {
        alert(`Mount Triggered!`)
    }
    tambahAngka = () => {
        this.setState((state) => { return {angka: state.angka + 1}})
    }
    
    kurangAngka = () => {
        this.setState((state) => { return {angka: state.angka - 1}})
    }
    componentWillUnmount() {
        alert(`anak yang kedua bakal hilang :(`)
    }
    render() {
        return (
            <div>
                <h3>Aku anak kedua</h3>
                <button onClick={this.tambahAngka}>Bertambah</button>
                <button onClick={this.kurangAngka}>Berkurang</button>
                <br/>
                <span>{this.state.angka}</span>
            </div>
        )
    }
}
export default Childdua;