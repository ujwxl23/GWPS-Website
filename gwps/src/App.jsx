import Routers from "./common/Routers";
import { BrowserRouter } from "react-router-dom";

// Cat HAckathon Project

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
