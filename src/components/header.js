import React from "react";
import './header.css';

function Header()  {
    return (
        <header>
            <nav>
                <ul className="nav">
                <img className="navImage" src="../images/wBrandMark_maroon_300x300.png" />
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;


/* <header>
<nav>
    <div className="row">
        <div className="col-2"><img src="../images/WJ_Template_200x200_maroon.png" width={100} /></div>
        <div className="col-2 nav">Pricing</div>
        <div className="col-2 nav">About</div>
        <div className="col-2 nav">Contact</div>
    </div>
</nav>
</header> */