import { Route } from "react-router-dom";
import "./App.css";
// Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// Pages
import Anagrams from "./pages/strings/Anagrams/Anagrams";
import Capitalize from "./pages/strings/Capitalize/Capitalize";
import Chunk from "./pages/numbers/Chunk/Chunk";
import Fibonacci from "./pages/numbers/Fibonacci/Fibonacci";
import Fizzbuzz from "./pages/numbers/Fizzbuzz/Fizzbuzz";
import Home from "./pages/Home/Home";
import IntReversal from "./pages/numbers/IntReversal/IntReversal";
import MaxChars from "./pages/strings/MaxChar/MaxChar";
import Palindrome from "./pages/strings/Palindrome/Palindrome";
import StrReversal from "./pages/strings/StrReversal/StrReversal";
import Vowels from "./pages/strings/Vowels/Vowels";

function App() {
  return (
    <>
      <NavBar />
      <Route exact path="/" render={() => <Home />} />
      {/* ---- Number Algo Routes ---- */}
      <Route exact path="/chunk" render={() => <Chunk />} />
      <Route exact path="/fibonacci-recursive" render={() => <Fibonacci />} />
      <Route exact path="/fizzbuzz" render={() => <Fizzbuzz />} />
      <Route exact path="/int-reversal" render={() => <IntReversal />} />
      {/* ---- String Algo Routes ---- */}
      <Route exact path="/anagrams" render={() => <Anagrams />} />
      <Route exact path="/capitalize" render={() => <Capitalize />} />
      <Route exact path="/maxChar" render={() => <MaxChars />} />
      <Route exact path="/palindrome" render={() => <Palindrome />} />
      <Route exact path="/str-reversal" render={() => <StrReversal />} />
      <Route exact path="/vowels" render={() => <Vowels />} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
