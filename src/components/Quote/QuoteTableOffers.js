import { useState } from "react"
import { QuoteCheckBox } from "./QuoteCheckBox"
import { QuoteRadioButton } from "./QuoteRadioButton"

export const QuoteTableOffers = ({ optional, offers }) => {
    const [mainOfferActive, setMainOfferActive] = useState(1)
    const [checkBoxToggle, setCheckBoxToggle] = useState([])
    console.log(checkBoxToggle)
    return (
        <table className="grid-table">
            <tr className="grid-table__title">
                <td className="grid-table__title__item first">
                    {optional ? 'OPTIONAL' : 'MAIN OFFERS'}
                </td>
                <td className="grid-table__title__item second">
                </td>
                <td className="grid-table__title__item third">
                    QTY
                </td>
                <td className="grid-table__title__item fourth">
                    UNIT PRICE
                </td>
                <td className="grid-table__title__item fifth">
                    AMOUNT
                </td>
            </tr>
            {offers.map(offer =>
                <tr key={offer.id} className="inside-light-line">
                    <td className="first">
                            {optional ?
                                <QuoteCheckBox offerId={offer.id} offersActive={checkBoxToggle} setOffer={setCheckBoxToggle}/>
                            :
                                <QuoteRadioButton offerId={offer.id} offerActive={mainOfferActive} setOffer={setMainOfferActive}/>
                            }
                    </td>
                    <td className="grid-table__content second">
                        <div className="grid-table__content-title">{offer.title}</div>
                        <div className="grid-table__content-desc">{offer.description}</div>
                    </td>
                    <td className="third">
                        {offer.qty}
                    </td>
                    <td className="fourth price">
                        ${offer.unitPrice}
                    </td>
                    <td className="fifth price amount">
                        ${offer.qty * offer.unitPrice}
                    </td>
                </tr>
            )}
            {/* <tr className="inside-light-line">
                <td className="first">
                    <button onClick={() => setMainOfferActive(1)}>
                        {mainOfferActive === 1 ?
                            <img src="./assets/images/icon/radio-active.svg" />
                            :
                            <img src="./assets/images/icon/radio-disabled.svg" />
                        }
                    </button>
                </td>
                <td className="grid-table__content second">
                    <div className="grid-table__content-title">Brand Design (Logo, Colours & Typography)</div>
                    <div className="grid-table__content-desc">Crafting a digital branding presence for developing the website and establishing a digital presence.</div>
                </td>
                <td className="third">
                    1
                </td>
                <td className="fourth price">
                    $25,000
                </td>
                <td className="fifth price amount">
                    $25,000
                </td>
            </tr>
            <tr>
                <td className="first">
                    <button onClick={() => setMainOfferActive(2)}>
                        {mainOfferActive === 2 ?
                            <img src="./assets/images/icon/radio-active.svg" />
                            :
                            <img src="./assets/images/icon/radio-disabled.svg" />
                        }
                    </button>

                </td>
                <td className="grid-table__content second">
                    <div className="grid-table__content-title">Brand Design (Logo, Colours & Typography)</div>
                    <div className="grid-table__content-desc">Crafting a digital branding presence for developing the website and establishing a digital presence.</div>
                </td>
                <td className="third">
                    1
                </td>
                <td className="fourth price">
                    $25,000
                </td>
                <td className="fifth price amount">
                    $25,000
                </td>
            </tr> */}
        </table>
    )
}