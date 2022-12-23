export const QuoteRadioButton = ({offerId, offerActive, setOffer}) => {

    return (
        <button onClick={() => setOffer(offerId)}>
            {offerActive === offerId ?
                <img src="./assets/images/icon/radio-active.svg" />
                :
                <img src="./assets/images/icon/radio-disabled.svg" />
            }
        </button>
    )
}