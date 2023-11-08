import "./App.css";
import "./assets/scss/responsive.scss";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import "./assets/scss/main.scss";

function App() {
  return (
    <>
      <Header />
      <Home />
    </>
  );
}

export default App;
