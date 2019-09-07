/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql, Link} from "gatsby"
import Intercom from 'react-intercom';
import Header from "./header"
import "../../static/styles/main.scss"
import logo from "../../static/images/talentuum-logo.png"
import iconTwitter from "../../static/images/icon-twitter.svg"
import iconLinkedin from "../../static/images/icon-linkedin.svg"
import iconGitHub from "../../static/images/icon-github.svg"
import iconInstagram from "../../static/images/icon-instagram.svg"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <Intercom appID="mz18j330"/>
            <main>{children}</main>
            <footer>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-5"}>
                            <div className={"widget__item"}>
                                <div className={"logo"}>
                                    <a href="/" title={"Talentuum"}>
                                        <img alt={"Logo"} src={logo}/>
                                    </a>
                                </div>

                                <div className={"about"}>
                                    <p>Talentuum conecta al talento que hace la diferencia con los desafíos que valen la pena. </p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <ul className={"links"}>
                                    <h4>Talentuum</h4>
                                    <ul>
                                        <li><a href="/about" title={"About Us"}>About</a></li>
                                        {/* <li><a href={"https://Talentuum.io/blog"}>Blog</a></li> */}
                                        <li><a className={"links__special"} href={"mailto:talentuum@continuum.cl?subject=Feedback"} target={"_blank"} title={"Nos encanta recibir feedback"}>Feedback</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>

                        <div className={"col-2"}>
                            <div className={"widget__item"}>
                                <div className={"links"}>
                                    <h4>Soporte</h4>
                                    <ul>
                                        <li><a href={"mailto:talentuum@continuum.cl?subject=Contact"} target={"_blank"} title={"Contáctanos"}>Contacto</a></li>
                                        {/* <li><Link to="/privacy" title={"Privacy Policy"}>Privacy</Link></li> */}
                                        {/* <li><Link to="/terms" title={"Terms Of Use"}>Terms Of Use</Link></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className={"col-3"}>
                            <div className={"widget__item"}>
                                <div className={"social"}>
                                    <a href="https://twitter.com/continuumhq" target={"_blank"} title={"Twitter"}><img alt={"Twitter"} src={iconTwitter}/></a>
                                    {/* <a href="https://www.linkedin.com/company/Talentuum/" target={"_blank"} title={"LinkedIn"}><img alt={"LinkedIn"} src={iconLinkedin}/></a>
                                    <a href="https://github.com/Talentuum" target={"_blank"} title={"GitHub"}><img alt={"GitHub"} src={iconGitHub}/></a>
                                    <a href="https://www.instagram.com/Talentuum.io/" target={"_blank"} title={"Instagram"}><img alt={"Instagram"} src={iconInstagram}/></a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"copyright"}>
                        <p>Copyright {new Date().getFullYear()}, {` `} <a href="https://www.talentuum.cl." title={"Talentuum"}>Talentuum</a>. Todos los derechos reservados.</p>
                    </div>
                </div>
            </footer>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
