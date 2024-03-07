import React from "react";
import "./nav.scss";
import Close from "../../assets/svg/close.svg";

const Nav = () => {
    return(
        <main className="nav-container">
            <img src={Close} alt="Close nav button" />

            <section className="menu-items">
                <a href="#">Meny</a>
                <hr />
                <a href="#">Vårt kaffe</a>
                <hr />
                <a href="#">Min profil</a>
                <hr />
                <a href="#">Orderstatus</a>
            </section>
        </main>
    )
}

export default Nav;