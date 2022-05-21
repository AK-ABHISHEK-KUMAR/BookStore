import "./App.css";
import BookStore from "./Components/BookStore";
import OrderDetails from "./Components/OrderDetails";
import Greetings from "./Components/Greetings";
import OrderSummary from "./Components/OrderSummary";

function App() {
  return (
    <div className="App">
      <BookStore />
      <OrderDetails />
      <Greetings />
      <OrderSummary />
    </div>
  );
}

export default App;
