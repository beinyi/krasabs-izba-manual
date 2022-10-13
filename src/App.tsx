import Menu from "./components/Menu/Menu";
import "./style/App.less"
import "./fonts/fonts.css"
import {Route, Routes} from "react-router-dom";
import Main from "./components/Main/Main";
import Guide from "./guide-maps/Guide";
import payMap, {payCredits} from "./guide-maps/payMap"



function App() {
  return (
    <div className="screen">
          <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/pay_guide" element={<Guide guideMap={payMap} credits={payCredits} />} /> //Вызов гайда с картой по оплате
            </Routes>
    </div>
  );
}

export default App;
