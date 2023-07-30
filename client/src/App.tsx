import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/scss/main.css";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./assets/scss/main.css";

const App = () => (
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Provider>
  </Router>
);

export default App;
