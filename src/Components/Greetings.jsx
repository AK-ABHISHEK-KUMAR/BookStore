export default function Greetings(props) {
  const style = {
    border: "1px solid palevioletred",
    borderRadius: "5px",
    backgroundColor: "#FFF6FF",
    padding: "10px",
    margin: "10% 40%",
    width: "200px",
    fontSize: "20px",
    fontweight: "bold",
    color: "darkslategray"
  };

  const backdropStyle = {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundImage: "linear-gradient(to right, plum, #FFF6FF)",
    padding: 50,
    visibility: props.show2 ? "visible" : "hidden",
  };

  const button = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "8px 6px",
    fontSize: "16px",
    margin: "8px 2px",
    cursor: "pointer",
    borderRadius: "5px",
    width: "50px",
  };

  return (
    <div style={backdropStyle}>
      <div className="container" style={style}>
        <p>Thanks for purchasing with us</p>
        <button onClick={props.onClose} style={button} >close</button>
      </div>
    </div>
  );
}
