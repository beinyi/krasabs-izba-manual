import { getMonthsAndYears } from "@components/Main/Sliders/Pay/Transaction"
import "@styles/WaterMeter.css"

type MeterHistoryProps = {
    testimony: number,
    diff: number
}

export const MeterHistory = ({ testimony, diff }: MeterHistoryProps) => {

    testimony += diff;
    const monthsAndYears: Array<string> = getMonthsAndYears();

    const HistoryItem = (monthAndYear: string, i: number) => {
        i != 0 &&
        (diff = parseFloat((Math.random() * (15 - 7) + 7).toFixed(3)));
        testimony = parseFloat((testimony - diff).toFixed(3));

        return (<div className="meter-history_history-item" key={i}>
            <span>{monthAndYear}</span>
            <span className="meter-history_history-item_value">{testimony}</span>
            <span className="meter-history_history-item_value">разн. {diff}</span>
        </div>)
        
    }

    return (
        <>
            <div className="meter-history_header">
                <img src={require('@img/ic_arrow_l.svg')} />
                <span className="meter-history_header_title">История показаний</span>
                <span>Холодное водоснабжение №</span>
            </div>

            <div className="meter-history_slide">
                {monthsAndYears.map((monthAndYear: string, i: number) =>
                    HistoryItem(monthAndYear, i))}
            </div>
        </>
    );
}
