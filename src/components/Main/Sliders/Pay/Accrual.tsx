import { transactionButtons } from '@components/Main/buttons';
import { goToMe, props } from '@components/Main/Main';
import '@styles/Accrual.css'
import { useState } from 'react';
import AccrualItem from './AccrualItem';
import { getMonthsAndYears } from './Transaction';

type AccrualProps = props & {
    monthId: number,
    onClose(): void,
}

const Accrual = ({ activation, onNextStep, monthId, onClose }: AccrualProps) => {
    const [selectedMonth, setSelectedMonth] = useState<number>(monthId);
    const [touchStartX, setTouchStartX] = useState<number>(0);

    const monthsAndYears = getMonthsAndYears();

    let nextMonth: -1 | 1 = 1;

    const SwipeMove = (e: React.TouchEvent<HTMLDivElement>) => {    // движение карусели за тачем 
        const delta: number = touchStartX - e.changedTouches[0].clientX;
        let touchX: string = Math.abs(delta).toString();

        delta > 0 ?
            (nextMonth = -1, touchX = `-${touchX}`)
            : nextMonth = 1;

        if ((selectedMonth != 11 || nextMonth != 1) && (selectedMonth != 0 || nextMonth != -1)) {
            e.currentTarget.style.transform = `translateX(${touchX}px)`;
        }
    }

    const SwipeEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        const delta: number = touchStartX - e.changedTouches[0].clientX;
        let endX: string = Math.abs(delta).toString();

        if (Math.abs(delta) > 50) {         // анимация перемотки и смена месяца при достаточном движении тача
            delta > 0 ?
                (nextMonth = -1, endX = `-${endX}`)
                : nextMonth = 1;


            if ((selectedMonth != 11 || nextMonth != 1) && (selectedMonth != 0 || nextMonth != -1)) {
                e.currentTarget.animate([{ transform: `translateX(${endX}px)` }, { transform: `translateX(${80 * nextMonth}%)` }], 200)
                e.currentTarget.style.transform = `translateX(0)`
                setTimeout(() => setSelectedMonth(selectedMonth + nextMonth), 200);
            }
        }
        else {                           // возврат на место
            delta > 0 &&
                (endX = `-${endX}`);

            if ((selectedMonth != 11 || nextMonth != 1) && (selectedMonth != 0 || nextMonth != -1)) {
                (e.currentTarget.animate([{ transform: `translateX(${endX}px)` }, { transform: `translateX(0)` }], 200));
                e.currentTarget.style.transform = `translateX(0px)`;
            }
        }
    }

    return (
        <div className='slideMenu'>
            <div className="header">
                <div style={{padding: "1%", borderRadius: "10px"}}
                id={goToMe(transactionButtons[3], activation) ? "buttonGoToMe" : ""}
                    data-description={goToMe(transactionButtons[3], activation) ? transactionButtons[3].description : {}}
                    onClick={() => onNextStep()}>
                    <img src={require('@img/ic_share.svg')} />
                </div>
                <h2>Начисления</h2>
                <img src={require('@img/ic_close_pd.svg')}
                    onClick={() => onClose()} />
            </div>

            <div className="carouselAccrual"
                onTouchStart={(e: React.TouchEvent<HTMLDivElement>) => { setTouchStartX(e.changedTouches[0].clientX) }}
                onTouchEnd={(e: React.TouchEvent<HTMLDivElement>) => { SwipeEnd(e) }}
                onTouchMove={(e: React.TouchEvent<HTMLDivElement>) => { SwipeMove(e) }}
                id={goToMe(transactionButtons[4], activation) ? "swipeMe" : ""}
                onClick={() => onNextStep()}>

                {selectedMonth != 11 && <div className='prevAccrual'>
                    <AccrualItem selectedMonth={selectedMonth + 1} setSelectedMonth={setSelectedMonth} monthsAndYears={monthsAndYears} />
                </div>}


                <AccrualItem selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} monthsAndYears={monthsAndYears} />

                {selectedMonth != 0 && <div className='nextAccrual'>
                    <AccrualItem selectedMonth={selectedMonth - 1} setSelectedMonth={setSelectedMonth} monthsAndYears={monthsAndYears} />
                </div>}

            </div>




        </div>
    );
}

export default Accrual;