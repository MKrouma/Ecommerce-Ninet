import { Routes, Route } from "react-router-dom";
// import Contact from "./component/content/contactPages/contact/Contact";
import Home from "./component/content/homePages/home/Home";
import HomeShop from "./component/content/shopPages/HomeShop/HomeShop";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/shop" element={<HomeShop />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
