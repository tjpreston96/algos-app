import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// Components
import NavBar from "./components/NavBar";
// Pages
import Fizzbuzz from "./pages/numbers/Fizzbuzz/Fizzbuzz";

function App() {
  return (
    <Router>
      <NavBar />

      <Route exact path="/fizz" render={() => <Fizzbuzz />} />
    </Router>
  );
}

export default App;
