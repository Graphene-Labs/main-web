import Link from 'next/link';
import React from 'react';

const ErrorPageContent = () => {
    return (
        <>
            <div className="error-page-area default-padding text-center">
                <div className="shape-left" style={{ background: 'url(/assets/img/shape/44-left.png)' }}></div>
                <div className="shape-right" style={{ background: 'url(/assets/img/shape/44-right.png)' }}></div>
                <div className="container">
                    <div className="error-box">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>Error</h1>
                                <h2>Something Went Wrong</h2>
                                <p>
                                    Household shameless incommode at no objection behaviour. Especially do at he possession insensible sympathize boisterous it. Songs he on an widen me event truth.
                                </p>
                                <Link className="btn mt-20 btn-md btn-theme" href="/">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPageContent;