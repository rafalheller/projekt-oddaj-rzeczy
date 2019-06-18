import React from 'react';
import facebook from "../images/1447355328_06-facebook.png";
import instagram from "../images/1447355379_Instagram.png";

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; by Anna Dadej </p>
            <div className='social-media'><img src={facebook} alt="facebook"/></div>
            <div className="social-media"><img src={instagram} alt=""/></div>

        </footer>
    );
};

export default Footer;
