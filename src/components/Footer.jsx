import React from 'react';

const Footer = () => {
    return (
        <div className="container footer-container" style={{
            textAlign: 'center'
        }}>
            {/* <!-- <p class="float-right">
        <a href="#">Back to top</a>
      </p> --> */}
            <img className="site-logo" style={{ justifySelf: 'center', alignSelf: 'center', textAlign: 'center' }} src="/img/icons/site-logo.png" />
            <br />
            <br />
            <p className="copyright">© Copyright 2019 · Conrad D'Cruz</p>

        </div>
    )
}
export default Footer;