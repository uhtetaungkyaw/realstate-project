import React from 'react'

const Mainvisual = () => {
    return (
        <div className='mainvisual'>
            <div className="l-wrap-inner">
                <div className="inner-bloc">
                    <h1>
                        Myanmar Real Estate - Buy, Sell, And Rent Properties Online
                    </h1>
                    <div className="product-filter">
                        <div className="product-filter__wrap">
                            <div className="search-txt">
                                <input type="text" name="q" id="search-txt" placeholder='Search by Text or ID Number' />
                            </div>
                            <div className="search-txt">
                                <select name="selectedservice" className='selectitem'>
                                    <option value="forsale">For Sale</option>
                                    <option value="forrent">For Rent</option>
                                    <option value="allitem" defaultValue='allitem'>All Items</option>
                                </select>
                            </div>
                            <div className="search-txt">
                            <select name="selectedregion" className='selectitem'>
                                    <option value="forsale">Mandalay</option>
                                    <option value="forrent">Yangon</option>
                                    <option value="allitem" defaultValue='allitem'>All Regions</option>
                                </select>
                            </div>
                            <div className="search-txt">
                            <select name="selectedtownship" className='selectitem'>
                                    <option value="forsale">Kamayut</option>
                                    <option value="forrent">Sanchaung</option>
                                    <option value="allitem" defaultValue='allitem'>All Townships</option>
                                </select>
                            </div>
                            <div className="search-txt">
                            <select name="selectedtype" className='selectitem'>
                                    <option value="forsale">House</option>
                                    <option value="forrent">Condo</option>
                                    <option value="allitem" defaultValue='allitem'>All Types</option>
                                </select>
                            </div>
                            <div className="search-txt">
                            <select name="selectedpricefrom" className='selectitem'>
                                    <option value="allitem" defaultValue='Price' disabled>Price (From)</option>
                                    <option value="forsale">10 (Lakh)</option>
                                    <option value="forrent">100 (Lakh)</option>
                                </select>
                            </div>
                            <div className="search-txt">
                            <select name="selectedpriceto" className='selectitem'>
                                    <option value="allitem" defaultValue='Price' disabled>Price (To)</option>
                                    <option value="forsale">100 (Lakh)</option>
                                    <option value="forrent">1000 (Lakh)</option>
                                </select>
                            </div>
                            <button className='btn btn--search'>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainvisual