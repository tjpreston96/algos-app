import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// Pages
import Fizzbuzz from "./pages/numbers/Fizzbuzz/Fizzbuzz";
import StrReversal from "./pages/strings/StrReversal/StrReversal";
import Palindrome from "./pages/strings/Palindrome/Palindrome";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/palindrome" render={() => <Palindrome />} />
        <Route exact path="/fizzbuzz" render={() => <Fizzbuzz />} />
        <Route exact path="/str-reversal" render={() => <StrReversal />} />
      </Router>
      {/* <Footer /> */}
    </>
  );
}

export default App;
