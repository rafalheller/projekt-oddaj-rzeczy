import React, {Component} from 'react';
import {animateScroll as scroll} from "react-scroll/modules";


class ScrollTopButton extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() {
        return (
            <div className="scroll-top social-media" onClick={this.scrollToTop}><i
                className="fas fa-arrow-circle-up"></i></div>
        );
    }
}

export default ScrollTopButton;