import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Cart/>
      <Header />
      <AvailableMeals/>
    </>
  );
}

export default App;
