import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
