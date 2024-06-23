import "./App.css";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import RoundedText from "./components/RoundedText";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <RoundedText />
        <Page1 />
        <Page2 />
      </div>
    </>
  );
}

export default App;
