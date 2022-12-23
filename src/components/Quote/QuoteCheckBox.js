export const QuoteCheckBox = ({offerId, offersActive, setOffer}) => {

    const toggleHandler = () => {
        console.log(offerId, offersActive)
        console.log(offersActive.find(offer => offer.id === 3))

        if(offersActive.find(offer => offer.id === offerId)) {
            
            setOffer(prev => [...prev].filter(offer => offer.id !== offerId))
        }
        setOffer(prev => [...prev, offerId])
    }
    

    return (
        <button onClick={toggleHandler}>
            {offersActive.find(offer => offer.id === offerId) ?
                <img src="./assets/images/icon/check-active.svg" />
                :
                <img src="./assets/images/icon/check-disabled.svg" />
            }
        </button>
    )
}