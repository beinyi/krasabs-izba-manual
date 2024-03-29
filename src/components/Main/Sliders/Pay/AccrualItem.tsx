import '@styles/Accrual.css'

type AccrualItemProps = {
    selectedMonth: number,
    setSelectedMonth(v: number): void,
    monthsAndYears: Array<string>
}


const AccrualItem = ({selectedMonth, setSelectedMonth, monthsAndYears }: AccrualItemProps) => {
    return (
        <div className='accrual'>
            <div className='accrual_header'>
                <div className='accrual_header_prev-month'>{monthsAndYears[selectedMonth + 1]}</div>
                <div className='accrual_header_activ-month'>{monthsAndYears[selectedMonth]}</div>
                <div className='accrual_header_next-month'>{monthsAndYears[selectedMonth - 1] ?
                    monthsAndYears[selectedMonth - 1] : ""}</div>
            </div>

            <div className="accrual_body">
                <div style={{ fontFamily: "dindisplay_bold", gridColumn: "1/4", borderTop: "0" }}>Жилищные услуги</div>

                <div className='accrual_body_column1'>ГВ ТЭ на сод. о/и</div>
                <div className='accrual_body_column2'>0.01796 Гкал</div>
                <div className='accrual_body_column3'>36,44 р.</div>

                <div className='accrual_body_column1'>ГВ теплоноситель на сод. о/и</div>
                <div className='accrual_body_column2'>0.28291 м3</div>
                <div className='accrual_body_column3'>1,77 р.</div>

                <div className='accrual_body_column1'>Содерж. и рем. жилого фонда</div>
                <div className='accrual_body_column2'>81.50 м2</div>
                <div className='accrual_body_column3'>1630,00 р.</div>

                <div className='accrual_body_column1'>Холодная вода на сод. о/и</div>
                <div className='accrual_body_column2'>0.28291 м3</div>
                <div className='accrual_body_column3'>8,03 р.</div>

                <div className='accrual_body_column1'>Электричество на сод. о/и</div>
                <div className='accrual_body_column2'>50.4874 кВт⋅ч</div>
                <div className='accrual_body_column3'>242,34 р.</div>
            </div>

            <div className="accrual_footer">
                <span>Итого 1 918,58 р.</span>
                <div className="accrual_footer_button">Оплатить</div>
            </div>

        </div>
    );
}

export default AccrualItem;