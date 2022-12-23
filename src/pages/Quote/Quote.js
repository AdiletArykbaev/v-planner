import { useState } from "react"
import VendorChat from "../Chat/VendorChat"
import { Link } from "react-router-dom"
import { QuoteBlockInfo } from "../../components/Quote/QuoteInfoBlock"
import { QuoteRequisites } from "../../components/Quote/QuoteRequisites"
import { QuoteComment } from "../../components/Quote/QuoteComment"
import { QuoteDeclineButton } from "../../components/Quote/QuoteDeclineButton"
import { QuoteAcceptButton } from "../../components/Quote/QuoteAcceptButton"
import { QuoteTableOffers } from "../../components/Quote/QuoteTableOffers"

export default function Quote () {

    const [radioActive, setRadioActive] = useState(1)
    const [checkBoxToggle, setCheckBoxToggle] = useState(true)

    const offers = [
        {
            id: 1,
            title: 'Brand Design (Logo, Colours & Typography)',
            description: 'Crafting a digital branding presence for developing the website and establishing a digital presence.',
            qty: 1,
            unitPrice: 25000,
        },
        {
            id: 2,
            title: 'Brand Design (Logo, Colours & Typography)',
            description: 'Crafting a digital branding presence for developing the website and establishing a digital presence.',
            qty: 1,
            unitPrice: 25000,
        },
        {
            id: 3,
            title: 'Brand Design (Logo, Colours & Typography)',
            description: 'Crafting a digital branding presence for developing the website and establishing a digital presence.',
            qty: 1,
            unitPrice: 25000,
        },
    ]

    return(
        <div className="quote">
            <div className="quote__content">
                <div className="conteiner-btn">
                    <Link to='/chat' element={<VendorChat />}>
                        <button className="quote__btn-back">
                            <img className="btn-img" src="./assets/images/icon/arrow-back.svg" />
                            <span className="btn-title">Back</span>
                        </button>
                    </Link>
                </div>
                
                <div className="quote__form">

                    <div className="quote__header">
                        <img className="mark" src="./assets/images/quote-mark.png" />
                        <QuoteRequisites quoteNum={2732} date={'AUG 25, 2022'} />
                    </div>
                    
                    <div className="quote__offer-data">
                        <div className="section-block">
                            <QuoteBlockInfo title={"Title"} description={"When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake. While wedding cakes serve as the sweet ending to a celebration, dreaming up epic wedding cake ideas is a fun task to undertake as soon as you've set a date and conceptualized a design vision. Fewer wedding planning tasks are more therapeutic than scrolling through images of decadent tiered masterpieces decked out with sugar flowers—and we're here to help you do just that."}/>

                            <QuoteTableOffers offers={offers} />

                            <QuoteTableOffers offers={offers} optional />

                            {/* <table className="grid-table">
                                <tr className="grid-table__title">
                                    <td className="grid-table__title__item first">
                                        MAIN OFFERS
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
                                <tr className="inside-light-line">
                                    <td className="first">
                                        <button onClick={() => setRadioActive(1)}>
                                            {radioActive === 1 ?
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
                                        <button onClick={() => setRadioActive(2)}>
                                            {radioActive === 2 ?
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
                            </table>
                            
                            <div className="offer-data__table optional">
                                <table className="grid-table">
                                    <tr className="grid-table__title">
                                        <td className="grid-table__title__item first">
                                            OPTIONAL
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
                                    <tr className="inside-light-line">
                                        <td className="first">
                                            <button onClick={() => setCheckBoxToggle(prev => !prev)}>
                                                {checkBoxToggle ? 
                                                    <img src="./assets/images/icon/check-active.svg" /> 
                                                    : 
                                                    <img src="./assets/images/icon/check-disabled.svg" />
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
                                </table>
                            </div> */}

                            <div className="offer-data__total">
                                <div className="item-conteiner">
                                    <div className="item-conteiner__item">
                                        <div>Subtotal</div>
                                        <div>$100,000</div>
                                    </div>
                                    <hr />
                                    <div className="item-conteiner__item">
                                        <div>Total</div>
                                        <div className="item__count-bold">$100,000</div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div className="section-block">
                    <QuoteBlockInfo title={"Title"} description={"When couples start thinking about their wedding plans, one of the details that typically first comes to mind is their wedding cake. While wedding cakes serve as the sweet ending to a celebration, dreaming up epic wedding cake ideas is a fun task to undertake as soon as you've set a date and conceptualized a design vision. Fewer wedding planning tasks are more therapeutic than scrolling through images of decadent tiered masterpieces decked out with sugar flowers—and we're here to help you do just that."}/>
                        <QuoteComment comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} />
                        <div className="form_buttons">
                            <QuoteDeclineButton />
                            <QuoteAcceptButton />
                        </div>
                    </div>
                    
                    <div className="page-number-conteiner">
                        <div className="page-number__count-info">
                            Page 1 of 1
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
