import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/content/contactPages/contact/Contact";
import Home from "./component/content/homePages/home/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
          </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
