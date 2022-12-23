export const QuoteRequisites = ({ quoteNum, date }) => {
    return (
        <div className="quote__header__data">
            <div className="data_conteiner">
                <div className="data_conteiner__title">QUOTE NUMBER</div>
                <div className="data_conteiner__value">{quoteNum}</div>
            </div>
            <div className="data_conteiner">
                <div className="data_conteiner__title">ISSUE DATE</div>
                <div className="data_conteiner__value">{date}</div>
            </div>
        </div>
    )
}