import Menu from "./components/Menu/Menu";
import "./style/App.less"
import "./fonts/fonts.css"
import { Route, Routes } from "react-router-dom";
import Guide from "./components/Guide/Guide";
import payMap, { payCredits } from "./guide-maps/payMap"
import servicesMap, { servicesCredits } from "./guide-maps/servicesMap";
import transactionMap from "@guide-maps//transactionMap";
import accrualsMap from "@guide-maps/accrualsMap";
import callMap, { callCredits } from "@guide-maps/callMap";
import checkOrderMap, { checkOrderCredits } from "@guide-maps/checkOrderMap";
import Orders from "@components/Main/Sliders/Services/Orders";
import Request from "@components/Main/Sliders/Request";

// export let nameurl = "/infohelpmobile"; //для боя
export let nameurl = ""; //для тестирования у себя

function App() {
  return (
    <div className="screen">
      <Routes>
        <Route path={nameurl+"/"} element={<Menu />} />
        <Route path={nameurl+"/make_order"} element={<Guide guideMap={servicesMap} credits={servicesCredits} />} />
        <Route path={nameurl+"/pay_guide"} element={<Guide guideMap={payMap} credits={payCredits} />} />
        <Route path={nameurl+"/transaction_guide"} element={<Guide guideMap={transactionMap} />} />
        <Route path={nameurl+"/accruals_guide"} element={<Guide guideMap={accrualsMap} />} />
        <Route path={nameurl+"/call_to_mc"} element={<Guide guideMap={callMap} credits={callCredits} />} />
        <Route path={nameurl+"/check_order"} element={<Guide guideMap={checkOrderMap} />} />

        <Route path="/dev" element={<Request activation={{
          activeType: "navBar",
          activeId: 1
        }} onNextStep={() => {}} />} />

      </Routes>
    </div>
  );
}

export default App;
