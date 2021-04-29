import { Route } from "react-router-dom";
import "./App.css";
// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// Pages
import Home from "./pages/Home/Home";
import Fizzbuzz from "./pages/numbers/Fizzbuzz/Fizzbuzz";
import IntReversal from "./pages/numbers/IntReversal/IntReversal";
import StrReversal from "./pages/strings/StrReversal/StrReversal";
import Palindrome from "./pages/strings/Palindrome/Palindrome";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" render={() => <Home />} />
      {/* ---- Number Algo Routes ---- */}
      <Route exact path="/fizzbuzz" render={() => <Fizzbuzz />} />
      <Route exact path="/int-reversal" render={() => <IntReversal />} />
      {/* ---- String Algo Routes ---- */}
      <Route exact path="/palindrome" render={() => <Palindrome />} />
      <Route exact path="/str-reversal" render={() => <StrReversal />} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
