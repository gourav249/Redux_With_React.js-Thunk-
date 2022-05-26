import Form from "./components/Form";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UpdateDetails from "./components/UpdateDetails";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/edit/:id" element={<UpdateDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
