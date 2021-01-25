import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollToTop = () => {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if(!showScroll && window.pageYOffset > 400){
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset < 400){
            setShowScroll(false);
        }
    };

    const scrollUp = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <FaArrowCircleUp className="scrollToTop" onClick={scrollUp} style={{height: 40, display: showScroll ? 'initial' : 'none'}} />
    )
}

export default ScrollToTop;