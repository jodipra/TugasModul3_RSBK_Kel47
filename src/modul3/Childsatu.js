import React, { Component } from "react";

class Childsatu extends Component {
    state = {
        nama: "Hizkia"
    }
    componentDidMount() {
        alert(`Mount triggered!`)
    }
    ChangeName = () => {
        this.setState((state) => {
            if (state.nama === "Hizkia"){
                return {nama : "DimasPG"}
            } else {
                return { nama: "Hizkia"}
            }
        })
    }

    componentWillUnmount() {
        alert(`Anak pertama bakal hilang :(`)
    }
    render(){
        return (
            <div>
                <h3>Aku Anak Pertama</h3>
                <button onClick={this.ChangeName}>Change Name!</button>
                <br/>
                <h3>{this.state.nama}</h3>
            </div>
        );
    }
}
export default Childsatu;