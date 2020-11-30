import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Aside from "./components/Aside";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ display: "flex" }}>
        <Main />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
// module.exports = App
