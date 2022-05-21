import React, { Component } from "react";
import axios from "axios";
import OrderDetails from "./OrderDetails";

const style = {
  backgroundColor: "#FFF6FF",
  padding: "20px",
  borderBottom: "1px solid #ddd",
  borderTop: "1px solid #ddd",
  fontSize: "18px",
  marginBottom: "20px",
};

const button = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "15px 10px",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "5px",
  width: "150px",
};

const buttonbuy = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "8px 8px",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer",
  borderRadius: "5px",
  width: "100px",
};

class BookStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      bookName: "",
      bookPrice: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/bookslist").then((res) => {
      this.setState({
        books: res.data,
      });
    });
  }

  buynow = (e) => {
    // e.preventDefault();
    this.setState({
      bookName: e.target.parentNode.parentNode.childNodes[1].innerHTML,
      bookPrice: e.target.parentNode.parentNode.childNodes[2].innerHTML,
      isOpen: true,
    });
    // alert(this.state.bookName, this.state.bookPrice);
    // alert(e.target.parentNode.parentNode.childNodes[1].innerHTML);
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div className="container" style={style}>
        <header className="header">
          <label
            htmlFor=""
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontFamily: "cursive",
            }}
          >
            The Book Store
          </label>
        </header>
        <hr />
        {/* <div
          className="cart"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <button type="submit" style={button}>
            {" "}
            Go to Cart <span style={{ color: "#6032AC" }}>1</span>
          </button>
        </div> */}
        <div className="book-list">
          <table>
            <th>S.no</th>
            <th>Book Title</th>
            <th>Price</th>
            <tbody>
              {this.state.books.map((book, index) => {
                return (
                  <tr id={index} key={index}>
                    <td>{book.id}</td>
                    <td>{book.title}</td>
                    <td>$ {book.price}</td>
                    <td>
                      <button
                        type="submit"
                        style={buttonbuy}
                        onClick={this.buynow}
                      >
                        Buy now
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <OrderDetails
          show={this.state.isOpen}
          onClose={this.toggleModal}
          bookName={this.state.bookName}
          bookPrice={this.state.bookPrice}
        />
      </div>
    );
  }
}

export default BookStore;
