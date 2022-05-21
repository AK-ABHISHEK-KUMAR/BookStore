import React, { Component } from "react";
import axios from "axios";
import Greetings from "./Greetings";

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen2: false
    }
  }

  saveData = () => {
    this.setState({
      isOpen2: true
    });

    this.props.onClose();
    axios.post("http://localhost:3001/orderData", {
      name: this.props.name,
      phone: this.props.phone,
      address: this.props.address,
      bookName: this.props.bookname,
      bookPrice: this.props.bookprice
    });
  }

  toggleModal2 = () => {
    this.setState({
      isOpen2: !this.state.isOpen2,
    });
  };

  render() {
    const style = {
      border: "1px solid palevioletred",
      borderRadius: "5px",
      padding: "10px",
      margin: "10px",
      width: "400px",
      fontSize: "20px",
      fontweight: "bold",
      backgroundColor: "#FFF6FF",
    };

    const button = {
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      padding: "10px 10px",
      fontSize: "16px",
      margin: "8px 2px",
      cursor: "pointer",
      borderRadius: "5px",
      width: "50px",
    };

    const button1 = {
      backgroundColor: "tomato",
      border: "none",
      color: "white",
      padding: "10px 10px",
      fontSize: "16px",
      margin: "8px 2px",
      cursor: "pointer",
      borderRadius: "5px",
      width: "80px",
    };

    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      padding: 50,
      visibility: this.props.show1 ? "visible" : "hidden",
    };

    
    // console.log("Data Received", this.props.bookname);

    return (
      <div style={backdropStyle}>
        <div className="container" style={style}>
          <header className="header">
            <label htmlFor="">Order Summary</label>
          </header>
          <hr />
          <div className="details">
            <div
              className="userdetails"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <label style={{ width: "fit-content", fontSize: "18px" }}>{this.props.name}</label>
              <label style={{ width: "fit-content", fontSize: "18px" }}>{this.props.phone}</label>
              <label style={{ width: "fit-content", fontSize: "18px" }}>{this.props.address}</label>
            </div>
            <hr />
            <div
              className="purchasedetails"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <label style={{ width: "fit-content" }}>Purchased Books</label>
              <h4>{this.props.bookname}</h4>
            </div>
            <hr />
            <div
              className="amount"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignContent: "center",
              }}
            >
              <label
                htmlFor=""
                style={{ marginRight: "20px", marginTop: "12px", fontSize: "18px" }}
              >
                {this.props.bookprice}
              </label>
              <button type="submit" onClick={this.saveData} style={button}>
                Buy
              </button>
              <button onClick={this.props.onClose} style={button1}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        <Greetings show2 = {this.state.isOpen2} onClose={this.toggleModal2} />
      </div>
    );
  }
}

export default OrderSummary;
