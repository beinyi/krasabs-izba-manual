import Menu from "./components/Menu/Menu";
import "./style/App.less"
import "./fonts/fonts.css"
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";


function App() {
  return (
    <div className="screen">
          <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/pay_guide" element={<Main />} />
            </Routes>
    </div>
  );
}

export default App;
