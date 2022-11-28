import AvisClient from "./component/content/homePages/BodyContent/AvisClient";
import BodyIterm from "./component/content/homePages/BodyContent/BodyIterm";
import Navbar from "./component/content/homePages/headerContent/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <BodyIterm />
      <AvisClient />
    </div>
  );
}

export default App;
