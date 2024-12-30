import React from 'react';
import SinglePortfolioV1 from './SinglePortfolioV1';
import PortfolioV1Data from '@/assets/jsonData/portfolio/PortfolioV1Data.json'

const PortfolioV1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`portfolio-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="content-left">
                                    <h4 className="sub-title">Popular Projects</h4>
                                    <h2 className="title">Featured Works</h2>
                                </div>
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <p>
                                    Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy themselves.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row mt--50 mt-md-3-0 mt-xs--30">
                        {PortfolioV1Data.slice(0, 4).map(portfolio =>
                            <div className="col-lg-6 item-center" key={portfolio.id}>
                                <SinglePortfolioV1 portfolio={portfolio} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV1;