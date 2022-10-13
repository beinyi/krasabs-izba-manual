import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { buttonTypes } from "./Main/buttons";
import Main from "./Main/Main";

export type TActivation = {         //Информация о том, какую кномпку выделить
    activeType: buttonTypes,
    activeId: number,
}

type guideProps = {
    guideMap: Array<TActivation>,   //Последовательность выделений кнопок -- "карта"
    credits: Array<string>
}

const Guide = ({ guideMap, credits }: guideProps) => {  //Передает информацию о том, какие кнопки выделять и делать активными

    const [selectedType, setSelectedType] = useState<buttonTypes | null>(null);  
    const [selectedId, setSelectedId] = useState<number>(0);  
    const [isMapOver, setIsMapOver] = useState<boolean>(false);  //Проверка на окончание "карты"
    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        setSelectedType(guideMap[step].activeType);
        setSelectedId(guideMap[step].activeId);
    }, [step]);

    const onNextStep = () => {
        (guideMap.length !== step + 1) ?   //Переход на следующий шаг если он есть
            setStep(step + 1)
            : setIsMapOver(!isMapOver);
    }

    return (
        isMapOver ?

            <div style={{                       //Вывод "титров" из "карты"
                display: "flex",
                flexDirection: "column"
            }}>
                <h1>{credits[0]}</h1>

                {credits.filter((v, i) => i > 0).map((s, i) => {
                    return (
                        <p style={{
                            fontFamily: "dindisplay_regular",
                            margin: "2%"
                        }}
                        key={i}>{s}</p>
                    )
                })}

                <NavLink style={{
                    textDecoration: "none",
                    fontSize: "1.5em",
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "#515369",
                    width: "30%",
                    alignSelf: "center",
                    borderRadius: "10px",
                    border: "1px solid #696b92",
                    padding: "0 5% 0 5%"
                }} to={"/"}>Меню</NavLink>
            </div>

            : <Main activeType={selectedType} activeId={selectedId} onNextStep={onNextStep} /> 
    )


}

export default Guide;