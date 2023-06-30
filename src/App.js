import Header from "./components/Layout/Header";
import ReactDOM from "react-dom";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      {ReactDOM.createPortal(<Cart />, document.getElementById("cart-modal"))}
      <Header />
      <AvailableMeals />
    </>
  );
}

export default App;
