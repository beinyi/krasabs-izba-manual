import { actButtons, meterButtons, TButton } from "../buttons"
import "@styles/HomeSlider.css"
import { goToMe, props } from "../Main"

type HomeProps = props & {
    setSlider(slider: number): void;
}

const Home = ({ activation, onNextStep, setSlider }: HomeProps) => {


    const renderButton = (button: TButton) => {
        return (
            <div id={goToMe(button, activation) ? "buttonGoToMe" : ""}
                className="home-slide_button"
                onClick={() => {
                    goToMe(button, activation) &&
                    (button.type == "slideMeter" ? setSlider(5 + button.id) : setSlider(7 + button.id),
                        onNextStep())
                }}
                key={`${button.type}-${button.id}`}>
                <img className="home-slide_button_icon" src={require(`../../../img/${button.icon}`)} alt={button.title} />
                <span>{button.title}</span>
            </div>
        )
    }

    return (
        <div className="home-slide">
            <div className="home-slide_meter-menu">
                <span style={{ fontFamily: "dindisplay_bold" }}>Счётчики</span>
                {meterButtons.map((button: TButton) => renderButton(button))}
            </div>

            <div className="home-slide_action-menu">
                <span style={{ fontFamily: "dindisplay_bold" }}>Действия</span>
                {actButtons.map((button: TButton) => renderButton(button))}
            </div>
        </div>
    )
}

export default Home;