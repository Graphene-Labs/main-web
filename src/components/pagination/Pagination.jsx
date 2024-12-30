import Link from 'next/link';
import React from 'react';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const Pagination = () => {
    return (
        <>
            <nav aria-label="navigation">
                <ul className="pagination">
                    <li className="page-item">
                        <Link className="page-link" href="#" onClick={handleSmoothScroll}>
                            <i className="fas fa-angle-double-left"></i>
                        </Link>
                    </li>
                    <li className="page-item active"><Link className="page-link" href="#" onClick={handleSmoothScroll}>1</Link></li>
                    <li className="page-item"><Link className="page-link" href="#" onClick={handleSmoothScroll}>2</Link></li>
                    <li className="page-item"><Link className="page-link" href="#" onClick={handleSmoothScroll}>3</Link></li>
                    <li className="page-item">
                        <Link className="page-link" href="#" onClick={handleSmoothScroll}>
                            <i className="fas fa-angle-double-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Pagination;