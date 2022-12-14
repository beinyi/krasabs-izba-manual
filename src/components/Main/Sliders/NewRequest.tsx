import { useEffect, useState } from "react";
import { requestButton } from "../buttons";
import { goToMe, props } from "../Main";
import "@styles/Request.css"

type RequestProps = props


const NewRequest = ({ activation, onNextStep, setIsViewMainHeader }: RequestProps) => {
    const [nameInput, setNameInput] = useState<string>("Имя...");
    const [numberInput, setNumberInput] = useState<string>("Телефон...");
    const [commentInput, setCommentInput] = useState<string>("Опишите проблему");
    const [isInputsDone, setIsInputsDone] = useState<boolean>(false);
    const [isViewThemes, setIsViewThemes] = useState<boolean>(false);
    const [selectedTheme, setSelectedTheme] = useState<Themes | null>(null);

    const themesArray: Array<string> = [
        "Сантехника",
        "Электрика",
        "Лифт",
        "Домофон",
        "Мусоропровод",
        "Газовое оборудование",
        "Уборка",
        "Стены/двери/окна"
    ]

    type Themes = typeof themesArray[number];

    useEffect(() => {
        if (nameInput != "Имя..." && numberInput.length == 12) {
            onNextStep();
            setIsInputsDone(true);
        }
    }, [nameInput, numberInput])

    useEffect(() => {
        setIsViewMainHeader && setIsViewMainHeader(false);
    }, [])


    const onInputChange = (e: React.ChangeEvent<HTMLInputElement> |
        React.ChangeEvent<HTMLTextAreaElement>,
        inputType: "name" | "number" | "text") => {
        switch (inputType) {
            case "name":
                setNameInput(e.target.value);
                break;
            case "number":
                setNumberInput(e.target.value);
                break;
            case "text":
                setCommentInput(e.target.value);
                break;
            default: break;
        }
    }

    return (<div>
        <div className="request_header_title">
            <img src={require('@img/ic_arrow_l.svg')}
                onClick={() => { }} />
            <span>Новая заявка</span>
        </div>

        <div className="request-slide">
            <div className="request-slide_input-name"
                id={goToMe(requestButton[0], activation) ? "buttonGoToMe" : ""}
                onClick={() => goToMe(requestButton[0], activation) && !isInputsDone && setNameInput("")}>
                <input value={nameInput}
                    readOnly={isInputsDone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, "name")} />
            </div>

            <div className="request-slide_input-number"
                id={goToMe(requestButton[0], activation) ? "buttonGoToMe2" : ""}
                onClick={() => goToMe(requestButton[0], activation) && !isInputsDone && setNumberInput("+7")}>
                <input value={numberInput}
                    readOnly={isInputsDone}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, "number")} />
            </div>

            <div>
                <h4 style={{ fontFamily: "dindisplay_bold" }}>Тема заявки</h4>
                <div className="request-slide_selector"
                    id={goToMe(requestButton[1], activation) ? "buttonGoToMe" : ""}
                    onClick={() => { goToMe(requestButton[1], activation) && setIsViewThemes(true) }}>
                    <span>{selectedTheme ?? "Выберите тему"}</span>
                    <img src={require("@img/ic_arrow_d_blue.svg")} />
                </div>
            </div>

            <div>
                <h4 style={{ fontFamily: "dindisplay_bold" }}>Текст заявки</h4>
                <div className="request-slide_input-comment"
                    id={goToMe(requestButton[2], activation) ? "buttonGoToMe2" : ""}
                    onClick={() => {
                        goToMe(requestButton[2], activation) &&
                            (setCommentInput("Ждём мастера."),
                                onNextStep())
                    }}>
                    {commentInput}
                </div>
            </div>

            <div className="request-slide_buttons-wrapper">
                <div className="request-slide_buttons-wrapper_photo"
                    id={goToMe(requestButton[3], activation) ? "buttonGoToMe" : ""}
                    onClick={() => {
                        goToMe(requestButton[3], activation) &&
                            onNextStep();
                    }}>
                    <img src={require("@img/ic_photo_blue.svg")} />
                    Фото
                </div>

                <div className="request-slide_buttons-wrapper_file"
                    id={goToMe(requestButton[3], activation) ? "buttonGoToMe" : ""}
                    onClick={() => {
                        goToMe(requestButton[3], activation) &&
                            onNextStep();
                    }}>
                    <img src={require("@img/ic_file.svg")} />
                    Файл
                </div>
            </div>

            <div className="request-slide_send-button"
                id={goToMe(requestButton[4], activation) ? "greenButtonGoToMe" : ""}
                onClick={() => {
                    goToMe(requestButton[4], activation) && isInputsDone &&
                        onNextStep()
                }}>
                <span>Отправить</span>
            </div>

            {isViewThemes &&
                <div className="shading">
                    <div className="request-slide_themes">
                        <h2>Тема заявки</h2>

                        <div className="request-slide_themes_body">
                            {themesArray.map((theme: Themes, i: number) =>
                                <div className="request-slide_themes_body_thema"
                                    key={i}
                                    onClick={() => (setSelectedTheme(theme),
                                        setIsViewThemes(false), onNextStep())}>
                                    {theme}
                                </div>
                            )}
                        </div>
                    </div>
                </div>}

        </div>
    </div >);
}

export default NewRequest;