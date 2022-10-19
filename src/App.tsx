import Menu from "./components/Menu/Menu";
import "./style/App.less"
import "./fonts/fonts.css"
import {Route, Routes} from "react-router-dom";
import Guide from "./components/Guide";
import payMap, {payCredits} from "./guide-maps/payMap"
import Main from "./components/Main/Main";
import servicesMap, {servicesCredits} from "./guide-maps/servicesMap";



function App() {
  return (
    <div className="screen">
          <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/make_order" element={<Guide guideMap={servicesMap} credits={servicesCredits} />} />
                <Route path="/pay_guide" element={<Guide guideMap={payMap} credits={payCredits} />} /> //Вызов гайда с картой по оплате
            </Routes>
    </div>
  );
}

export default App;
