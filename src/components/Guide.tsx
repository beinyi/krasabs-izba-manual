import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { buttonTypes } from "./Main/buttons";
import Main from "./Main/Main";
import s from "../style/Guide.module.css"

export type TActivation = {         //Информация о том, какую кномпку выделить
    activeType: buttonTypes | null,
    activeId: number,
    altDescription?: boolean,
    timeout?: boolean,
}

type guideProps = {
    guideMap: Array<TActivation>,   //Последовательность выделений кнопок -- "карта"
    credits?: Array<string>
}

const Guide = ({ guideMap, credits }: guideProps) => {  //Передает информацию о том, какие кнопки выделять и делать активными

    const [activation, setActivation] = useState<TActivation>({
        activeType: null,
        activeId: 0
    });
    const [isMapOver, setIsMapOver] = useState<boolean>(false);  //Проверка на окончание "карты"
    const [isViewMain, setIsViewMain] = useState<boolean>(true);
    const [step, setStep] = useState<number>(0);

    useEffect(() => {
        setActivation(guideMap[step]);
    }, [step]);

    const onNextStep = (forward?: boolean, timeout?: boolean) => {
        forward = forward ?? true;
        forward ?
            (guideMap.length !== step + 1) ?   //Переход на следующий шаг если он есть
                setStep(step + 1)
                : timeout ?
                    (setActivation({
                        activeType: null,
                        activeId: 0
                    }),
                        setTimeout(() => setIsMapOver(!isMapOver), 1000))
                    : setIsMapOver(!isMapOver)
            : setStep(step - 1)
    }

    return (
        <div className={s.page}>
            {isViewMain &&
                <Main activation={activation} onNextStep={onNextStep} />}

            {isMapOver ?
                credits ?
                        <div className={s.credits}>
                            <h1>{credits[0]}</h1>

                            {credits.filter((v, i) => i > 0).map((s, i) => {
                                return (
                                    <p style={{

                                    }}
                                        key={i}>{s}</p>
                                )
                            })}

                            <NavLink className={s.button} to={"/"}>Меню</NavLink>
                        </div>
                    : <NavLink className={s.button} to={"/"}>Меню</NavLink>
                : ""}

        </div>



    )


}

export default Guide;