import { useEffect, useState } from "react";
import { requestButton } from "../buttons";
import { goToMe, props } from "../Main";
import "@styles/Request.css"

type RequestProps = props & {}


const Request = ({ activation, onNextStep }: RequestProps) => {
    const [nameInput, setNameInput] = useState<string>("Имя...");
    const [numberInput, setNumberInput] = useState<string>("Телефон...");
    const [textInput, setTextInput] = useState<string>("Опишите проблему");
    const [isEdit, setIsEdit] = useState<boolean>(true);
    const [isInputsDone, setIsInputsDone] = useState<boolean>(false);

    useEffect(() => {
        if (nameInput != "Имя..." && numberInput.length == 12) {
            onNextStep();
            setIsInputsDone(true);
            setIsEdit(false);
        }

    }, [nameInput, numberInput])

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
                setTextInput(e.target.value);
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
                
                onClick={goToMe(requestButton[0], activation) && isInputsDone ?
                    () => onNextStep()
                    : () => isEdit && setNameInput("")}>
                <input value={nameInput}
                    readOnly={!isEdit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, "name")} />
            </div>

            <div className="request-slide_input-number"
                id={goToMe(requestButton[0], activation) ? "buttonGoToMe2" : ""}
                onClick={goToMe(requestButton[0], activation) && isInputsDone ?
                    () => onNextStep()
                    : () => isEdit && setNumberInput("+7")}>
                <input value={numberInput}
                    readOnly={!isEdit}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e, "number")} />
            </div>

            <div>
                <h4 style={{ fontFamily: "dindisplay_bold" }}>Тема заявки</h4>
                <div className="request-slide_selector">
                    <span>Выберите тему</span>
                    <img src={require("@img/ic_arrow_d_blue.svg")} />
                </div>
            </div>

            <div>
                <h4 style={{ fontFamily: "dindisplay_bold" }}>Текст заявки</h4>
                <div className="request-slide_input-comment"
                    id={goToMe(requestButton[0], activation) ? "buttonGoToMe2" : ""} >
                    <textarea value={textInput}
                        readOnly={!isEdit}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => onInputChange(e, "text")} />
                </div>
            </div>


        </div>
    </div>);
}

export default Request;