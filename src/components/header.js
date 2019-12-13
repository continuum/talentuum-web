import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/talentuum-logo-title.png"

import { openLogin }  from "../services/auth"


const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <a href="/" title={"Talentuum"}>
                        <img alt={"Logo"} src={logo}/>
                    </a>
                </div>
                <div className={"button"}>
                    <a href='#' onClick={openLogin}>Regístrate / Ingresa</a>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
