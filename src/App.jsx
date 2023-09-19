import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import PriceOptions from "./Components/PriceOptions/PriceOptions";
import RenderLineChart from "./Components/RenderLineChart/RenderLineChart";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <RenderLineChart></RenderLineChart>
    </>
  );
}

export default App;
