import { props } from "../Main";
import "@styles/WaterMeter.css"
import { ReactNode, useState } from "react";

type WaterMeterProps = props

const WaterMeter = ({ activation, onNextStep }: WaterMeterProps) => {
    const [currentValueCold, setCurrentValueCold] = useState<number>();
    

    const WeterMeterItem = (
        title: string,
        icon: string,
        prevValue: number,  
        currentValue?: number,
        setCurrentValue?: (value: number)  => void
    ) =>
        <div className="water-meter-item">
            <div className="water-meter_item_header">
                <div className="water-meter_item_header_icon">
                    <img src={require(`../../../img/${icon}`)} />
                </div>
                <div className="water-meter_item_header_title">
                    <h3>{title}</h3>
                    <img src={require("@img/ic_edit.svg")} />
                </div>
                <span>Дата проверки:</span>
                <span>Номер:</span>
            </div>

            <div className="water-meter_item_body">
                <span>Предыдущее показание (м3)</span>
                <span className="water-meter_item_value">{prevValue.toString().padStart(10, '0')}</span>
                <span>Текущие показания</span>
                <div className="water-meter_item_input"
                onClick={() => setCurrentValue ? setCurrentValue(888.888) : {}}>
                    {currentValue ?? "000000.000"}
                </div>
                <span>Расход</span>
                <span className="water-meter_item_value">{currentValue ? (currentValue - prevValue).toString().padStart(10, '0') : "000000.000"}</span>
                <span className="water-meter_item_history">История</span>
                <div className="water-meter_item_send-button">Отправить</div>
            </div>
            <div style={{
                paddingTop: "5%",
                borderBottom: "1px solid #d2d7da"
            }}></div>
        </div>


    return (
        <div>
            <div className="water-meter_header">
                <img src={require('@img/ic_arrow_l.svg')} />
                <span>Водоснабжение</span>
                <img style={{ marginLeft: "auto" }} src={require('@img/ic_light.svg')} />
            </div>

            <div className="water-meter-slide">
                {WeterMeterItem("Холодное водоснабжение", "ic_water_c.svg", 521.475, currentValueCold, setCurrentValueCold)}
                {WeterMeterItem("Горячее водоснабжение", "ic_water_h.svg", 481.066)}


            </div>
        </div>
    );
}

export default WaterMeter;