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
        testimony -= diff;
        i != 0 &&
        (diff = (Math.random() * (15 - 7) + 7));

        return (<div className="meter-history_history-item" key={i}>
            <span>{monthAndYear}</span>
            <span className="meter-history_history-item_value">{testimony.toFixed(3)}</span>
            <span className="meter-history_history-item_value">разн. {diff.toFixed(3)}</span>
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
