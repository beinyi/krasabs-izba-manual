import { props } from "@components/Main/Main";
import "@styles/WaterMeter.css"
import { useEffect, useState } from "react";
import { MeterHistory } from "./MeterHistory";
import { waterMeterВuttons } from "@components/Main/buttons";
import { goToMe } from "@components/Main/Main";

type WaterMeterProps = props

const WaterMeter = ({ activation, onNextStep, setIsViewMainHeader }: WaterMeterProps) => {
    const [currentValueCold, setCurrentValueCold] = useState<number>();
    const [prevValue, setPrevValue] = useState<number>((Math.random() * (530 - 500) + 500));
    const [diff, setDiff] = useState<number>(Math.random() * (15 - 10) + 10);

    const [isViewHistory, setisViewHistory] = useState<boolean>(false);
    const [isViewWarning, setIsViewWarning] = useState<boolean>(false);

    useEffect(() => {
        setIsViewMainHeader && setIsViewMainHeader(false);
    }, [])


    const WeterMeterItem = (
        title: string,
        icon: string,
        prevValue: number,
        currentValue?: number,
        setCurrentValue?: (value: number) => void
    ) =>
        <div className="water-meter-item">
            <div className="water-meter_item_header">
                <div className="water-meter_item_header_icon">
                    <img src={require(`../../../../img/${icon}`)} />
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
                <span className="water-meter_item_value">{`000${prevValue.toFixed(3)}`}</span>
                <span>Текущие показания</span>
                <div className="water-meter_item_input"
                    id={goToMe(activation, waterMeterВuttons[0]) && setCurrentValue ? "buttonGoToMe" : ""}
                    onClick={() => goToMe(activation, waterMeterВuttons[0]) &&
                        setCurrentValue && (setCurrentValue(prevValue + diff), onNextStep())}>
                    {currentValue ? currentValue.toFixed(3) : "000000.000"}
                </div>
                <span>Расход</span>
                <span className="water-meter_item_value">{currentValue ? `0000${diff.toFixed(3)}` : "000000.000"}</span>
                <span className="water-meter_item_history"
                    id={goToMe(waterMeterВuttons[3], activation) && setCurrentValue ? "textGoToMe" : ""}
                    onClick={() => goToMe(waterMeterВuttons[3], activation) && setCurrentValue &&
                        (setisViewHistory(true), onNextStep())}>История</span>
                <div className="water-meter_item_send-button"
                    id={goToMe(activation, waterMeterВuttons[1]) && setCurrentValue ? "greenButtonGoToMe" : ""}
                    onClick={() => goToMe(activation, waterMeterВuttons[1]) &&
                        setCurrentValue && (setIsViewWarning(true), onNextStep())}>Отправить</div>
            </div>
            <div style={{
                paddingTop: "5%",
                borderBottom: "1px solid #d2d7da"
            }}></div>
        </div>


    return (
        <>
            {isViewHistory ?
                <MeterHistory testimony={prevValue} diff={diff} />
                :
                <>
                    <div className="water-meter_header">
                        <img src={require('@img/ic_arrow_l.svg')} />
                        <span>Водоснабжение</span>
                        <img style={{ marginLeft: "auto" }} src={require('@img/ic_light.svg')} />
                    </div>

                    <div className="water-meter-slide">
                        {WeterMeterItem("Холодное водоснабжение", "ic_water_c.svg", prevValue, currentValueCold, setCurrentValueCold)}
                        {WeterMeterItem("Горячее водоснабжение", "ic_water_h.svg", 481.066)}
                    </div>

                    {isViewWarning &&
                        <div className="shading">
                            <div className="water-meter_warning">
                                <h3>Предупреждение</h3>
                                <span>Перед отравкой проверьте введенные данные</span>
                                <div className="water-meter_warning_button-wrapper">
                                    <div className="water-meter_warning_button"
                                        onClick={() => { setIsViewWarning(false) }}>
                                        ОТМЕНА
                                    </div>
                                    <div className="water-meter_warning_button"
                                    id={goToMe(waterMeterВuttons[2], activation) ? "textGoToMe" : ""}
                                        onClick={() => goToMe(waterMeterВuttons[2], activation) && (
                                            setPrevValue(prevValue + diff),
                                            setCurrentValueCold(undefined),
                                            setIsViewWarning(false),
                                            onNextStep()
                                        )}>
                                        ОТПРАВИТЬ
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </>
            }

        </>
    );
}

export default WaterMeter;