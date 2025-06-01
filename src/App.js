import "./App.css";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Result from "./components/Result";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";

function App() {
  return (
    <Provider store={Appstore}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Body />} />
            <Route path="/plans" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
