import React, { Component } from "react";
import axios from "axios";
import OrderSummary from "./OrderSummary";

class OrderDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      bookname: "",
      bookprice: 0,
      isOpen1: false,
    };
  }

  saveUser = () => {
    this.setState({
      bookname: this.props.bookName,
      bookprice: this.props.bookPrice,
      isOpen1: true,
    });
    // console.log("OrderDetails", this.state);
    this.props.onClose();
    axios
      .post("http://localhost:3001/users", {
        name: this.state.name,
        phone: this.state.phone,
        address: this.state.address,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleModal1 = () => {
    this.setState({
      isOpen1: !this.state.isOpen1,
    });
  };

  render() {
    const nameChange = (e) => {
      this.setState({
        name: e.target.value,
      });
    };

    const phoneChange = (e) => {
      this.setState({
        phone: e.target.value,
      });
    };

    const addressChange = (e) => {
      this.setState({
        address: e.target.value,
      });
    };

    const style = {
      border: "1px solid palevioletred",
      borderRadius: "5px",
      padding: "10px",
      // margin: "10px",
      width: "200px",
      fontSize: "20px",
      fontweight: "bold",
      backgroundColor: "#FFF6FF",
      margin: "10% 40%",
    };

    const button = {
      backgroundColor: "#4CAF50",
      border: "none",
      color: "white",
      padding: "15px 15px",
      fontSize: "16px",
      margin: "8px 2px",
      cursor: "pointer",
      borderRadius: "5px",
      width: "100px",
    };

    const backdropStyle = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: "rgba(0,0,0,0.7)",
      padding: 50,
      visibility: this.props.show ? "visible" : "hidden",
    };

    return (
      <div style={backdropStyle}>
        <div className="container" style={style}>
          <header className="header">
            <label htmlFor="">Order Details</label>
          </header>
          <hr />
          <div className="details">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={nameChange} />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                onChange={phoneChange}
              />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                id="address"
                onChange={addressChange}
              />
            </div>
          </div>
          <div className="submit">
            <button type="submit" onClick={this.saveUser} style={button}>
              Checkout
            </button>
            <button onClick={this.props.onClose} style={button}>
              Cancel
            </button>
          </div>
        </div>
        <OrderSummary
          name={this.state.name}
          phone={this.state.phone}
          address={this.state.address}
          bookname={this.state.bookname}
          bookprice={this.state.bookprice}
          show1={this.state.isOpen1}
          onClose={this.toggleModal1}
        />
      </div>
    );
  }
}

export default OrderDetails;
