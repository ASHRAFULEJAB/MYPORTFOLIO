import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
<div className="header-wraper">
    <div className="main-info">
        <h1> Web Development and Website Promotions</h1>
        <Typed
        className="typed-text"
        strings={[ "Full Stack Developer","React Specialist","Web Design By WordPress"]}
        typeSpeed= {50}
        backSpeed = {70}
        loop
        />
        <a href="#" className="btn-main-offer"> Contact ME</a>
    </div>
</div>

  )
}

export default Header