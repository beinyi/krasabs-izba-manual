import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TButton } from "./Main/buttons";
import Main from "./Main/Main";
import "@styles/Guide.css"

export enum descriptionPositions {
    'default' = "guide_description",
    'pay' = "guide_description-pay",
    'service' = "guide_description-service",
    'rating' = "guide_description-rating"
}

type guideProps = {
    guideMap: Array<TButton>,   //Последовательность выделений кнопок -- "карта"
    credits?: Array<string>
}

const Guide = ({ guideMap, credits }: guideProps) => {  //Передает информацию о том, какие кнопки выделять и делать активными

    const [activation, setActivation] = useState<TButton>(guideMap[0]);
    const [isMapOver, setIsMapOver] = useState<boolean>(false);  //Проверка на окончание "карты"
    const [step, setStep] = useState<number>(0);
    const [description, setDescription] = useState<string>(guideMap[0].description ?? "");

    useEffect(() => {
        setActivation(guideMap[step]);
        step !== 0 &&
            guideMap[step - 1].type == guideMap[step].type &&
            guideMap[step - 1].id == guideMap[step].id ?
            setDescription(guideMap[step].altDescription ?? "")
            : setDescription(guideMap[step].description ?? "")
    }, [step]);

    const onNextStep = (forward?: boolean) => {
        forward = forward ?? true;
        forward ?
            (guideMap.length !== step + 1) ?   //Переход на следующий шаг если он есть
                setStep(step + 1)
                : (setIsMapOver(true),
                    setActivation({
                        id: 0,
                        type: 'noType',
                        title: "",
                    }))

            : setStep(step - 1)
    }

    return (
        <div className="page">
            <Main activation={activation} onNextStep={onNextStep} />

            {isMapOver ?
                (credits ?
                    <div className="guide_credits">
                        <h1>{credits[0]}</h1>

                        {credits.filter((v, i) => i > 0).map((s, i) => {
                            return (
                                <p style={{

                                }}
                                    key={i}>{s}</p>
                            )
                        })}

                        <NavLink className="guide_credits_button" to={"/"}>Меню</NavLink>
                    </div>
                    : <NavLink className="guide_button" to={"/"}>Меню</NavLink>)
                : description !== "" &&
                <div className={descriptionPositions[guideMap[step].descriptionPosition ?? 'default']}>
                    {description}
                </div>
            }

        </div>



    )


}

export default Guide;