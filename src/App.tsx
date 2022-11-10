import Menu from "./components/Menu/Menu";
import "./style/App.less"
import "./fonts/fonts.css"
import {Route, Routes} from "react-router-dom";
import Guide from "./components/Guide";
import payMap, {payCredits} from "./guide-maps/payMap"
import servicesMap, {servicesCredits} from "./guide-maps/servicesMap";
import Transaction from "./components/Main/Sliders/Pay/Transaction";
import Pay from "./components/Main/Sliders/Pay/Pay";
import transactionMap, { transactionCredits } from "./guide-maps/transactionMap";
import Accrual from "./components/Main/Sliders/Pay/Accrual";
import accrualsMap from "@guide-maps/accrualsMap";



function App() {
  return (
    <div className="screen">
          <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/make_order" element={<Guide guideMap={servicesMap} credits={servicesCredits} />} />
                <Route path="/pay_guide" element={<Guide guideMap={payMap} credits={payCredits} />} />
                <Route path="/transaction_guide" element={<Guide guideMap={transactionMap}/>} />
                <Route path="/accruals_guide" element={<Guide guideMap={accrualsMap}/>} />
                <Route path="/dev" element={<Accrual monthId={0}/>} />
                
            </Routes>
    </div>
  );
}

export default App;
